<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "directorates".
 *
 * @property int $dirid
 * @property string|null $name
 * @property string|null $sname
 * @property string|null $status
 * @property int|null $cby
 * @property string|null $cdate
 * @property int|null $eby
 * @property string|null $edate
 */
class WfUserRole extends \yii\db\ActiveRecord
{
	/**
	 * {@inheritdoc}
	 */
	public static function tableName()
	{
		return 'wfroles';
	}

	/**
	 * {@inheritdoc}
	 */
	public function rules()
	{
		return [
			[['wid', 'stid', 'empid', 'fdate', 'tdate'], 'required'],
			['fdate', 'checkDate'],

		];
	}

	/**
	 * {@inheritdoc}
	 */
	public function attributeLabels()
	{
		return [
			'wid' => 'Workflow',
			'stid' => 'Workflow Stage',
			'fdate' => 'Role Start Date',
			'tdate' => 'Role End Date',
		];
	}

	public function checkDate($attribute, $params)
	{
		$dt = explode('-', $this->fdate);
		$fdate = $dt[2] . '-' . $dt[1] . '-' . $dt[0];

		$dt1 = explode('-', $this->tdate);
		$tdate = $dt1[2] . '-' . $dt1[1] . '-' . $dt1[0];

		$validator = Yii::$app->db->createCommand("SELECT DATEDIFF('$tdate',CURDATE()) ")->queryScalar();
		$validator2 = Yii::$app->db->createCommand("SELECT DATEDIFF('$fdate',CURDATE()) ")->queryScalar();

		if ($validator >= 0 and $validator2 >= 0) {
			$validator1 = Yii::$app->db->createCommand("SELECT DATEDIFF('$tdate','$fdate')")->queryScalar();
			if ($validator1 < 0) {
				$this->addError('fdate', Yii::t('app', 'Role Start date can not be greater than Role End Date '));
			}
		} else {
			$this->addError('fdate', Yii::t('app', 'Role Start date and Role End date must be greater or equal to todays date '));
		}
	}

	public function getWf()
	{
		$data = [];
		$q = "SELECT wid,name FROM workflows ORDER BY name";
		$roles = Yii::$app->db->createCommand($q)->queryAll(false);

		foreach ($roles as $rs) {
			$data[$rs[0]] = $rs[1];
		}


		return $data;
	}

	public function getWfUserRole($eid)
	{
		$data = [];
		if (Yii::$app->request->post('WfUserRole')) {
			$wid = Yii::$app->request->post('WfUserRole')['wid'];
			$q = "SELECT sno,sname FROM wfstages WHERE NOT sno IN(SELECT stid FROM wfroles WHERE empid =:uid AND wid = '$wid' AND DATE(tdate) >= CURDATE()) AND wid = '$wid'";
			$rst = Yii::$app->db->createCommand($q)->bindParam(':uid', $eid)->queryAll(false);
			foreach ($rst as $rs) {
				$data[$rs[0]] = $rs[1];
			}
		}

		return $data;
	}

	public function getWfRole($eid)
	{
		$data = [];
		$q = "SELECT r.rid,r.name FROM roles r WHERE NOT r.rid IN(SELECT rid FROM uroles WHERE empid =:uid AND DATE(tdate) >= CURDATE()) AND r.module = 'INTRANET'";
		$roles = Yii::$app->db->createCommand($q)->bindParam(':uid', $eid)->queryAll(false);

		foreach ($roles as $rs) {
			$data[$rs[0]] = $rs[1];
		}


		return $data;
	}



	public function beforeSave($insert)
	{
		if (parent::beforeSave($insert)) {

			if ($this->isNewRecord) {
				$this->cby = Yii::$app->user->id;
				$this->cdate = new \yii\db\Expression('NOW()');
			} else {
				$this->eby = Yii::$app->user->id;
				$this->edate = new \yii\db\Expression('NOW()');
			}
			return true;
		}
		return false;
	}
}
