<?php

namespace app\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the model class for table "intake_workflow_tools".
 *
 * @property int $id
 * @property int $tool_id
 * @property int $intake_id
 * @property int $wid
 * @property int $stid
 * @property string $type
 * @property string|null $table_name
 * @property string|null $model_name
 * @property int|null $table_key
 * @property string|null $workflow_refno
 * @property int $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class IntakeWorkflowTool extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'intake_workflow_tools';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['tool_id', 'intake_id', 'wid', 'stid', 'table_key', 'workflow_refno', 'table_name'], 'required'],
            [['tool_id', 'intake_id', 'wid', 'stid', 'table_key', 'status', 'created_by', 'updated_by'], 'integer'],
            [['type'], 'string'],
            [['created_at', 'updated_at'], 'safe'],
            [['table_name', 'model_name', 'workflow_refno'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'tool_id' => Yii::t('app', 'Tool ID'),
            'intake_id' => Yii::t('app', 'Intake ID'),
            'wid' => Yii::t('app', 'Wid'),
            'stid' => Yii::t('app', 'Stid'),
            'type' => Yii::t('app', 'Type'),
            'table_name' => Yii::t('app', 'Table Name'),
            'model_name' => Yii::t('app', 'Model Name'),
            'table_key' => Yii::t('app', 'Table Key'),
            'workflow_refno' => Yii::t('app', 'Workflow Refno'),
            'status' => Yii::t('app', 'Status'),
            'created_at' => Yii::t('app', 'Created At'),
            'created_by' => Yii::t('app', 'Created By'),
            'updated_at' => Yii::t('app', 'Updated At'),
            'updated_by' => Yii::t('app', 'Updated By'),
        ];
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


    public static function insertData($tool_id, $intake_id, $wid, $stid, $table_name, $model_name, $table_key, $workflow_refno)
    {
        $class = $model_name;
        $cleanClass = preg_replace('/^[^\\\\]*\\\\[^\\\\]*\\\\/', '', $class);
        echo $cleanClass;

        $intaketool = new IntakeWorkflowTool();

        $intaketool->tool_id = $tool_id;
        $intaketool->intake_id = $intake_id;
        $intaketool->wid = $wid;
        $intaketool->stid = $stid;
        $intaketool->table_name = $table_name;
        $intaketool->model_name = $cleanClass;

        $intaketool->table_key = $table_key;
        $intaketool->type = 'form';
        $intaketool->workflow_refno = $workflow_refno;
        return $intaketool->save(false) ? $intaketool : null;
    }
}
