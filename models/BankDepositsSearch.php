<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\BankDeposits;

/**
 * BankDepositsSearch represents the model behind the search form of `app\models\BankDeposits`.
 */
class BankDepositsSearch extends BankDeposits
{
    /**
     * {@inheritdoc}
     */
    public $date_from,$date_to;
    public function rules()
    {
        return [
            [['id', 'accid', 'deposit_by', 'status', 'created_by', 'updated_by'], 'integer'],
            [['amount'], 'number'],
            [['expense_date', 'deposit_date', 'descr', 'created_at', 'updated_at','tripid','date_from','date_to'], 'safe'],
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
        $query = BankDeposits::find()->where(['status'=>10])->orderBy('deposit_date desc');

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
            'accid' => $this->accid,
            'tripid'=>$this->tripid,
            'deposit_by' => $this->deposit_by,
            'amount' => $this->amount,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);
        $query->andFilterWhere(['like', 'descr', $this->descr])
        ->andFilterWhere(['>=', 'deposit_date', $this->date_from])
        ->andFilterWhere(['<=', 'deposit_date', $this->date_to]);

        return $dataProvider;
    }
}
