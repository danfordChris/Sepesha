<?php

namespace app\controllers;

use Yii;
use kartik\mpdf\Pdf;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\web\Response;
use yii\web\Controller;
use app\models\WfStages;
use app\models\Workflow;
use app\models\Signature;
use yii\web\UploadedFile;

use app\models\WfUserRole;
use app\models\ModUserRole;
use app\models\SystemRoles;
use app\models\User;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;

class AdminController extends Controller
{


	/**
	 * @inheritdoc
	 */
	public function behaviors()
	{
		return [
			'access' => [
				'class' => AccessControl::class,
				'rules' => [
					[
						'allow' => true,
						'roles' => ['@'],
						'matchCallback' => function ($rule, $action) {
							return  User::auth('admin');
						}
					],
				],
			],
			'verbs' => [
				'class' => VerbFilter::class,
				'actions' => [
					'logout' => ['post'],
				],
			],
		];
	}

	public function actions()
	{
		return [
			'error' => [
				'class' => 'yii\web\ErrorAction',
			],
			'captcha' => [
				'class' => 'yii\captcha\CaptchaAction',
				'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
			],
		];
	}


	public function actionIndex()
	{

		$q = "SELECT q.qid,date_format(q.cdate,'%M, %Y'),c.name,CONCAT(q.cltype,': ',q.ctype),q.status,q.approved FROM quotations q INNER JOIN customers c ON c.cid = q.cid ";
		$q .= "ORDER BY q.cdate desc";


		$td = '<table id="datatable" class="table table-bordered" style="width:100%"><thead>';
		$td .= '<tr><th>SN</th><th>Quote #</th><th>Date</th><th>Clent</th><th>Tilte</th><th>Status</th><th>Action</th></tr></thead>';

		$rst = Yii::$app->db->createCommand($q)->queryAll(false);
		if ($rst) {
			$td .= '<tbody>';
			$i = 1;

			foreach ($rst as $rs) {
				if ($rs[4] == 'R') {
					$status = "<b><i>Waiting for approval.</i></b>";
					$link =  Html::a('<i class="material-icons">mode_edit</i>' . Yii::t('app', 'Edit'), ['quotes/editquote', 'qid' => $rs[0]]); //.'&nbsp;&nbsp;|&nbsp;&nbsp;'.
					//Html::button('<i class="material-icons">cancel</i> Cancel',['value'=>Url::to(['quotes/cancelquote','qid'=>$rs[0]]),'title' => 'Cancel Quote','class'=>'showModalButton btn red btn-xs']);

				} elseif ($rs[5] == 'Y') {
					$status = "<b><i>Approved.</i></b>";
					$link =  Html::a('<i class="material-icons">print</i>' . Yii::t('app', 'Print'), ['quotes/prt-q', 'qid' => $rs[0]], ['target' => '_blank']);
				} else {
					$status = "<b><i>Cancelled.</i></b>";
					$link = '';
				}
				$td .= "<tr><td><b>$i</b></td><td>$rs[0]</td><td>$rs[1]</td><td>$rs[2]</td><td>$rs[3]</td>";
				$td .= "<td>$status" . Html::button('<i class="material-icons">receipt</i>' . Yii::t('app', 'View'), ['value' => Url::to(['quotes/vwq', 'qid' => $rs[0]]), 'title' => 'View Quotation', 'class' => 'showModalButton btn btn-success btn-sm']);
				$td .= "<td>$link</td></tr>";
				$i++;
			}

			$td .= '</tbody>';
		} else {
			$td .= "<tbody><tr><td colspan=7><b>No Sales Quote Found....</b></td></tr></tbody>";
		}
		$td .= "</table>";



		return $this->render('index', ['dataProvider' => $td]);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	//Workflows
	public function actionWfMain()
	{

		$q = "SELECT wid,name,wfor,stages FROM workflows ORDER BY wfor ";

		$td = '<table id="save-stage" class="table table-bordered" style="width:100%"><thead>';
		$td .= '<tr><th>SN</th><th>WORKFLOW NAME</th><th>WORKFLOW FOR</th><th>STAGES</th><th>EDIT</th><th>ADD STAGES</th></tr></thead>';

		$rst = Yii::$app->db->createCommand($q)->queryAll(false);
		if ($rst) {
			$td .= '<tbody>';
			$i = 1;

			foreach ($rst as $rs) {

				$edit =  Html::a('<i class="fa fa-edit"></i> Edit Workflow', ['admin/edit-wf', 'wid' => $rs[0]], ['class' => 'btn btn-dark btn-sm text-white', 'title' => 'Edit']);
				$link =  Html::a('<i class="fa fa-list"></i> Manage Workflow Stages', ['admin/wf-stages', 'wid' => $rs[0]], ['class' => 'btn btn-dark btn-sm text-white', 'title' => 'Add Stages']);

				$td .= "<tr><td><b>$i</b></td><td>$rs[1]</td><td>$rs[2]</td><td>$rs[3]</td><td>$edit</td><td>$link</td></tr>";
				$i++;
			}

			$td .= '</tbody>';
		} else {
			$td .= "<tbody><tr><td colspan=6><b>No Workflow Found....</b></td></tr></tbody>";
		}
		$td .= "</table>";



		return $this->render('workflow_management', ['dataProvider' => $td]);
	}

	public function actionNewWf()
	{
		$model = new Workflow;

		if ($model->load(Yii::$app->request->post()) && $model->save()) {
			Yii::$app->session->setFlash('success', 'Workflow Registered Successful.');
			return $this->redirect(['admin/wf-main']);
		}

		return $this->render('fwf', ['model' => $model]);
	}

	public function actionEditWf($wid)
	{

		$model = $this->loadWf($wid);
		if ($model->load(Yii::$app->request->post()) && $model->save()) {
			Yii::$app->session->setFlash('success', 'Workflow Details Updated Successful.');
			return $this->redirect(['admin/wf-main']);
		}

		return $this->render('fwf', ['model' => $model]);
	}


	protected function loadWf($wid)
	{
		if (($model = Workflow::findOne($wid)) !== null) {
			return $model;
		} else {
			throw new NotFoundHttpException('The requested page does not exist.');
		}
	}


	///////////////////////////////////////////////////////////////////////////////////////////////

	//WORK FLOW STAGES

	public function actionWfStages($wid)
	{
		$model = new WfStages;
		$model->wid = $wid;
		if ($model->load(Yii::$app->request->post()) && $model->save()) {
			$model->wid = $wid;
			Yii::$app->session->setFlash('success', 'Workflow Stage Registered Successful.');
			//return $this->redirect(['admin/wf-main']);

		}

		return $this->render('fwfstg', ['model' => $model, 'tbStages' => $this->getWfstages($wid)]);
	}

	public function actionEditWfstg($sid)
	{

		$model = $this->loadWfStage($sid);
		$wid = $model->wid;
		if ($model->load(Yii::$app->request->post()) && $model->save()) {
			Yii::$app->session->setFlash('success', 'Workflow Stage Details Updated Successful.');
			return $this->redirect(['admin/wf-stages', 'wid' => $model->wid]);
		}

		return $this->render('fwfstg', ['model' => $model, 'tbStages' => $this->getWfstages($wid)]);
	}


	protected function loadWfStage($sid)
	{
		if (($model = WfStages::findOne($sid)) !== null) {
			return $model;
		} else {
			throw new NotFoundHttpException('The requested page does not exist.');
		}
	}
	public function getWfstages($wid)
	{
		$q = "SELECT id,sno,sname,actok,actnotok,status,okname,notokname,isEditable FROM wfstages WHERE wid =:wid";

		$rst = Yii::$app->db->createCommand($q)->bindParam(':wid', $wid)->queryAll(false);
		$tbTr = "";
		if (!empty($rst)) {

			$i = 1;
			$tbTr .= "<table class=\"table table-bordered\"><tr class='alert alert-primary'><td colspan='6'>WORKFLOW STAGES</td></tr>";
			$tbTr .= "<tr><th>STAGE #</th><th>STAGE NAME</th><th>WHEN OK</th><th>WHEN NOT OK</th> <th>OK NAME</th> <th>NOT OK NAME</th><th>STATUS</th> <th>Allow Editing</th><th>EDIT</th></tr>";
			foreach ($rst as $rs) {

				$isEditable = $rs[8] == 1 ? 'YES' : 'NO';
				$tbTr .= "<tr><td>$rs[1]</td><td>$rs[2]</td><td>$rs[3]</td><td>$rs[4]</td><td>$rs[5]</td><td>$rs[6]</td><td>$rs[7]</td><td>$isEditable</td>";
				$tbTr .= "<td>" . Html::a('<i class="fa fa-edit"></i> Edit Workflow Stage', ['admin/edit-wfstg', 'sid' => $rs[0]], ['class' => 'btn btn-dark btn-sm', 'title' => 'Edit']) . "</td>";
				$i++;
			}
			$tbTr .= "</table>";
		}
		return $tbTr;
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Staff Roles Management
	public function actionStrlManagement()
	{

		$td = '<table id="save-stage" class="table table-bordered" style="width:100%"><thead>';
		$td .= '<tr><th>SN</th><th>Employee Name</th><th>Email</th><th>Roles Assigned</th><th>Access</th></tr></thead>';

		$q = "SELECT full_name ,email,id FROM user WHERE status =10 AND u_level<>52 ORDER BY full_name";

		$rst = Yii::$app->db->createCommand($q)->queryAll(false);
		if ($rst) {
			$td .= '<tbody>';
			$i = 1;
			foreach ($rst as $rs) {
				$q2 = "SELECT r.name FROM roles r INNER JOIN uroles ur ON r.rid = ur.rid WHERE r.module != 'INTRANET' AND ur.empid = '$rs[2]' AND DATEDIFF(ur.tdate,CURDATE()) >= 0";
				$roles = Yii::$app->db->createCommand($q2)->queryAll(false);
				$d = '';
				foreach ($roles as $role) {
					$d .= '<p>' . $role[0] . ' , </p><br>';
				}
				$d =  rtrim($d, ' , ');
				$td .= "<tr><td><b>$i</b></td><td>$rs[0]</td><td>$rs[1]</td><td width='10px'>$d</td>";

				$td .= "<td>" . Html::a('Manage Roles', ['admin/give-modrl', 'eid' => $rs[2]]) . "</td></tr>";
				$i++;
			}

			$td .= '</tbody>';
		} else {
			$td .= "<tbody><tr><td colspan=7><b>No Employee Found....</b></td></tr></tbody>";
		}
		$td .= "</table>";
		return $this->render('modr_management', ['dataProvider' => $td]);
	}
	public function actionGiveModrl($eid)
	{
		$fullname = Yii::$app->db->createCommand("SELECT full_name FROM user WHERE id =:eid")->bindParam(':eid', $eid)->queryScalar();
		$model = new ModUserRole;
		$model->empid = $eid;
		if ($model->load(Yii::$app->request->post()) && $model->save()) {
			$msg = "role has been successful assigned";
			Yii::$app->session->setFlash('success', $msg);
			//return $this->redirect(['admin/roles-management']);
		}

		return $this->render('fumod_role', ['model' => $model, 'fname' => $fullname, 'eid' => $eid, 'tbR' => $this->getModUserRoles($eid)]);
	}


	public function actionSigone($eid)
	{
		$_SESSION['empid'] = $eid;
		return $this->redirect(['admin/signature']);
	}

	protected function getEmpDet()
	{
		$eid = $_SESSION['empid'];
		$q = "SELECT CONCAT(e.fname,' ',e.mname,' ',e.sname),CONCAT(jt.name,' (',jt.sname,')'),e.sig FROM employees e INNER JOIN jobtitles jt ON jt.jtid = e.jtid ";
		$q .= "WHERE e.empid =:eid";
		$rs = Yii::$app->db->createCommand($q)->bindParam(':eid', $eid)->queryOne(false);
		if ($rs) {

			$tbData = "<table class='table table-bordered table-gray' style='width:100%'>";
			$tbData .= "<tr><th width='17%'>Employee Name</th><td>$rs[0]</td></tr>";
			$tbData .= "<tr><th >Job Title</th><td>$rs[1]</td></tr>";
			$signature = 'Not Captured';
			if (!empty($rs[2])) {
				$signature = "<img src='$rs[2]' width='160' height='70'>";
			}
			$tbData .= "<tr><th >Employee Signature</th><td>$signature</td></tr>";
			$tbData .= "</table>";
		} else {
			$tbInv = "<table class='table table-bordered'><tr class='alert alert-danger'><th colspan=4>INVALID REQUEST</th></tr></table>";
		}

		return $tbData;
	}
	public function actionRemoveModr($rid, $eid)
	{

		$id = Yii::$app->user->id;
		Yii::$app->db->createCommand("UPDATE uroles SET tdate = DATE_SUB(CURDATE(), INTERVAL 1 DAY),updated_by ='$id',updated_at =NOW() WHERE id ='$rid'")->execute();
		Yii::$app->session->setFlash('success', 'Role Successful Removed.');
		return $this->redirect(['admin/give-modrl', 'eid' => $eid]);
	}

	protected function getModUserRoles($eid)
	{

		$td = '';
		$q = "SELECT r.module,r.name,DATE_FORMAT(ur.fdate,'%d/%m/%Y'),DATE_FORMAT(ur.tdate,'%d/%m/%Y'),ur.id FROM roles r INNER JOIN uroles ur ON r.rid = ur.rid ";
		$q .= "WHERE r.module != 'INTRANET' AND ur.empid =:eid AND DATEDIFF(ur.tdate,CURDATE()) >= 0";

		$rst = Yii::$app->db->createCommand($q)->bindParam(':eid', $eid)->queryAll(false);
		if ($rst) {
			$td .= '<table class="table table-bordered" style="width:100%"><thead>';
			$td .= '<tr><th>SN</th><th>Module</th><th>Role Name</th><th>Start Date</th><th>End Date</th><th>Action</th></tr></thead>';
			$td .= '<tbody>';
			$i = 1;
			foreach ($rst as $rs) {

				$access = Html::a('Remove', ['admin/remove-modr', 'rid' => $rs[4], 'eid' => $eid], ['data' => ['confirm' => 'Are sure you want to Disable selected Role from this staff? ', 'method' => 'post',]]);

				$td .= "<tr><td><b>$i</b></td><td>$rs[0]</td><td>$rs[1]</td><td>$rs[2]</td><td>$rs[3]</td>";
				$td .= "<td>$access</td></tr>";
				$i++;
			}

			$td .= '</tbody></table>';
		}

		return $td;
	}

	public function actionGetModur($eid)
	{
		if (isset($_POST['depdrop_parents'])) {
			$parents = $_POST['depdrop_parents'];
			if ($parents != null) {
				$module = $parents[0];

				$q = "SELECT r.rid id,r.name FROM roles r WHERE NOT r.rid IN(SELECT rid FROM uroles WHERE empid =:uid AND DATE(tdate) >= CURDATE()) AND r.module = '$module'";
				$data = Yii::$app->db->createCommand($q)->bindParam(':uid', $eid)->queryAll(false);
				return Json::encode(['output' => $data, 'selected' => '']);
				// return ;
			}
		}
		return Json::encode(['output' => '', 'selected' => '']);
	}




	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//WORKFLOW Roles Management
	public function actionWfrlManagement()
	{

		$td = '<table id="datatable" class="table table-bordered" style="width:100%"><thead>';
		$td .= '<tr><th>SN</th><th>Employee Name</th><th>Email</th><th>WF Participation</th><th>Access</th></tr></thead>';

		$q = "SELECT full_name ,email,id FROM user WHERE status =10 AND u_level<>52 ORDER BY full_name";

		$rst = Yii::$app->db->createCommand($q)->queryAll(false);
		if ($rst) {
			$td .= '<tbody>';
			$i = 1;
			foreach ($rst as $rs) {
				$q2 = "SELECT ws.sname FROM wfstages ws INNER JOIN wfroles wr ON ws.wid = wr.wid AND ws.sno = wr.stid WHERE wr.empid = '$rs[2]' AND DATEDIFF(wr.tdate,CURDATE()) >= 0";
				$roles = Yii::$app->db->createCommand($q2)->queryAll(false);
				$d = '';
				foreach ($roles as $role) {
					$d .= $role[0] . ' , ';
				}
				$d = rtrim($d, ' , ');

				$td .= "<tr><td><b>$i</b></td><td>$rs[0]</td><td>$rs[1]</td><td>$d</td>";
				$td .= "<td>" . Html::a('Manage Access', ['admin/give-wfrl', 'eid' => $rs[2]]) . "</td></tr>";
				$i++;
			}

			$td .= '</tbody>';
		} else {
			$td .= "<tbody><tr><td colspan=7><b>No Employee Found....</b></td></tr></tbody>";
		}
		$td .= "</table>";
		return $this->render('wfr_management', ['dataProvider' => $td]);
	}
	public function actionGiveWfrl($eid)
	{

		$fname = Yii::$app->db->createCommand("SELECT full_name FROM user WHERE id =:eid")->bindParam(':eid', $eid)->queryScalar();
		$model = new WfUserRole;
		$model->empid = $eid;
		if ($model->load(Yii::$app->request->post()) && $model->save()) {
			$rname = Yii::$app->db->createCommand("SELECT sname FROM wfstages WHERE sno ='$model->stid' AND wid = '$model->wid'")->queryScalar();
			$msg = "<b>$rname</b> stage has been succassful assigned to <b>$fname</b>";
			Yii::$app->session->setFlash('success', $msg);
			//return $this->redirect(['admin/roles-management']);
		}

		return $this->render('fuwf_role', ['model' => $model, 'fname' => $fname, 'eid' => $eid, 'tbR' => $this->getWfUserRoles($eid)]);
	}
	public function actionRemoveWfr($id, $eid)
	{


		$sid = Yii::$app->user->id;
		$q = "UPDATE wfroles SET tdate = DATE_SUB(CURDATE(), INTERVAL 1 DAY),eby ='$sid',edate =NOW() WHERE id =:id AND empid =:eid";
		Yii::$app->db->createCommand($q)->bindParam(':id', $id)->bindParam(':eid', $eid)->execute();
		Yii::$app->session->setFlash('success', 'Workflow Role Successful Removed.');
		return $this->redirect(['admin/give-wfrl', 'eid' => $eid]);
	}

	protected function getWfUserRoles($eid)
	{

		$td = '';

		$q = "SELECT w.name,ws.sname,DATE_FORMAT(wr.fdate,'%d/%m/%Y'),DATE_FORMAT(wr.tdate,'%d/%m/%Y'),wr.id FROM wfroles wr INNER JOIN wfstages ws ON ws.sno = wr.stid AND ";
		$q .= "ws.wid = wr.wid INNER JOIN workflows w ON w.wid = ws.wid WHERE wr.empid =:eid AND DATEDIFF(wr.tdate,CURDATE()) >= 0";

		$rst = Yii::$app->db->createCommand($q)->bindParam(':eid', $eid)->queryAll(false);
		if ($rst) {
			$td .= '<table class="table table-bordered" style="width:100%"><thead>';
			$td .= '<tr><th>SN</th><th>Workflow</th><th>Stage Name</th><th>Start Date</th><th>End Date</th><th>Action</th></tr></thead>';
			$td .= '<tbody>';
			$i = 1;
			foreach ($rst as $rs) {

				$access = Html::a('Remove', ['admin/remove-wfr', 'id' => $rs[4], 'eid' => $eid], ['data' => ['confirm' => 'Are sure you want to Disable selected Workflow Stage from this staff? ', 'method' => 'post',]]);

				$td .= "<tr><td><b>$i</b></td><td>$rs[0]</td><td>$rs[1]</td><td>$rs[2]</td><td>$rs[3]</td>";
				$td .= "<td>$access</td></tr>";
				$i++;
			}

			$td .= '</tbody></table>';
		}

		return $td;
	}

	public function actionGetWfur($eid)
	{
		if (isset($_POST['depdrop_parents'])) {
			$parents = $_POST['depdrop_parents'];
			if ($parents != null) {
				$wid = $parents[0];

				$q = "SELECT sno as id,sname as name FROM wfstages WHERE NOT sno IN(SELECT stid FROM wfroles WHERE empid =:uid AND wid = '$wid' AND DATE(tdate) >= CURDATE()) AND status='active' AND wid = '$wid'";
				$data = Yii::$app->db->createCommand($q)->bindParam(':uid', $eid)->queryAll(false);
				return Json::encode(['output' => $data, 'selected' => '']);
				// return ;
			}
		}
		return Json::encode(['output' => '', 'selected' => '']);
	}

	public function actionNoaccess()
	{
		return $this->render('noaccess');
	}
}
