<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Roles;

/**
 * RolesSearch represents the model behind the search form of `app\models\Roles`.
 */
class RolesSearch extends Roles
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['rid', 'cby', 'eby'], 'integer'],
            [['name', 'module', 'cdate', 'edate'], 'safe'],
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
        $query = Roles::find();

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
            'rid' => $this->rid,
            'cby' => $this->cby,
            'cdate' => $this->cdate,
            'eby' => $this->eby,
            'edate' => $this->edate,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'module', $this->module]);

        return $dataProvider;
    }
}
