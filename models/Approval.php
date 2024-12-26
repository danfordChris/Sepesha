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
class Approval extends \yii\db\ActiveRecord
{
	/**
	 * {@inheritdoc}
	 */
	public $sno;
	public static function tableName()
	{
		return 'approvals';
	}

	/**
	 * {@inheritdoc}
	 */

	public function rules()
	{
		return [
			[['wfs', 'comments'], 'required'],
			[['comments', 'attachment'], 'safe'],
			['attachment', 'file', 'skipOnEmpty' => true, 'extensions' => 'pdf', 'maxSize' => 6291456],
			['wfstatus', 'chkStatus'],

		];
	}

	/**
	 * {@inheritdoc}
	 */
	public function attributeLabels()
	{
		return [
			'wid' => 'Workflow',
			'wfsname' => 'Stage',
			'wfstatus' => 'Has been',
			'attachment' => 'Attachment',
			'comments' => 'Comments',
			'wfs' => 'Action'
		];
	}

	public function chkStatus($attribute, $params)
	{
		$dt = explode(':', $this->wfstatus);

		if ($dt[0] != 'Y') {
			if (empty($this->comments)) {
				$this->addError('comments', Yii::t('app', 'Comments must be provided'));
			}
		}
	}



	public static function getDoApproval($wid, $stid)
	{
		$data = [];
		$q = "SELECT okchar,actok,notokchar,actnotok FROM wfstages WHERE wid = " . $wid . " AND sno = " . $stid . "";
		$rs = Yii::$app->db->createCommand($q)->queryOne(false);

		$data["$rs[0]"] = $rs[1];
		$data["$rs[2]"] = $rs[3];

		return $data;
	}


	public static function getSubmitforApproval($wid, $stid)
	{
		$data = [];
		$q = "SELECT okchar,actok,notokchar,actnotok FROM wfstages WHERE wid = " . $wid . " AND sno = " . $stid . "";
		$rs = Yii::$app->db->createCommand($q)->queryOne(false);
		$data["$rs[0]"] = $rs[1];
		$data['C:CANCELLED'] = 'CANCEL';

		return $data;
	}



	public function beforeSave($insert)
	{
		if (parent::beforeSave($insert))  //call parent method so that the events are fired appropriately
		{
			// $fact = explode(":",$this->wfstatus);

			// $this->wfstatus = $fact[1];
			// $this->wfs = $fact[0];

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


	public function getCreated()
	{
		return $this->hasOne(User::class, ['id' => 'created_by']);
	}
	public function getUpdated()
	{
		return $this->hasOne(User::class, ['id' => 'updated_by']);
	}
}
