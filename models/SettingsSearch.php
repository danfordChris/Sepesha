<?php

namespace app\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Settings;

/**
 * SettingsSearch represents the model behind the search form of `app\models\Settings`.
 */
class SettingsSearch extends Settings
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['settingid'], 'integer'],
            [[
                'password_change',
                'login_attempts',
                'timezone',
                'appname',
                'mail_host',
                'mail_username',
                'mail_password',
                'mail_port',
                'mail_encryption',
                'mail_dns',
                'mail_senderEmail',
                'mail_senderNamE',
                'admin_email',
                'password_template'
            ], 'safe']
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
        $query = Settings::find();

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
            'password_change' => $this->password_change,
            'login_attempts' => $this->login_attempts,
            'timezone' => $this->timezone,
            'appname' => $this->appname,
            'mail_host' => $this->mail_host,
            'mail_username' => $this->mail_username,
            'mail_password' => $this->mail_password,
            'mail_port' => $this->mail_port,
            'mail_encryption' => $this->mail_encryption,
            'mail_dns' => $this->mail_dns,
            'mail_senderEmail' => $this->mail_senderEmail,
            'mail_senderNamE' => $this->mail_senderNamE,
            'password_template' => $this->password_template,
            'admin_email' => $this->admin_email,
        ]);

        return $dataProvider;
    }
}
