<?php

namespace app\models;

use Yii;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "districts".
 *
 * @property int $did
 * @property string $name
 * @property int|null $rid
 * @property int|null $cid
 * @property int $status
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 */
class District extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'districts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['rid', 'cid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 250],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'did' => 'Did',
            'name' => 'Name',
            'rid' => 'Region',
            'cid' => 'Cid',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
        ];
    }


        public static function getRegions()
    {
        $customers = Regions::find()->all();
        $result = ArrayHelper::map($customers, 'rid', 'name');
        return $result;
    }


    public function getRegion()
    {
        return $this->hasOne(Regions::class, ['rid' => 'rid']);
    }
}
