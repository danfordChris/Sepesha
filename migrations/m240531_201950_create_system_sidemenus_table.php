<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%system_sidemenus}}`.
 */
class m240531_201950_create_system_sidemenus_table extends Migration
{

    public $icon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'
    stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-monitor'>
    <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
    <line x1='8' y1='21' x2='16' y2='21'></line>
    <line x1='12' y1='17' x2='12' y2='21'></line></svg>";
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

        $this->createTable('{{%link_names}}', [
            'id' => $this->primaryKey(),
            'label' => $this->string(255)->notNull(),
            'access_name' => $this->string()->notNull(),
            'description' => $this->text(),
            'module' => $this->integer(),
            'status' => $this->boolean()->defaultValue(1),
            'parentid' => $this->integer(),
            'isparent' => $this->boolean()->defaultValue(0),
            'has_submenu' => $this->boolean()->defaultValue(0),
            'url' => $this->string(255),
            'icontype' => $this->string(255)->defaultValue('font_awesome'),
            'icon' => $this->text(),
            'order' => $this->integer(),
        ]);

        $this->createTable('{{%tbl_links}}', [
            'id' => $this->primaryKey(),
            'link_name' => $this->string(),
            'link_code' => $this->string()->notNull(),
            'enabled' => $this->integer()->defaultValue(1),
            'role_id' => $this->integer(),
        ]);

        $this->createTable('{{%module}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'status' => $this->boolean()->defaultValue(1),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%tbl_links}}');
        $this->dropTable('{{%link_names}}');
        $this->dropTable('{{%module}}');
    }
}
