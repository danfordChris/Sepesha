<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\OneOnOneSession;

/**
 * OneOnOneSessionSearch represents the model behind the search form of `app\models\OneOnOneSession`.
 */
class OneOnOneSessionSearch extends OneOnOneSession
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'intake_id', 'is_safeguardsafety', 'is_shared', 'created_by', 'updated_by'], 'integer'],
            [['objective', 'checkin', 'employee', 'plan_activity', 'checkout', 'tools_materials', 'session_details', 'session_description', 'issues_actions', 'safeguardsafetydetails', 'shared_date', 'actions_taken', 'review_by', 'review_date', 'status', 'created_at', 'updated_at'], 'safe'],
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
        $query = OneOnOneSession::find();

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
            'intake_id' => $this->intake_id,
            'is_safeguardsafety' => $this->is_safeguardsafety,
            'is_shared' => $this->is_shared,
            'shared_date' => $this->shared_date,
            'review_by' => $this->review_by,
            'review_date' => $this->review_date,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'objective', $this->objective])
            ->andFilterWhere(['like', 'checkin', $this->checkin])
            ->andFilterWhere(['like', 'employee', $this->employee])
            ->andFilterWhere(['like', 'plan_activity', $this->plan_activity])
            ->andFilterWhere(['like', 'checkout', $this->checkout])
            ->andFilterWhere(['like', 'tools_materials', $this->tools_materials])
            ->andFilterWhere(['like', 'session_details', $this->session_details])
            ->andFilterWhere(['like', 'session_description', $this->session_description])
            ->andFilterWhere(['like', 'issues_actions', $this->issues_actions])
            ->andFilterWhere(['like', 'safeguardsafetydetails', $this->safeguardsafetydetails])
            ->andFilterWhere(['like', 'actions_taken', $this->actions_taken])
            ->andFilterWhere(['like', 'status', $this->status]);

        return $dataProvider;
    }
}
