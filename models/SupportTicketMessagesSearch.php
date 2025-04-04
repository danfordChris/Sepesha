<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\SupportTicketMessages;

/**
 * SupportTicketMessagesSearch represents the model behind the search form of `app\models\SupportTicketMessages`.
 */
class SupportTicketMessagesSearch extends SupportTicketMessages
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'support_ticket_id', 'sender_id', 'sender_role', 'message', 'attachment', 'created_at', 'updated_at', 'deleted_at'], 'safe'],
            [['is_read', 'is_delivered', 'created_by', 'updated_by'], 'integer'],
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
        $query = SupportTicketMessages::find();

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
            'is_read' => $this->is_read,
            'is_delivered' => $this->is_delivered,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'deleted_at' => $this->deleted_at,
        ]);

        $query->andFilterWhere(['like', 'id', $this->id])
            ->andFilterWhere(['like', 'support_ticket_id', $this->support_ticket_id])
            ->andFilterWhere(['like', 'sender_id', $this->sender_id])
            ->andFilterWhere(['like', 'sender_role', $this->sender_role])
            ->andFilterWhere(['like', 'message', $this->message])
            ->andFilterWhere(['like', 'attachment', $this->attachment]);

        return $dataProvider;
    }
}
