<?php

use yii\db\Migration;

/**
 * Class m240607_144104_auto_create_roles
 */
class m240607_144104_auto_create_roles extends Migration
{
    /**
     * {@inheritdoc}
     */

    function convertToUpperCase($string)
    {
        // Replace underscores with spaces
        $string = str_replace('_', ' ', $string);
        // Convert the string to upper case
        $string = strtoupper($string);
        // Remove spaces
        // $string = str_replace(' ', '', $string);
        return $string;
    }

    function convertToLowerCase($string)
    {
        // Replace underscores with spaces
        $string = str_replace('_', ' ', $string);
        // Convert the string to upper case
        $string = strtolower($string);
        // Remove spaces
        // $string = str_replace(' ', '', $string);
        return $string;
    }

    public function safeUp()
    {



        // Fetch all table names or model classes
        $tables = Yii::$app->db->schema->getTableNames();

        foreach ($tables as $table) {
            // Parse table name or model class to extract suffix
            $suffix = $this->extractSuffix($table);

            // Generate roles based on the suffix
            $roles = [
                "create_{$suffix}",
                "edit_{$suffix}",
                "view_{$suffix}",
                // Add more roles if needed
            ];

            // Insert roles into the roles table
            foreach ($roles as $role) {
                $this->insert('roles', ['name' =>  $this->convertToLowerCase($role), 'module' => $this->convertToUpperCase($table), 'entity' => $table, 'type' => 'other', 'code' => $role]);
            }
        }
    }

    protected function extractSuffix($className)
    {
        $className = strtolower(str_replace('.php', '', $className));
        return $className;
    }


    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->delete('roles');
    }
}
