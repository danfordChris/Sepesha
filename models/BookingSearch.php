<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Booking;

/**
 * BookingSearch represents the model behind the search form of `app\models\Booking`.
 */
class BookingSearch extends Booking
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'customer_id', 'agent_id', 'driver_id', 'vehicle_id', 'vendor_id', 'driver_assignment_id', 'booking_reference', 'fee_category_id', 'discount_code', 'referal_code', 'recepient_name', 'recepient_phone', 'recepient_address', 'type', 'pyment_mode', 'description', 'currency', 'pickup_location', 'delivery_location', 'pickup_date', 'delivery_date', 'scheduled_time', 'pickup_photo', 'delivery_photo', 'status', 'deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['discount_code_value', 'referal_code_value', 'weight', 'base_rate_km', 'base_price', 'vehicle_multipplier', 'vat', 'other_charge', 'driver_comission_rate', 'vendor_comission_rate', 'office_comission_rate', 'agent_comission_rate', 'driver_bonus', 'vendor_bonus', 'customer_bonus', 'volume', 'price', 'discount', 'distance_km', 'amount', 'pickup_latitude', 'pickup_longitude', 'delivery_latitude', 'delivery_longitude'], 'number'],
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
        $query = Booking::find()->orderBy('created_at desc');
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
            'discount_code_value' => $this->discount_code_value,
            'referal_code_value' => $this->referal_code_value,
            'weight' => $this->weight,
            'base_rate_km' => $this->base_rate_km,
            'base_price' => $this->base_price,
            'vehicle_multipplier' => $this->vehicle_multipplier,
            'vat' => $this->vat,
            'other_charge' => $this->other_charge,
            'driver_comission_rate' => $this->driver_comission_rate,
            'vendor_comission_rate' => $this->vendor_comission_rate,
            'office_comission_rate' => $this->office_comission_rate,
            'agent_comission_rate' => $this->agent_comission_rate,
            'driver_bonus' => $this->driver_bonus,
            'vendor_bonus' => $this->vendor_bonus,
            'customer_bonus' => $this->customer_bonus,
            'volume' => $this->volume,
            'price' => $this->price,
            'discount' => $this->discount,
            'distance_km' => $this->distance_km,
            'amount' => $this->amount,
            'pickup_latitude' => $this->pickup_latitude,
            'pickup_longitude' => $this->pickup_longitude,
            'delivery_latitude' => $this->delivery_latitude,
            'delivery_longitude' => $this->delivery_longitude,
            'pickup_date' => $this->pickup_date,
            'delivery_date' => $this->delivery_date,
            'scheduled_time' => $this->scheduled_time,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'id', $this->id])
            ->andFilterWhere(['like', 'customer_id', $this->customer_id])
            ->andFilterWhere(['like', 'agent_id', $this->agent_id])
            ->andFilterWhere(['like', 'driver_id', $this->driver_id])
            ->andFilterWhere(['like', 'vehicle_id', $this->vehicle_id])
            ->andFilterWhere(['like', 'vendor_id', $this->vendor_id])
            ->andFilterWhere(['like', 'driver_assignment_id', $this->driver_assignment_id])
            ->andFilterWhere(['like', 'booking_reference', $this->booking_reference])
            ->andFilterWhere(['like', 'fee_category_id', $this->fee_category_id])
            ->andFilterWhere(['like', 'discount_code', $this->discount_code])
            ->andFilterWhere(['like', 'referal_code', $this->referal_code])
            ->andFilterWhere(['like', 'recepient_name', $this->recepient_name])
            ->andFilterWhere(['like', 'recepient_phone', $this->recepient_phone])
            ->andFilterWhere(['like', 'recepient_address', $this->recepient_address])
            ->andFilterWhere(['like', 'type', $this->type])
            ->andFilterWhere(['like', 'pyment_mode', $this->pyment_mode])
            ->andFilterWhere(['like', 'description', $this->description])
            ->andFilterWhere(['like', 'currency', $this->currency])
            ->andFilterWhere(['like', 'pickup_location', $this->pickup_location])
            ->andFilterWhere(['like', 'delivery_location', $this->delivery_location])
            ->andFilterWhere(['like', 'pickup_photo', $this->pickup_photo])
            ->andFilterWhere(['like', 'delivery_photo', $this->delivery_photo])
            ->andFilterWhere(['like', 'status', $this->status]);

        return $dataProvider;
    }
}
