<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Vouchers;

/**
 * VouchersSearch represents the model behind the search form of `app\models\Vouchers`.
 */
class InvoiceSearch extends Invoice
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['vid', 'refno', 'customer_id', 'descr', 'amount', 'checked_by', 'prepared_by', 'authorized_by', 'status', 'created_by', 'updated_by'], 'integer'],
            [['currency', 'transact_type', 'created_at', 'updated_at'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $type= AccountCodes::INVOICE_TRANSACTION;
        $query = Invoice::find()->where(['transact_type'=>$type])->orderBy('created_at desc');

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'vid' => $this->vid,
            'refno' => $this->refno,
            'controno' => $this->controno,
            'customer_id' => $this->customer_id,
            'descr' => $this->descr,
            'amount' => $this->amount,
            'checked_by' => $this->checked_by,
            'prepared_by' => $this->prepared_by,
            'authorized_by' => $this->authorized_by,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'currency', $this->currency])
            ->andFilterWhere(['like', 'transact_type', $this->transact_type]);

        return $dataProvider;
    }



    public function searchPrint($params, $vid)
    {
        $query = Invoice::find()->where(['txid' => $vid]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'txid' => $this->txid,
            'refno' => $this->refno,
            'controno' => $this->controno,
            'customer_id' => $this->customer_id,
            'descr' => $this->descr,
            'amount' => $this->amount,
            'checked_by' => $this->checked_by,
            'prepared_by' => $this->prepared_by,
            'authorized_by' => $this->authorized_by,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'currency', $this->currency])
            ->andFilterWhere(['like', 'transact_type', $this->transact_type]);
        return $dataProvider;
    }
}
