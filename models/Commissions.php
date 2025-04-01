<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "commissions".
 *
 * @property int $id
 * @property string|null $customer_id
 * @property string|null $transact_date
 * @property string $business_type
 * @property string|null $transact_id
 * @property string|null $name
 * @property string|null $entryid
 * @property string|null $entry_type CREDIT, DEBIT
 * @property string|null $category voucher, invoice, payment, receipt
 * @property string|null $account_code
 * @property int $quantity
 * @property string|null $uom
 * @property float $vat
 * @property float $unit_price
 * @property float $dramount
 * @property float $cramount
 * @property string|null $currency
 * @property float|null $erate
 * @property string|null $descr
 * @property int|null $fyid
 * @property string|null $reference_no
 * @property string $status
 * @property int|null $wid
 * @property int $stid
 * @property string|null $wfstatus
 * @property string $requserinput
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Commissions extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'commissions';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['transact_date', 'created_at', 'updated_at'], 'safe'],
            [['business_type'], 'required'],
            [['quantity', 'fyid', 'wid', 'stid', 'created_by', 'updated_by'], 'integer'],
            [['vat', 'unit_price', 'dramount', 'cramount', 'erate'], 'number'],
            [['descr'], 'string'],
            [['customer_id', 'transact_id', 'entryid'], 'string', 'max' => 36],
            [['business_type', 'entry_type', 'category', 'account_code', 'currency', 'reference_no'], 'string', 'max' => 50],
            [['name', 'wfstatus'], 'string', 'max' => 100],
            [['uom'], 'string', 'max' => 20],
            [['status', 'requserinput'], 'string', 'max' => 2],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'customer_id' => 'Customer Name',
            'transact_date' => 'Transaction Date',
            'business_type' => 'Business Type',
            'transact_id' => 'Transaction ID',
            'name' => 'Name',
            'entryid' => 'Entryid',
            'entry_type' => 'Entry Type',
            'category' => 'Category',
            'account_code' => 'Account Code',
            'quantity' => 'Quantity',
            'uom' => 'Uom',
            'vat' => 'Vat',
            'unit_price' => 'Unit Price',
            'dramount' => 'Debt amount',
            'cramount' => 'Credit amount',
            'currency' => 'Currency',
            'erate' => 'Erate',
            'descr' => 'Description',
            'fyid' => 'Fyid',
            'reference_no' => 'Reference No',
            'status' => 'Status',
            'wid' => 'Wid',
            'stid' => 'Stid',
            'wfstatus' => 'Wfstatus',
            'requserinput' => 'Requserinput',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
    public function getCustomer()
    {
        return $this->hasOne(ClientInfo::class, ['auth_key' => 'customer_id']);
    }
}
