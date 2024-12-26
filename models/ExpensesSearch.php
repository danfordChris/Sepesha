<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Expenses;

/**
 * ExpensesSearch represents the model behind the search form of `app\models\Expenses`.
 */
class ExpensesSearch extends Expenses
{
    /**
     * {@inheritdoc}
     */
    public $start_date;
    public $end_date;
    public function rules()
    {
        return [
            [['id',  'reference_no', 'trip_id', 'location_id', 'oid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['catid', 'descr','empid','busid', 'created_at', 'updated_at', 'transact_date'], 'safe'],
            [[ 'amount'], 'number'],
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
    public function search($params, $hd)
    {
        // $query = Expenses::find();
        $query = Expenses::find()->where(['trip_id' => $hd]);

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
            'empid' => $this->empid,
            'busid' => $this->busid,
            'trip_id' => $this->trip_id,
            'location_id' => $this->location_id,
            'reference_no' => $this->reference_no,
            // 'transact_date' => $this->transact_date,
            'oid' => $this->oid,
            'amount' => $this->amount,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'catid', $this->catid])
            ->andFilterWhere(['>=', 'transact_date', $this->start_date])
            ->andFilterWhere(['<=', 'transact_date', $this->end_date])
            ->andFilterWhere(['like', 'descr', $this->descr]);

        return $dataProvider;
    }

    public function search1($params)
    {
        $query = Expenses::find()->orderBy('transact_date desc');
        // $query = Expenses::find()->where(['trip_id'=>$hd]);

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
            'empid' => $this->empid,
            'busid' => $this->busid,
            'trip_id' => $this->trip_id,
            'location_id' => $this->location_id,
            'reference_no' => $this->reference_no,
            // 'transact_date' => $this->transact_date,
            'oid' => $this->oid,
            'amount' => $this->amount,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'catid', $this->catid])
            ->andFilterWhere(['>=', 'transact_date', $this->start_date])
            ->andFilterWhere(['<=', 'transact_date', $this->end_date])
            ->andFilterWhere(['like', 'descr', $this->descr]);

        return $dataProvider;
    }
}
