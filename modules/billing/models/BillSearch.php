<?php

namespace app\modules\billing\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\modules\billing\models\Bill;

/**
 * BillSearch represents the model behind the search form of `backend\modules\billing\models\Bill`.
 */
class BillSearch extends Bill
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['billid', 'billno', 'bill_date', 'due_date', 'shipping', 'other_info', 'terms', 'saales_person', 'descr', 'payment_status', 'status', 'created_at', 'updated_at'], 'safe'],
            [['cid', 'business_id', 'payment_info', 'tax_rate', 'created_by', 'updated_by'], 'integer'],
            [['disc_amount', 'total_amount'], 'number'],
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
    public function search($params,$bid)
    {
        $query = Bill::find()->where(['refid'=>$bid,'status'=>'ACTIVE'])->orderBy('created_at desc');

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
            'cid' => $this->cid,
            'business_id' => $this->business_id,
            'bill_date' => $this->bill_date,
            'due_date' => $this->due_date,
            'payment_info' => $this->payment_info,
            'tax_rate' => $this->tax_rate,
            'disc_amount' => $this->disc_amount,
            'total_amount' => $this->total_amount,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'billid', $this->billid])
            ->andFilterWhere(['like', 'billno', $this->billno])
            ->andFilterWhere(['like', 'shipping', $this->shipping])
            ->andFilterWhere(['like', 'other_info', $this->other_info])
            ->andFilterWhere(['like', 'terms', $this->terms])
            ->andFilterWhere(['like', 'saales_person', $this->saales_person])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'payment_status', $this->payment_status])
            ->andFilterWhere(['like', 'status', $this->status]);

        return $dataProvider;
    }

    public function searchAll($params)
    {
        $query = Bill::find()->where(['status'=>'ACTIVE'])->orderBy('created_at desc');

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
            'cid' => $this->cid,
            'business_id' => $this->business_id,
            'bill_date' => $this->bill_date,
            'due_date' => $this->due_date,
            'payment_info' => $this->payment_info,
            'tax_rate' => $this->tax_rate,
            'disc_amount' => $this->disc_amount,
            'total_amount' => $this->total_amount,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'billid', $this->billid])
            ->andFilterWhere(['like', 'billno', $this->billno])
            ->andFilterWhere(['like', 'shipping', $this->shipping])
            ->andFilterWhere(['like', 'other_info', $this->other_info])
            ->andFilterWhere(['like', 'terms', $this->terms])
            ->andFilterWhere(['like', 'saales_person', $this->saales_person])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'payment_status', $this->payment_status])
            ->andFilterWhere(['like', 'status', $this->status]);

        return $dataProvider;
    }
}
