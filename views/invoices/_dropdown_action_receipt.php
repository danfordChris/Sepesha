<?php

use yii\helpers\Html;
use yii\bootstrap4\Dropdown;

/* @var $model \app\models\YourModelClass */

echo Dropdown::widget([
    'items' => [
        // [
        //     'label' => '<span class="fa fa-cog"></span> Attend',
        //     'visible'=>$model->stid<=$maxStage->stages,
        //     'url' => ['invoices/attend', 'vid' => $model->id],
        //     'encode' => false,
        // ],
        // [
        //     'label' => '<span class="fa fa-eye"></span>  View Invoice',
        //     'url' => ['invoices/view', 'vid' => $model->id],
        //     'encode' => false,

        // ],

        // [
        //     'label' => ' <span class="fa fa-list"></span>  Manage Receipt',
        //     'url' => ['invoices/receipt', 'vid' => $model->id],
        //     'encode' => false,
        // ],

        [
            'label' => ' <span class="fa fa-list"></span>  Print Receipt',
            'url' => ['invoices/receipt-print', 'vid' => $model->id],
            'encode' => false,
        ],

        // Add more actions as needed
    ],
]);