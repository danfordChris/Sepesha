<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\SupportTickets;

/**
 * SupportTicketsSearch represents the model behind the search form of `app\models\SupportTickets`.
 */
class SupportTicketsSearch extends SupportTickets
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'sender_id', 'subject', 'message', 'category', 'status', 'priority', 'attachment', 'created_at', 'updated_at', 'deleted_at'], 'safe'],
            [['created_by', 'updated_by'], 'integer'],
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
        $query = SupportTickets::find();

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
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'deleted_at' => $this->deleted_at,
        ]);

        $query->andFilterWhere(['like', 'id', $this->id])
            ->andFilterWhere(['like', 'sender_id', $this->sender_id])
            ->andFilterWhere(['like', 'subject', $this->subject])
            ->andFilterWhere(['like', 'message', $this->message])
            ->andFilterWhere(['like', 'category', $this->category])
            ->andFilterWhere(['like', 'status', $this->status])
            ->andFilterWhere(['like', 'priority', $this->priority])
            ->andFilterWhere(['like', 'attachment', $this->attachment]);

        return $dataProvider;
    }
}
