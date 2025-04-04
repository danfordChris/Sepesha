<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "support_tickets".
 *
 * @property string $id
 * @property string|null $sender_id
 * @property string|null $subject
 * @property string|null $message
 * @property string|null $category
 * @property string $status
 * @property string $priority
 * @property string|null $attachment
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 */
class SupportTickets extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'support_tickets';
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
            [['id'], 'required'],
            [['message', 'status', 'priority'], 'string'],
            [['created_at', 'updated_at', 'deleted_at'], 'safe'],
            [['created_by', 'updated_by'], 'integer'],
            [['id', 'sender_id'], 'string', 'max' => 36],
            [['subject', 'category', 'attachment'], 'string', 'max' => 191],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'sender_id' => 'Sender ID',
            'subject' => 'Subject',
            'message' => 'Message',
            'category' => 'Category',
            'status' => 'Status',
            'priority' => 'Priority',
            'attachment' => 'Attachment',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'deleted_at' => 'Deleted At',
        ];
    }




    public function getCreatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'created_by']);
    }

    public function getUpdatedUser()
    {
        return $this->hasOne(User::class, ['id' => 'updated_by']);
    }


    public function getFullName()
    {
        $fullname = $this->fname . ' ' . $this->mname . ' ' . $this->sname;
        return $fullname ?? '';
    }


    // public  function getFullName()
    // {
    //   return $this->name . ' ' . $this->mname . ' ' . $this->sname;
    // }
  
  
    public  function getEmail()
    {
      return $this->email ?? "";
    }
  
  
   public static function getCustomerList()
    {
      $cust = self::find()->all();
      $list = ArrayHelper::map($cust, 'auth_key', function ($m) {
        return $m->getFullName();
      });
      return $list;
    }
}
