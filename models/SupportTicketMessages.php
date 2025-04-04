<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "support_ticket_messages".
 *
 * @property string $id
 * @property string|null $support_ticket_id
 * @property string $sender_id
 * @property string $sender_role
 * @property string $message
 * @property string|null $attachment
 * @property int $is_read
 * @property int $is_delivered
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 */
class SupportTicketMessages extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'support_ticket_messages';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'sender_id', 'sender_role', 'message'], 'required'],
            [['sender_role', 'message'], 'string'],
            [['is_read', 'is_delivered', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at', 'deleted_at'], 'safe'],
            [['id', 'support_ticket_id', 'sender_id'], 'string', 'max' => 36],
            [['attachment'], 'string', 'max' => 191],
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
            'support_ticket_id' => 'Support Ticket ID',
            'sender_id' => 'Sender ID',
            'sender_role' => 'Sender Role',
            'message' => 'Message',
            'attachment' => 'Attachment',
            'is_read' => 'Is Read',
            'is_delivered' => 'Is Delivered',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'deleted_at' => 'Deleted At',
        ];
    }
}
