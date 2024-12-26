<?php

namespace app\modules\credit\models;

use Yii;
use yii\db\Expression;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
/**
 * This is the model class for table "crdtransaction".
 *
 * @property string $crdid
 * @property string $cdate
 * @property string $camount
 * @property string $damount
 * @property int $oid
 * @property int $cid
 * @property string $descr
 * @property string $ctype
 * @property string $refno
 * @property string $recptno
 * @property int $status
 * @property int $created_by
 * @property int $updated_by
 * @property string $created_at
 * @property string $updated_at
 */
class PayControl extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'crdtransaction';
    }
    public function behaviors()
    {
        return [
            BlameableBehavior::class,
            [
                'class' => TimestampBehavior::class,
                'value' => new Expression('NOW()'),
            ],
        ];
    }
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['crdid', 'cdate', 'cid', 'ctype','damount','descr'], 'required'],
            [['cdate', 'created_at', 'updated_at'], 'safe'],
            [['damount'], 'number','min'=>1],
            [['oid', 'cid', 'status', 'created_by', 'updated_by'], 'integer'],
            [['descr'], 'string'],
            [['crdid'], 'string', 'max' => 100],
            [['ctype'], 'string', 'max' => 5],
            [['refno', 'recptno'], 'string', 'max' => 200],
            [['crdid'], 'unique'],
            [['cdate'],'date','format'=>'php:Y-m-d']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'crdid' => 'Crdid',
            'cdate' => 'Tarehe',
            'camount' => 'Kiasi alichopoka(Amount)',
            'damount' => 'Kiasi alicholipa(Amount)',
            'oid' => 'Office',
            'cid' => 'Customer',
            'descr' => 'Description',
            'ctype' => 'type',
            'refno' => 'Refno',
            'recptno' => 'Recptno',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
