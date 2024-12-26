<?php

namespace app\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;

/**
 * This is the model class for table "one_on_one_sessions".
 *
 * @property int $id
 * @property int|null $intake_id
 * @property string|null $objective
 * @property string|null $checkin
 * @property string|null $employee
 * @property string|null $plan_activity
 * @property string|null $checkout
 * @property string|null $tools_materials
 * @property string|null $session_details
 * @property string|null $session_description
 * @property string|null $issues_actions
 * @property int|null $is_safeguardsafety
 * @property string|null $safeguardsafetydetails
 * @property int|null $is_shared
 * @property string|null $shared_date
 * @property string|null $actions_taken
 * @property string|null $review_by
 * @property string|null $review_date
 * @property string $status
 * @property string|null $created_at
 * @property int|null $created_by
 * @property string|null $updated_at
 * @property int|null $updated_by
 */
class OneOnOneSession extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'one_on_one_sessions';
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

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['intake_id', 'is_safeguardsafety', 'is_shared', 'created_by', 'updated_by'], 'integer'],
            [['objective', 'checkin', 'plan_activity', 'checkout', 'tools_materials', 'session_details', 'session_description', 'issues_actions', 'safeguardsafetydetails', 'actions_taken'], 'string'],
            [['shared_date', 'review_by', 'refno', 'review_date', 'created_at', 'updated_at'], 'safe'],
            [['employee'], 'string', 'max' => 200],
            [['objective', 'checkin', 'employee', 'objective', 'plan_activity', 'intake_id', 'plan_date', 'session_details',], 'required'],
            [['status'], 'string', 'max' => 1],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'intake_id' => 'Intake ID',
            'objective' => 'Objective',
            'checkin' => 'Checkin',
            'employee' => 'Employee',
            'plan_activity' => 'Plan Activity',
            'checkout' => 'Checkout',
            'tools_materials' => 'Tools Materials',
            'session_details' => 'Session Details',
            'session_description' => 'Session Description',
            'issues_actions' => 'Issues Actions',
            'is_safeguardsafety' => 'Is Safeguardsafety',
            'safeguardsafetydetails' => 'Safeguardsafetydetails',
            'is_shared' => 'Is Shared',
            'shared_date' => 'Shared Date',
            'actions_taken' => 'Actions Taken',
            'review_by' => 'Review By',
            'review_date' => 'Review Date',
            'status' => 'Status',
            'created_at' => 'Created At',
            'created_by' => 'Created By',
            'updated_at' => 'Updated At',
            'updated_by' => 'Updated By',
        ];
    }
}
