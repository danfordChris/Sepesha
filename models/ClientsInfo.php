<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "clients_info".
 *
 * @property int $id
 * @property string $role customer, agent, vendor, driver
 * @property string|null $entity_type individual or company (applicable only for vendors and agents)
 * @property string $reference_number
 * @property string $name
 * @property string|null $mname
 * @property string|null $sname
 * @property string $email
 * @property string $phonecode
 * @property string $phone
 * @property string|null $password
 * @property string|null $password_hash
 * @property string|null $password_reset_token
 * @property string|null $company_id
 * @property string|null $confirmation_token
 * @property int|null $login_attempts
 * @property int|null $userid
 * @property string|null $auth_key
 * @property string|null $password_expiry
 * @property string|null $driver_license_number
 * @property string|null $license_expiry_date
 * @property float|null $rating
 * @property int|null $total_rides
 * @property int|null $total_ratings
 * @property int|null $total_deliveries
 * @property string|null $profile_photo
 * @property string|null $dob
 * @property int|null $is_verified
 * @property float|null $wallet_balance_tzs
 * @property float|null $wallet_balance_usd
 * @property string|null $preferred_payment_method card, wallet, cash, bank
 * @property int|null $country_id
 * @property int|null $region_id
 * @property int|null $district_id
 * @property string|null $address
 * @property string|null $ward
 * @property string|null $street
 * @property string|null $house_number
 * @property string|null $postal_code
 * @property float|null $latitude
 * @property float|null $longitude
 * @property string|null $location_updated_at
 * @property int|null $status 0,10
 * @property string|null $attachment
 * @property int|null $approved_by
 * @property string|null $approved_date
 * @property int|null $wid
 * @property int|null $stid
 * @property string|null $wfstatus
 * @property string|null $requserinput
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 * @property string $created_at
 * @property string $updated_at
 * @property int|null $otp
 * @property string|null $otp_expires_at
 * @property int|null $privacy_checked
 * @property string|null $referal_code
 */
class ClientsInfo extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'clients_info';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['role', 'reference_number', 'name', 'email', 'phonecode', 'phone'], 'required'],
            [['login_attempts', 'userid', 'total_rides', 'total_ratings', 'total_deliveries', 'is_verified', 'country_id', 'region_id', 'district_id', 'status', 'approved_by', 'wid', 'stid', 'created_by', 'updated_by', 'otp', 'privacy_checked'], 'integer'],
            [['license_expiry_date', 'dob', 'location_updated_at', 'approved_date', 'deleted_at', 'created_at', 'updated_at', 'otp_expires_at'], 'safe'],
            [['rating', 'wallet_balance_tzs', 'wallet_balance_usd', 'latitude', 'longitude'], 'number'],
            [['role', 'entity_type', 'reference_number', 'password', 'password_hash', 'password_reset_token', 'company_id', 'confirmation_token', 'auth_key', 'password_expiry', 'driver_license_number', 'profile_photo', 'preferred_payment_method', 'address', 'ward', 'street', 'house_number', 'postal_code'], 'string', 'max' => 255],
            [['name', 'mname', 'sname', 'email', 'attachment'], 'string', 'max' => 190],
            [['phonecode'], 'string', 'max' => 10],
            [['phone'], 'string', 'max' => 20],
            [['wfstatus'], 'string', 'max' => 150],
            [['requserinput'], 'string', 'max' => 1],
            [['referal_code'], 'string', 'max' => 50],
            [['email'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'Name',
            'role' => 'Role',
            'entity_type' => 'Entity Type',
            'reference_number' => 'Reference Number',
            'name' => 'Name',
            'mname' => 'Mname',
            'sname' => 'Sname',
            'email' => 'Email',
            'phonecode' => 'Phonecode',
            'phone' => 'Phone',
            'password' => 'Password',
            'password_hash' => 'Password Hash',
            'password_reset_token' => 'Password Reset Token',
            'company_id' => 'Company ID',
            'confirmation_token' => 'Confirmation Token',
            'login_attempts' => 'Login Attempts',
            'userid' => 'Userid',
            'auth_key' => 'Auth Key',
            'password_expiry' => 'Password Expiry',
            'driver_license_number' => 'Driver License Number',
            'license_expiry_date' => 'License Expiry Date',
            'rating' => 'Rating',
            'total_rides' => 'Total Rides',
            'total_ratings' => 'Total Ratings',
            'total_deliveries' => 'Total Deliveries',
            'profile_photo' => 'Profile Photo',
            'dob' => 'Dob',
            'is_verified' => 'Is Verified',
            'wallet_balance_tzs' => 'Wallet Balance Tzs',
            'wallet_balance_usd' => 'Wallet Balance Usd',
            'preferred_payment_method' => 'Preferred Payment Method',
            'country_id' => 'Country ID',
            'region_id' => 'Region ID',
            'district_id' => 'District ID',
            'address' => 'Address',
            'ward' => 'Ward',
            'street' => 'Street',
            'house_number' => 'House Number',
            'postal_code' => 'Postal Code',
            'latitude' => 'Latitude',
            'longitude' => 'Longitude',
            'location_updated_at' => 'Location Updated At',
            'status' => 'Status',
            'attachment' => 'Attachment',
            'approved_by' => 'Approved By',
            'approved_date' => 'Approved Date',
            'wid' => 'Wid',
            'stid' => 'Stid',
            'wfstatus' => 'Wfstatus',
            'requserinput' => 'Requserinput',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'deleted_at' => 'Deleted At',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'otp' => 'Otp',
            'otp_expires_at' => 'Otp Expires At',
            'privacy_checked' => 'Privacy Checked',
            'referal_code' => 'Referal Code',
        ];
    }
}
