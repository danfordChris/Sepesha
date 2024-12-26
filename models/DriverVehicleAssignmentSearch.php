<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\DriverVehicleAssignment;

/**
 * DriverVehicleAssignmentSearch represents the model behind the search form of `app\models\DriverVehicleAssignment`.
 */
class DriverVehicleAssignmentSearch extends DriverVehicleAssignment
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'vehicle_id', 'location_updated_at', 'assignment_start', 'assignment_end', 'status', 'requserinput', 'wfstatus', 'attachment', 'approval_status', 'approved_at', 'approval_comments', 'deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['driver_id', 'wid', 'stid', 'approved_by', 'created_by', 'updated_by'], 'integer'],
            [['latitude', 'longitude'], 'number'],
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
        $query = DriverVehicleAssignment::find();

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
            'driver_id' => $this->driver_id,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'location_updated_at' => $this->location_updated_at,
            'assignment_start' => $this->assignment_start,
            'assignment_end' => $this->assignment_end,
            'wid' => $this->wid,
            'stid' => $this->stid,
            'approved_by' => $this->approved_by,
            'approved_at' => $this->approved_at,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'id', $this->id])
            ->andFilterWhere(['like', 'vehicle_id', $this->vehicle_id])
            ->andFilterWhere(['like', 'status', $this->status])
            ->andFilterWhere(['like', 'requserinput', $this->requserinput])
            ->andFilterWhere(['like', 'wfstatus', $this->wfstatus])
            ->andFilterWhere(['like', 'attachment', $this->attachment])
            ->andFilterWhere(['like', 'approval_status', $this->approval_status])
            ->andFilterWhere(['like', 'approval_comments', $this->approval_comments]);

        return $dataProvider;
    }
}
