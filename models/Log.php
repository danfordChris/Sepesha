<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "districts".
 *
 * @property int $did
 * @property string $name
 * @property int|null $rid
 * @property int|null $cid
 * @property int $status
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 */
class Log extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'logs';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['category', 'log_time','level','message'], 'safe'],
            [['prefix'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'category' => 'category',
            'log_time' => 'log_time',
            'level' => 'level',
            'message' => 'message',
            'prefix'=>'prefix'


        ];
    }
}
