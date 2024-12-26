<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\BankAccounts;

/**
 * BankAccountsSearch represents the model behind the search form of `app\models\BankAccounts`.
 */
class BankAccountsSearch extends BankAccounts
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'status', 'created_by', 'updated_by'], 'integer'],
            [['accname', 'account_no', 'bankname', 'banksname', 'currency', 'branch', 'swiftcode', 'address', 'start_date', 'created_at', 'updated_at'], 'safe'],
            [['openbal'], 'number'],
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
        $query = BankAccounts::find();

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
            'openbal' => $this->openbal,
            'status' => $this->status,
            'start_date' => $this->start_date,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'accname', $this->accname])
            ->andFilterWhere(['like', 'account_no', $this->account_no])
            ->andFilterWhere(['like', 'bankname', $this->bankname])
            ->andFilterWhere(['like', 'banksname', $this->banksname])
            ->andFilterWhere(['like', 'currency', $this->currency])
            ->andFilterWhere(['like', 'branch', $this->branch])
            ->andFilterWhere(['like', 'swiftcode', $this->swiftcode])
            ->andFilterWhere(['like', 'address', $this->address]);

        return $dataProvider;
    }
}
