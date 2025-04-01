<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Commissions;

/**
 * CommissionsSearch represents the model behind the search form of `app\models\Commissions`.
 */
class CommissionsSearch extends Commissions
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'quantity', 'fyid', 'wid', 'stid', 'created_by', 'updated_by'], 'integer'],
            [['customer_id', 'transact_date', 'business_type', 'transact_id', 'name', 'entryid', 'entry_type', 'category', 'account_code', 'uom', 'currency', 'descr', 'reference_no', 'status', 'wfstatus', 'requserinput', 'created_at', 'updated_at'], 'safe'],
            [['vat', 'unit_price', 'dramount', 'cramount', 'erate'], 'number'],
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
        $query = Commissions::find();

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
            'id' => $this->id,
            'transact_date' => $this->transact_date,
            'quantity' => $this->quantity,
            'vat' => $this->vat,
            'unit_price' => $this->unit_price,
            'dramount' => $this->dramount,
            'cramount' => $this->cramount,
            'erate' => $this->erate,
            'fyid' => $this->fyid,
            'wid' => $this->wid,
            'stid' => $this->stid,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'customer_id', $this->customer_id])
            ->andFilterWhere(['like', 'business_type', $this->business_type])
            ->andFilterWhere(['like', 'transact_id', $this->transact_id])
            ->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'entryid', $this->entryid])
            ->andFilterWhere(['like', 'entry_type', $this->entry_type])
            ->andFilterWhere(['like', 'category', $this->category])
            ->andFilterWhere(['like', 'account_code', $this->account_code])
            ->andFilterWhere(['like', 'uom', $this->uom])
            ->andFilterWhere(['like', 'currency', $this->currency])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'reference_no', $this->reference_no])
            ->andFilterWhere(['like', 'status', $this->status])
            ->andFilterWhere(['like', 'wfstatus', $this->wfstatus])
            ->andFilterWhere(['like', 'requserinput', $this->requserinput]);

        return $dataProvider;
    }
}
