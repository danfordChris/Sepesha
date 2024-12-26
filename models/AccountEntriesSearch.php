<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\AccountEntries;

/**
 * AccountEntriesSearch represents the model behind the search form of `app\models\AccountEntries`.
 */
class AccountEntriesSearch extends AccountEntries
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'customer_id', 'status', 'created_by', 'updated_by'], 'integer'],
            [['name', 'entry_type', 'account_code', 'descr', 'reference_no', 'transact_date', 'created_at', 'updated_at', 'transact_id'], 'safe'],
            [['dramount', 'cramount'], 'number'],
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
        $query = AccountEntries::find();

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
            // 'transact_id' => $this->transact_id,
            'dramount' => $this->dramount,
            'cramount' => $this->cramount,
            'customer_id' => $this->customer_id,
            'status' => $this->status,
            'transact_date' => $this->transact_date,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'entry_type', $this->entry_type])
            ->andFilterWhere(['like', 'account_code', $this->account_code])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'reference_no', $this->reference_no])
            ->andFilterWhere(['like', 'transact_id', $this->transact_id]);

        return $dataProvider;
    }
}
