<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Products;

/**
 * ProductsSearch represents the model behind the search form about `backend\models\salespoint\Products`.
 */
class ProductsSearch extends Products
{
    public function rules()
    {
        return [
            [['product_id', 'product_buy', 'product_sell', 'stock'], 'integer'],
            [['product_item_model', 'product_specification', 'product_unit'], 'safe'],
        ];


    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function search($params)
    {
        $query = Products::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'product_id' => $this->product_id,
            'product_buy' => $this->product_buy,
            'product_sell' => $this->product_sell,
            'stock' => $this->stock,
            //'sold_stock'=>$this->sold_stock,
        ]);

        $query->andFilterWhere(['like', 'product_item_model', $this->product_item_model])
            ->andFilterWhere(['like', 'product_specification', $this->product_specification])
            ->andFilterWhere(['like', 'product_unit', $this->product_unit]);

        return $dataProvider;
    }
}
