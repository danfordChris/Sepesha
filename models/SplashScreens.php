<?php

namespace app\models;
namespace app\models;

use Yii;
use yii\db\Expression;
use app\models\CustomHelper;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;




/**
 * This is the model class for table "splash_screens".
 *
 * @property string $id
 * @property string $name
 * @property string|null $photo
 * @property string|null $type
 * @property string|null $order
 * @property string|null $description
 * @property string|null $category
 * @property string|null $app
 * @property int $status
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property string|null $deleted_at
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class SplashScreens extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'splash_screens';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['category', 'app'], 'string'],
            [['status', 'created_by', 'updated_by'], 'integer'],
            [['deleted_at', 'created_at', 'updated_at'], 'safe'],
            [['id'], 'string', 'max' => 36],
            [['name', 'photo', 'type', 'order', 'description'], 'string', 'max' => 191],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'photo' => 'Photo',
            'type' => 'Type',
            'order' => 'Order',
            'description' => 'Description',
            'category' => 'Category',
            'app' => 'App',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'deleted_at' => 'Deleted At',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }



    public function behaviors()

    {
        return [
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
            [
                'class' => BlameableBehavior::class,
            ],
        ];
    }


    public function beforeSave($insert)
    {
        if ($this->isNewRecord){
            $this->id = CustomHelper::getUuid();
        }
        return parent::beforeSave($insert);
    }

    public static function getStatusOptions()
    {
        return [
            '1' => 'active',
            '0' => 'Inactive',
    
        ];
    }
}
