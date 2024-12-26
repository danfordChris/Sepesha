<?php

namespace app\modules\credit\models;

use Yii;

/**
 * This is the model class for table "payment_modes".
 *
 * @property int $id
 * @property string $mode_name
 */
class PayMode extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'payment_modes';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['mode_name'], 'required'],
            [['mode_name'], 'string', 'max' => 255],
            [['mode_name'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'mode_name' => 'Mode Name',
        ];
    }
}
