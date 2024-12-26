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
class ModUserRole extends \yii\db\ActiveRecord
{
	/**
	 * {@inheritdoc}
	 */
	public $module;
	public static function tableName()
	{
		return 'uroles';
	}

	/**
	 * {@inheritdoc}
	 */
	public function rules()
	{
		return [
			[['module', 'rid', 'empid', 'fdate', 'tdate'], 'required'],
			['fdate', 'checkDate'],

		];
	}

	/**
	 * {@inheritdoc}
	 */
	public function attributeLabels()
	{
		return [
			'module' => 'Modules For',
			'rid' => 'Role',
			'fdate' => 'Role Start Date',
			'tdate' => 'Role End Date',
		];
	}

	public function checkDate($attribute, $params)
	{
		$dt = explode('-', $this->fdate);
		$fdate = $this->fdate;;
		$tdate = $this->tdate;
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

	public function getModules()
	{
		$data = [];
		$q = "SELECT DISTINCT module FROM roles WHERE module !='INTRANET' ORDER BY module";
		$roles = Yii::$app->db->createCommand($q)->queryAll(false);
		foreach ($roles as $rs) {
			$data[$rs[0]] = $rs[0];
		}


		return $data;
	}

	public function getModUserRole($eid)
	{
		$data = [];
		if (Yii::$app->request->post('ModUserRole')) {
			$module = Yii::$app->request->post('ModUserRole')['module'];
			$q = "SELECT r.rid,r.name FROM roles r WHERE NOT r.rid IN(SELECT rid FROM uroles WHERE empid =:uid AND DATE(tdate) >= CURDATE()) AND r.module = '$module'";
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
		if (parent::beforeSave($insert))  //call parent method so that the events are fired appropriately
		{
			// $fdate = explode("-", $this->fdate);
			// $tdate = explode("-", $this->tdate);
			// $this->fdate = $fdate[2] . '-' . $fdate[1] . '-' . $fdate[0];
			// $this->tdate = $tdate[2] . '-' . $tdate[1] . '-' . $tdate[0];

			if ($this->isNewRecord) {
				$this->created_by = Yii::$app->user->id;
				$this->created_at = new \yii\db\Expression('NOW()');
			} else {
				$this->updated_by = Yii::$app->user->id;
				$this->updated_at = new \yii\db\Expression('NOW()');
			}
			return true;
		}
		return false;
	}
}