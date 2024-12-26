<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Receipts;

/**
 * ReceiptsSearch represents the model behind the search form of `app\models\Receipts`.
 */
class ReceiptsSearch extends Receipts
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['recid', 'recno', 'customer_id', 'amount', 'desc', 'issue_by', 'appr_by', 'status', 'created_by', 'updated_by'], 'integer'],
            [['balance'], 'number'],
            [['ref_no','currency', 'control_no', 'created_at', 'updated_at'], 'safe'],
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
        $query = Receipts::find();

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
            'recid' => $this->recid,
            'recno' => $this->recno,
            'customer_id' => $this->customer_id,
            'amount' => $this->amount,
            'debit' => $this->debit,
            'credit' => $this->credit,
            'currency' => $this->currency,
            'balance' => $this->balance,
            'desc' => $this->desc,
            'issue_by' => $this->issue_by,
            'appr_by' => $this->appr_by,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'ref_no', $this->ref_no])
            ->andFilterWhere(['like', 'control_no', $this->control_no]);

        return $dataProvider;
    }
}
