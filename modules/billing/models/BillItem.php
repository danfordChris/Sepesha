<?php

namespace app\modules\billing\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use app\models\Products;
/**
 * This is the model class for table "bill_items".
 *
 * @property string $itemid
 * @property int $billid
 * @property int $item_id
 * @property string $descr
 * @property int $item_tax_rate
 * @property string $quantity
 * @property string $unit_price
 * @property string $line_total
 * @property string $status
 * @property int $created_by
 * @property int $updated_by
 * @property string $created_at
 * @property string $updated_at
 */
class BillItem extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'bill_items';
    }

    public function behaviors()
    {
         return [
             BlameableBehavior::class,
             [
                 'class'=>TimestampBehavior::class,
                 'value'=>new Expression('NOW()')
             ],
         ];
     }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['unit_price','quantity'], 'required'],
            [['item_id', 'item_tax_rate', 'created_by', 'updated_by'], 'integer'],
            [['descr', 'status'], 'string'],
            [['quantity', 'unit_price', 'line_total'], 'number'],
            [['created_at', 'updated_at'], 'safe'],
            [['itemid','billid'], 'string', 'max' => 190],
            [['itemid'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'itemid' => 'Itemid',
            'billid' => 'Billid',
            'item_id' => 'Item ID',
            'descr' => 'Descr',
            'item_tax_rate' => 'Item Tax Rate',
            'quantity' => 'Quantity',
            'unit_price' => 'Unit Price',
            'line_total' => 'Line Total',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }


    public  function getProduct()
    {

        return $this->hasOne(Products::class,['product_id'=>'item_id']);
    }
}
