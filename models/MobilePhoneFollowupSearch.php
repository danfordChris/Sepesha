<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\MobilePhoneFollowup;

/**
 * MobilePhoneFollowupSearch represents the model behind the search form of `app\models\MobilePhoneFollowup`.
 */
class MobilePhoneFollowupSearch extends MobilePhoneFollowup
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'intakeid', 'empid', 'followup_type', 'caregiverid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['contact_date', 'notes_details', 'next_date', 'caregiver_name', 'created_at', 'updated_at'], 'safe'],
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
        $query = MobilePhoneFollowup::find();

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
            'intakeid' => $this->intakeid,
            'contact_date' => $this->contact_date,
            'empid' => $this->empid,
            'followup_type' => $this->followup_type,
            'next_date' => $this->next_date,
            'caregiverid' => $this->caregiverid,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'notes_details', $this->notes_details])
            ->andFilterWhere(['like', 'caregiver_name', $this->caregiver_name]);

        return $dataProvider;
    }

    public function searchIntake($params,$intake)
    {
        $query = MobilePhoneFollowup::find()->where(['intakeid'=>$intake]);

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
            'intakeid' => $this->intakeid,
            'contact_date' => $this->contact_date,
            'empid' => $this->empid,
            'followup_type' => $this->followup_type,
            'next_date' => $this->next_date,
            'caregiverid' => $this->caregiverid,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'created_by' => $this->created_by,
            'updated_at' => $this->updated_at,
            'updated_by' => $this->updated_by,
        ]);

        $query->andFilterWhere(['like', 'notes_details', $this->notes_details])
            ->andFilterWhere(['like', 'caregiver_name', $this->caregiver_name]);

        return $dataProvider;
    }
}
