<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\ClientsInfo;

/**
 * ClientsInfoSearch represents the model behind the search form of `app\models\ClientsInfo`.
 */
class ClientsInfoSearch extends ClientsInfo
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'login_attempts', 'userid', 'total_rides', 'total_ratings', 'total_deliveries', 'is_verified', 'country_id', 'region_id', 'district_id', 'status', 'approved_by', 'wid', 'stid', 'created_by', 'updated_by', 'otp', 'privacy_checked'], 'integer'],
            [['role', 'entity_type', 'reference_number', 'name', 'mname', 'sname', 'email', 'phonecode', 'phone', 'password', 'password_hash', 'password_reset_token', 'company_id', 'confirmation_token', 'auth_key', 'password_expiry', 'driver_license_number', 'license_expiry_date', 'profile_photo', 'dob', 'preferred_payment_method', 'address', 'ward', 'street', 'house_number', 'postal_code', 'location_updated_at', 'attachment', 'approved_date', 'wfstatus', 'requserinput', 'deleted_at', 'created_at', 'updated_at', 'otp_expires_at', 'referal_code'], 'safe'],
            [['rating', 'wallet_balance_tzs', 'wallet_balance_usd', 'latitude', 'longitude'], 'number'],
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
        $query = ClientsInfo::find();

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
            'login_attempts' => $this->login_attempts,
            'userid' => $this->userid,
            'license_expiry_date' => $this->license_expiry_date,
            'rating' => $this->rating,
            'total_rides' => $this->total_rides,
            'total_ratings' => $this->total_ratings,
            'total_deliveries' => $this->total_deliveries,
            'dob' => $this->dob,
            'is_verified' => $this->is_verified,
            'wallet_balance_tzs' => $this->wallet_balance_tzs,
            'wallet_balance_usd' => $this->wallet_balance_usd,
            'country_id' => $this->country_id,
            'region_id' => $this->region_id,
            'district_id' => $this->district_id,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'location_updated_at' => $this->location_updated_at,
            'status' => $this->status,
            'approved_by' => $this->approved_by,
            'approved_date' => $this->approved_date,
            'wid' => $this->wid,
            'stid' => $this->stid,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'otp' => $this->otp,
            'otp_expires_at' => $this->otp_expires_at,
            'privacy_checked' => $this->privacy_checked,
        ]);

        $query->andFilterWhere(['like', 'role', $this->role])
            ->andFilterWhere(['like', 'entity_type', $this->entity_type])
            ->andFilterWhere(['like', 'reference_number', $this->reference_number])
            ->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'mname', $this->mname])
            ->andFilterWhere(['like', 'sname', $this->sname])
            ->andFilterWhere(['like', 'email', $this->email])
            ->andFilterWhere(['like', 'phonecode', $this->phonecode])
            ->andFilterWhere(['like', 'phone', $this->phone])
            ->andFilterWhere(['like', 'password', $this->password])
            ->andFilterWhere(['like', 'password_hash', $this->password_hash])
            ->andFilterWhere(['like', 'password_reset_token', $this->password_reset_token])
            ->andFilterWhere(['like', 'company_id', $this->company_id])
            ->andFilterWhere(['like', 'confirmation_token', $this->confirmation_token])
            ->andFilterWhere(['like', 'auth_key', $this->auth_key])
            ->andFilterWhere(['like', 'password_expiry', $this->password_expiry])
            ->andFilterWhere(['like', 'driver_license_number', $this->driver_license_number])
            ->andFilterWhere(['like', 'profile_photo', $this->profile_photo])
            ->andFilterWhere(['like', 'preferred_payment_method', $this->preferred_payment_method])
            ->andFilterWhere(['like', 'address', $this->address])
            ->andFilterWhere(['like', 'ward', $this->ward])
            ->andFilterWhere(['like', 'street', $this->street])
            ->andFilterWhere(['like', 'house_number', $this->house_number])
            ->andFilterWhere(['like', 'postal_code', $this->postal_code])
            ->andFilterWhere(['like', 'attachment', $this->attachment])
            ->andFilterWhere(['like', 'wfstatus', $this->wfstatus])
            ->andFilterWhere(['like', 'requserinput', $this->requserinput])
            ->andFilterWhere(['like', 'referal_code', $this->referal_code]);

        return $dataProvider;
    }
}
