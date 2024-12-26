<?php

namespace app\modules\credit\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\modules\credit\models\CreditControl;

/**
 * CreditControlSearch represents the model behind the search form about `app\modules\credit\models\CreditControl`.
 */
class CreditControlSearch extends CreditControl
{
    public $date_to;
    public $date_from;
    public function rules()
    {
        return [
            [['crdid', 'cdate', 'descr', 'ctype', 'refno', 'recptno', 'created_at', 'updated_at','date_to','date_from'], 'safe'],
            [['camount', 'damount'], 'number'],
            [['oid', 'cid', 'status', 'created_by', 'updated_by'], 'integer'],
        ];
    }

    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }


    public function searchCust($params,$cust)
    {
        $query = CreditControl::find()->where(['status'=>true,'cid'=>$cust])->orderBy('created_at desc');

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        return $dataProvider;
    }

    public function search($params)
    {
        $query = CreditControl::find()->where(['status'=>true])->orderBy('created_at desc');

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'cdate' => $this->cdate,
            'camount' => $this->camount,
            'damount' => $this->damount,
            'oid' => $this->oid,
            'cid' => $this->cid,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'crdid', $this->crdid])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'ctype', $this->ctype])
            ->andFilterWhere(['like', 'refno', $this->refno])
            ->andFilterWhere(['like', 'recptno', $this->recptno])
            ->andFilterWhere(['>=', 'cdate', $this->date_from])
            ->andFilterWhere(['<=', 'cdate', $this->date_to]);

        return $dataProvider;
    }

    public function searchLipa($params)
    {
        $query = CreditControl::find()->where(['status'=>true,'ctype'=>'dbt'])->orderBy('created_at desc');

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'cdate' => $this->cdate,
            'camount' => $this->camount,
            'damount' => $this->damount,
            'oid' => $this->oid,
            'cid' => $this->cid,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'crdid', $this->crdid])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'ctype', $this->ctype])
            ->andFilterWhere(['like', 'refno', $this->refno])
            ->andFilterWhere(['like', 'recptno', $this->recptno])
            ->andFilterWhere(['>=', 'cdate', $this->date_from])
            ->andFilterWhere(['<=', 'cdate', $this->date_to]);

        return $dataProvider;
    }

    public function searchKopa($params)
    {
        $query = CreditControl::find()->where(['status'=>true,'ctype'=>'crd'])->orderBy('created_at desc');

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'cdate' => $this->cdate,
            'camount' => $this->camount,
            'damount' => $this->damount,
            'oid' => $this->oid,
            'cid' => $this->cid,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'crdid', $this->crdid])
            ->andFilterWhere(['like', 'descr', $this->descr])
            ->andFilterWhere(['like', 'ctype', $this->ctype])
            ->andFilterWhere(['like', 'refno', $this->refno])
            ->andFilterWhere(['like', 'recptno', $this->recptno]);

        return $dataProvider;
    }
}
