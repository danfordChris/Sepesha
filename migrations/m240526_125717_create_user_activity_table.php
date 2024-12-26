<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%user_activity}}`.
 */
class m240526_125717_create_user_activity_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user_activity_logs}}', [
             'id' => $this->primaryKey(),
             'user_id'=>$this->integer(),
             'action'=>$this-> string(255),
             'controller'=>$this->string(255),
             'created_at'=>$this->timestamp(),
             'user_ip'=>$this->string(255),
             'user_agent'=>$this->string(255),
             'beforeData'=>$this->json(),
             'afterData'=>$this->json(),
             
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%user_activity}}');
    }
}
