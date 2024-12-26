<?php

namespace app\models;

use Yii;

    use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "products".
 *
 * @property integer $product_id
 * @property string $product_item_model
 * @property string $product_specification
 * @property integer $product_buy
 * @property integer $product_sell
 * @property integer $stock
 * @property string $product_unit
 */
class Products extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['product_item_model', 'product_specification', 'product_buy', 'product_sell', 'stock', 'product_unit'], 'required'],
            [['product_specification', 'product_unit'], 'string'],
            [['product_buy', 'product_sell', 'stock','status'], 'integer'],
            [['product_item_model'], 'string', 'max' => 30],
            [['product_item_model'], 'unique','message' => ' Product  Exits.'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'product_id' => 'Product ID',
            'product_item_model' => 'Item',
            'product_specification' => 'Specification/Parking',
            'product_buy' => 'Buying Price (TZS)',
            'product_sell' => 'Selling Price(TZS)',
            'stock' => 'Opening Stock(PCS)',
            //'sold_stock'=>'Sold Qty',
            'product_unit' => 'Product Unit',
        ];
    }






}
