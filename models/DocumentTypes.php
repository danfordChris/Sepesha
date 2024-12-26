<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "document_types".
 *
 * @property int $docuid
 * @property string|null $name
 * @property int|null $type
 * @property string|null $descr
 * @property int|null $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class DocumentTypes extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'document_types';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['type', 'status', 'created_by', 'updated_by'], 'integer'],
            [['descr'], 'string'],
            [['name'], 'required'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'docuid' => 'Docuid',
            'name' => 'Name',
            'type' => 'Type',
            'descr' => 'Descr',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }
}
