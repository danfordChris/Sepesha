<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%clients}}`.
 */
class m241110_112836_create_users_table extends Migration
{


    public function safeUp()
    {
        $this->createTable('{{%clients_info}}', [
            'id' => $this->primaryKey(),
            'role' => $this->string()->notNull()->comment('customer, agent, vendor, driver'),
            'entity_type' => $this->string()->null()->comment('individual or company (applicable only for vendors and agents)'),
            'reference_number' => $this->string()->notNull(),
            'name' => $this->string(190)->notNull(),
            'mname' => $this->string(190),
            'sname' => $this->string(190),
            'email' => $this->string(190)->unique()->notNull(),
            'phonecode' => $this->string(10)->notNull(),
            'phone' => $this->string(20)->notNull(),
            'password' => $this->string()->null(),
            'password_hash' => $this->string()->null(),
            'password_reset_token' => $this->string()->null(),
            'company_id' => $this->string()->null(),
            'confirmation_token' => $this->string()->null(),
            'login_attempts' => $this->integer()->null(),
            'userid' => $this->integer()->null(),
            'auth_key' => $this->string()->null(),
            'password_expiry' => $this->string()->null(),

            // Driver-specific fields
            'driver_license_number' => $this->string()->null(),
            'license_expiry_date' => $this->date()->null(),
            'rating' => $this->decimal(3, 2)->defaultValue(0),
            'total_rides' => $this->integer()->defaultValue(0),
            'total_ratings' => $this->integer()->defaultValue(0),
            'total_deliveries' => $this->integer()->defaultValue(0),

            // Additional information
            'profile_photo' => $this->string()->null(),
            'dob' => $this->date()->null(),
            'is_verified' => $this->boolean()->defaultValue(false),

            // Wallet & payment information
            'wallet_balance_tzs' => $this->decimal(15, 2)->defaultValue(0.00),
            'wallet_balance_usd' => $this->decimal(15, 2)->defaultValue(0.00),
            'preferred_payment_method' => $this->string()->null()->comment('card, wallet, cash, bank'),

            // Location tracking
            'country_id' => $this->integer()->null(),
            'region_id' => $this->integer()->null(),
            'district_id' => $this->integer()->null(),
            'address' => $this->string()->null(),
            'ward' => $this->string()->null(),
            'street' => $this->string()->null(),
            'house_number' => $this->string()->null(),
            'postal_code' => $this->string()->null(),
            'latitude' => $this->decimal(10, 8)->null(),
            'longitude' => $this->decimal(11, 8)->null(),
            'location_updated_at' => $this->timestamp()->null(),
            'status' => $this->integer()->defaultValue(0)->comment('0,10'),

            // Audit fields
            'attachment' => $this->string(190),
            'approved_by' => $this->integer(),
            'approved_date' => $this->date(),
            'wid' => $this->integer()->defaultValue(1),
            'stid' => $this->integer()->defaultValue(1),
            'wfstatus' => $this->string(150),
            'requserinput' => $this->Char(1)->defaultValue('Y'),

            'created_by' => $this->integer()->null(),
            'updated_by' => $this->integer()->null(),
            'deleted_at' => $this->timestamp()->null(), // Soft delete
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            'otp' => $this->integer(),
            'otp_expires_at' => $this->dateTime(),
            'privacy_checked' => $this->boolean()->defaultValue(0),
            'referal_code' => $this->string(50),
        ]);

        // Foreign keys
        $this->addForeignKey(
            'fk_clients_country_id',
            'clients_info',
            'country_id',
            'countries',
            'id',
            'SET NULL'
        );
        $this->addForeignKey(
            'fk_clients_info_region_id',
            'clients_info',
            'region_id',
            'regions',
            'id',
            'SET NULL'
        );
        $this->addForeignKey(
            'fk_clients_info_district_id',
            'clients_info',
            'district_id',
            'districts',
            'id',
            'SET NULL'
        );
        $this->addForeignKey(
            'fk_clients_info_created_by',
            'clients_info',
            'created_by',
            'clients_info',
            'id',
            'SET NULL'
        );
        $this->addForeignKey(
            'fk_clients_info_updated_by',
            'clients_info',
            'updated_by',
            'clients_info',
            'id',
            'SET NULL'
        );
    }

    public function safeDown()
    {
        // Drop foreign keys first
        $this->dropForeignKey('fk_clients_info_country_id', 'clients_info');
        $this->dropForeignKey('fk_clients_info_region_id', 'clients_info');
        $this->dropForeignKey('fk_clients_info_district_id', 'clients_info');
        $this->dropForeignKey('fk_clients_info_created_by', 'clients_info');
        $this->dropForeignKey('fk_clients_info_updated_by', 'clients_info');

        // Drop the clients_info table
        $this->dropTable('{{%clients_info}}');
    }
}