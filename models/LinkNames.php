<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "{{%link_names}}".
 *
 * @property int $id
 * @property string $label
 * @property string $access_name
 */
class LinkNames extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%link_names}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['label', 'access_name', 'description', 'module', 'isparent', 'order', 'has_submenu', 'url'], 'required'],
            [['label', 'access_name', 'url'], 'string', 'max' => 100],
            [['icon'], 'string'],
            [['access_name'], 'unique'],
            [['order', 'parentid'], 'integer'],
            [['status'], 'safe']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'label' => Yii::t('app', 'Label'),
            'access_name' => Yii::t('app', 'Access Name'),
            'description' => Yii::t('app', 'Description'),
            'parentid' => Yii::t('app', 'Parent Menu'),
            'isparent' => Yii::t('app', 'Is Parent menu ?')
        ];
    }

    /**
     * {@inheritdoc}
     * @return LinkNamesQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new LinkNamesQuery(get_called_class());
    }

    public function getMod()
    {
        return $this->hasOne(ModuleMenu::class, ['id' => 'module']);
    }
    public function getParentName()
    {
        return self::findOne($this->parentid)->label ?? '';
    }


    public static function getParent()
    {
        $link =    LinkNames::find()->where(['status' => true, 'isparent' => true, 'has_submenu' => true])->orderBy('order asc')->all();
        $result = ArrayHelper::map($link, 'id', 'label');
        return $result;
    }
}
