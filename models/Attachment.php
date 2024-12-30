<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\web\UploadedFile;

/**
 * This is the model class for table "attachments".
 *
 * @property int $id
 * @property string $name
 * @property int|null $type
 * @property string|null $description
 * @property int|null $owner_id
 * @property string|null $module
 * @property string|null|object $attachment
 * @property string|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class Attachment extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'attachments';
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
            [['type', 'attachment'], 'required'],
            [['type', 'created_by', 'updated_by', 'wid', 'stid'], 'integer'],
            [['description', 'status'], 'string'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 150],
            [['module'], 'string', 'max' => 100],
            [['owner_id', 'moduleId', 'table_key'], 'safe'],
            [['name', 'type', 'refno', 'table_name', 'model_name'], 'string', 'max' => 255],
            [['attachment'], 'file', 'extensions' => 'pdf,docx,xls,xlsx', 'maxSize' => 1024 * 1024 * 2], // 2MB limit
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'type' => 'Document Type',
            'description' => 'Description',
            'owner_id' => 'Owner ID',
            'module' => 'Module',
            'attachment' => 'Attachment',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }


    public function getDocument()
    {
        return $this->hasOne(CaseTools::class, ['id' => 'type']);
    }

    public function getDoc()
    {
        return $this->hasOne(WorkflowDocuments::class, ['id' => 'type']);
    }




    public function upload()
    {
        if ($this->validate()) {
            $filePath =Yii::getAlias('@webroot'). '/uploads/documents/' . time() . '.' . $this->attachment->extension;
            $filePathDoc= Yii::$app->urlManager->createAbsoluteUrl('uploads/documents/' .time() . '.' . $this->attachment->extension);
           if($this->attachment->saveAs($filePath)){
            $this->attachment = $filePathDoc; // store the file path in attachment column
            return true;
           }
           
        }
        return false;
    }


    public static function populateAttachmentFields($relatedModel)
    {
        $attachment = new self();
        $attachment->module = get_class($relatedModel);
        $attachment->moduleId = $relatedModel->id;
        $attachment->table_name = $relatedModel::tableName();
        $attachment->model_name = get_class($relatedModel);
        $attachment->table_key = $relatedModel->id;
        $attachment->refno = $relatedModel->refno ?? $relatedModel->id;
        $attachment->owner_id = $relatedModel->id;
        $attachment->name = $relatedModel->documenttypeName->name ?? 'non';
        $attachment->wid = $relatedModel->wid ?? '';
        $attachment->stid = $relatedModel->stid ?? '';
        $attachment->status = 'A';

        return $attachment;
    }




    public static function addAttachment($reference, $existing)
    {
        $attach = Attachment::find()->where(['refno' => $reference])->one();
        $attach->attachment = $existing;
        $attach->save(false);
    }

    public static function getExistingAttachment($reference)
    {
        $attach = Attachment::find()->where(['refno' => $reference])->one();
        $document = $attach->attachment ?? '';
        return $document;
    }

    public static function getExistingAttachmentModel($reference)
    {
        $attach = Attachment::find()->where(['refno' => $reference])->one();
        return $attach;
    }
}