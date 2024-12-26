<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "workflow_tools".
 *
 * @property int $id
 * @property int|null $wid
 * @property int|null $toolid
 * @property string|null $description
 * @property int $mandatory
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class WorkflowTools extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'workflow_tools';
    }

    public function behaviors()

    {
        return [
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
            [
                'class' => BlameableBehavior::class,
            ],
        ];
    }


    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['wid', 'toolid',  'stid', 'mandatory', 'status', 'created_by', 'updated_by'], 'integer'],
            [['description'], 'string'],
            [['wid', 'mandatory', 'toolid', 'stid'], 'required'],
            [['created_at', 'updated_at'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'wid' => 'Workflow name',
            'stid' => 'Stage',
            'toolid' => 'Case tool name',
            'description' => 'Description',
            'mandatory' => 'Mandatory',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }
    public static function getMandatoryOptions()
    {
        return [
            '1' => 'Yes',
            '0' => 'No',

        ];
    }

    public static function getWorkflowTools()
    {
        $workflowtools = Workflow::find()->all();
        $workflowtoolsData = ArrayHelper::map($workflowtools, 'wid', 'name');
        return $workflowtoolsData;
    }

    public function getWorkflowName()
    {
        return $this->hasOne(Workflow::class, ['wid' => 'wid']);
    }

    public function getStage()
    {
        return $this->hasOne(WfStages::class, ['id' => 'stid', 'id' => 'wid']);
    }

    public function getStages()
    {
        $stages = WfStages::find()->where(['wid' => $this->wid, 'sno' => $this->stid])->one();
        return $stages->sname ?? '';
    }
    public static function getCasetoolOptions()
    {
        $casetools = CaseTools::find()->all();
        $casetoolsData = ArrayHelper::map($casetools, 'id', 'name');
        return $casetoolsData;
    }



    public function getCasetoolName()
    {
        return $this->hasOne(CaseTools::class, ['id' => 'toolid']);
    }
}
