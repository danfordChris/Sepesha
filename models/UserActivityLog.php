<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "user_activity_log".
 *
 * @property int $id
 * @property int $user_id
 * @property string $action
 * @property string $controller
 * @property string $created_at
 * @property string $user_ip
 * @property string $user_agent
 * @property array|null $beforeData
 * @property array|null $afterData
 */
class UserActivityLog extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'user_activity_logs';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'action', 'controller', 'created_at', 'user_ip', 'user_agent'], 'safe'],
            [['user_id'], 'integer'],
            [['created_at'], 'safe'],
            [['action', 'controller', 'user_ip', 'user_agent'], 'string', 'max' => 255],
            [['beforeData', 'afterData'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'action' => 'Action',
            'controller' => 'Controller',
            'created_at' => 'Created At',
            'user_ip' => 'User IP',
            'user_agent' => 'User Agent',
            'beforeData' => 'Before Data',
            'afterData' => 'After Data',
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            if (!$this->isNewRecord) {
                $this->beforeData = $this->getOldAttributes();
            }
            $this->afterData = $this->getAttributes();
            return true;
        }
        return false;
    }
}
