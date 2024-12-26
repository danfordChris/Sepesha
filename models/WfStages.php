<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

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
class WfStages extends \yii\db\ActiveRecord
{

	public static function tableName()
	{
		return 'wfstages';
	}

	/**
	 * {@inheritdoc}
	 */
	public function rules()
	{
		return [
			[['wid', 'sno', 'sname', 'actok', 'actnotok', 'status', 'okname', 'notokname'], 'required'],
			[['sname', 'wid'], 'unique', 'targetAttribute' => ['sname', 'wid'], 'message' => 'stage name already added'],
			[['sno'], 'integer', 'min' => 1],
			[['nextstage', 'backstage'], 'integer'],
			[['isEditable'], 'safe']
		];
	}

	public function attributeLabels()
	{
		return [
			'wid' => 'Workflow Name',
			'sno' => 'Current Stage',
			'sname' => 'Stage Name',
			'actok' => 'OK Action',
			'actnotok' => 'Not OK Action',
			'okname' => 'OK Label',
			'notokname' => 'Not OK Label',
			'nextstage' => 'Next Stage',
			'backstage' => 'Not OK Stage',
			'isEditable' => 'Allow Editing ?'


		];
	}

	public function getWf()
	{
		$data = [];
		$d = $this->wid;
		$rst = Yii::$app->db->createCommand("SELECT wid,name FROM workflows WHERE wid=:wid")->bindParam(':wid', $d)->queryAll(false);
		foreach ($rst as $rs) {
			$data[$rs[0]] = $rs[1];
		}


		return $data;
	}
	public function getST()
	{
		$data = [];
		$d = $this->wid;
		if ($this->isNewRecord) {
			$cno = Yii::$app->db->createCommand("SELECT MAX(sno) FROM wfstages WHERE wid =:wid")->bindParam(':wid', $d)->queryScalar();
			$wn = Yii::$app->db->createCommand("SELECT stages FROM workflows WHERE wid =:wid")->bindParam(':wid', $d)->queryScalar();
			if ($cno < $wn) {
				$cno = $cno + 1;
				$data[$cno] = $cno;
			}
		} else {
			$cno = Yii::$app->db->createCommand("SELECT sno FROM wfstages WHERE id ='$this->id'")->queryScalar();
			$data[$cno] = $cno;
		}

		return $data;
	}

	public function getNext()
	{
		$data = 0;
		$d = $this->wid;
		if ($this->isNewRecord) {
			$cno = Yii::$app->db->createCommand("SELECT MAX(sno) FROM wfstages WHERE wid =:wid")->bindParam(':wid', $d)->queryScalar();
			$wn = Yii::$app->db->createCommand("SELECT stages FROM workflows WHERE wid =:wid")->bindParam(':wid', $d)->queryScalar();
			if ($cno < $wn) {
				$cno = $cno + 2;
				$data = $cno;
			}
		} else {
			$cno = Yii::$app->db->createCommand("SELECT nextstage FROM wfstages WHERE id ='$this->id'")->queryScalar();
			$data = $cno;
		}

		return $data;
	}

	public function getBack()
	{
		$data = 0;
		$d = $this->wid;
		if ($this->isNewRecord) {
			$cno = Yii::$app->db->createCommand("SELECT MAX(sno) FROM wfstages WHERE wid =:wid")->bindParam(':wid', $d)->queryScalar();
			$wn = Yii::$app->db->createCommand("SELECT stages FROM workflows WHERE wid =:wid")->bindParam(':wid', $d)->queryScalar();
			if ($cno < $wn) {
				if ($cno == 0) {
					$cno = $cno + 1;
				} else {
					$cno = $cno;
				}


				$data = $cno;
			}
		} else {
			$cno = Yii::$app->db->createCommand("SELECT backstage FROM wfstages WHERE id ='$this->id'")->queryScalar();
			$data = $cno;
		}

		return $data;
	}



	public  function getStagesList()
	{
		$d = $this->wid;
		$dp = WfStages::find()->where(['wid' => $d, 'status' => 'active'])->all();
		$stage = ArrayHelper::map($dp, 'sno', 'sname');
		return $stage;
	}

	public  function getStageNext()
	{
		$d = $this->wid;
		$dp = WfStages::find()->where(['wid' => $d, 'status' => 'active'])->all();
		$stage = ArrayHelper::map($dp, 'sno', 'sname');
		return $stage;
	}

	public static  function getStages()
	{
		$dp = WfStages::find()->all();
		$stage = ArrayHelper::map($dp, 'id', 'sname');
		return $stage;
	}


	public static  function getStagesNumber()
	{
		$dp = WfStages::find()->all();
		$stage = ArrayHelper::map($dp, 'no', 'sname');
		return $stage;
	}



	public function beforeSave($insert)
	{
		if (parent::beforeSave($insert))  //call parent method so that the events are fired appropriately
		{

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
