<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\WorkflowTools;

/**
 * WorkflowToolsSearch represents the model behind the search form of `app\models\WorkflowTools`.
 */
class WorkflowToolsSearch extends WorkflowTools
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'wid', 'toolid', 'mandatory', 'status', 'created_by', 'updated_by'], 'integer'],
            [['description', 'created_at', 'updated_at', 'stid', 'ctrl', 'action'], 'safe'],
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
        $query = WorkflowTools::find();

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
            'wid' => $this->wid,
            'stid' => $this->stid,
            'toolid' => $this->toolid,
            'mandatory' => $this->mandatory,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);
        $query
            ->andFilterWhere(['like', 'description', $this->description]);

        return $dataProvider;
    }
}
