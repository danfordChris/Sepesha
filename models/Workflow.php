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
class Workflow extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'workflows';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name','stages','wfor'], 'required'],
			[['name'],'unique'],
			[['stages'],'integer','min'=>1],
        ];
    }
	
    public function attributeLabels()
    {
        return [
            'name' => 'Workflow Name',
            'stages' => 'Number of Stages',
            'wfor' => 'Workflow For',
			
        ];
    }
	
	public function getRegions()
	{
	  $data = [];
	   $rst = Yii::$app->db->createCommand("SELECT rid,name FROM regions ORDER BY name")->queryAll(false);
	    foreach($rst as $rs)
		{
			$data[$rs[0]] = $rs[1];
		}
		
	  
	  return $data;
	}
	
	
	public function beforeSave($insert)
	 {
	   if(parent::beforeSave($insert))  //call parent method so that the events are fired appropriately
	   {
         
		if($this->isNewRecord)
		 {
			$this->cby = Yii::$app->user->id;
			$this->cdate = new \yii\db\Expression('NOW()');
		 }
		 else
		 {
			$this->eby = Yii::$app->user->id;
			$this->edate = new \yii\db\Expression('NOW()');
		 }
		 return true;
	   }
	   return false;
	 }

	 
}
