<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "workflow_documents".
 *
 * @property int $id
 * @property int|null $wid
 * @property int|null $doctype_id
 * @property string|null $description
 * @property int $mandatory
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class WorkflowDocuments extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'workflow_documents';
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
            [['wid', 'stid', 'doctype_id', 'mandatory', 'status', 'created_by', 'updated_by'], 'integer'],
            [['description'], 'string'],
            [['wid', 'doctype_id', 'mandatory', 'stid'], 'required'],
            [['created_at', 'updated_at'], 'safe'],
            [['wid', 'stid', 'doctype_id'], 'unique', 'targetAttribute' => ['wid', 'stid', 'doctype_id'], 'message' => 'The combination of Workflow Name, Stage , and Document Type  must be unique.'],
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
            'doctype_id' => 'Name',
            'description' => 'Description',
            'mandatory' => 'Mandatory',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }

    public static function getStatusOptions()
    {
        return [
            '1' => 'Active',
            '0' => 'Inactive',

        ];
    }

    public static function getMandatoryOptions()
    {
        return [
            '1' => 'Yes',
            '0' => 'No',

        ];
    }

    public static function getWorkflowDocuments()
    {
        $workflowdocument = Workflow::find()->all();
        $workflowdocumentData = ArrayHelper::map($workflowdocument, 'wid', 'name');
        return $workflowdocumentData;
    }
    public static function getDocuments()
    {
        $documenttype = CaseTools::find()->where(['type' => 1])->orderBy('name')->all();
        $documentstype = ArrayHelper::map($documenttype, 'id', 'name');
        return $documentstype;
    }


    public static function getDocumentByWorkflowAndStage($wid, $stid)
    {
        $caseDocs = WorkflowDocuments::find()->where(['status' => 1, 'wid' => $wid, 'stid' => $stid])->all();
        $caseDocsData = ArrayHelper::map($caseDocs, 'id', function ($m) {
            return $m->documenttypeName->name;
        });
        return $caseDocsData;
    }


    public static function getTools()
    {
        $documenttype = CaseTools::find()->where(['type' => 2])->orderBy('name')->all();
        $documentstype = ArrayHelper::map($documenttype, 'id', 'name');
        return $documentstype;
    }

    public function getWorkflow()
    {
        return $this->hasOne(Workflow::class, ['wid' => 'wid']);
    }

    public function getStage()
    {
        return $this->hasOne(WfStages::class, ['sno' => 'stid', 'wid' => 'wid']);
    }

    public function getDocumenttypeName()
    {
        return $this->hasOne(CaseTools::class, ['id' => 'doctype_id']);
    }
}
