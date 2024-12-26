<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%tbl_links}}".
 *
 * @property int $id
 * @property string $link_name
 * @property string $link_code
 * @property int $enabled
 * @property int $role_id
 */
class Links extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%tbl_links}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['link_code', 'enabled', 'role_id'], 'required'],
            [['enabled', 'role_id'], 'integer'],
            [['link_name'], 'safe'],
            [['link_name', 'link_code'], 'string', 'max' => 100],
            [['link_code', 'role_id'], 'unique', 'targetAttribute' => ['link_code', 'role_id'], 'message' => 'Link already  registered'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'link_name' => Yii::t('app', 'Link Name'),
            'link_code' => Yii::t('app', 'Link Name'),
            'enabled' => Yii::t('app', 'Enabled'),
            'role_id' => Yii::t('app', 'User Type'),
        ];
    }

    /**
     * {@inheritdoc}
     * @return LinksQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new LinksQuery(get_called_class());
    }

    public function getLinkNames()
    {
        return $this->hasOne(LinkNames::class, ['access_name' => 'link_code']);
    }
    public function getRole()
    {
        return $this->hasOne(Roles::class, ['rid' => 'role_id']);
    }
}