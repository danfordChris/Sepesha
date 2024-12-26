<?php

use yii\helpers\Html;
use yii\bootstrap4\Dropdown;

/* @var $model \app\models\YourModelClass */

echo Dropdown::widget([
    'items' => [
        [
            'label' => '<span class="fa fa-cog"></span> Attend',
            'visible'=>$model->stid<=$maxStage->stages,
            'url' => ['invoices/attend', 'vid' => $model->vid],
            'encode' => false,
        ],
        [
            'label' => '<span class="fa fa-eye"></span>  View Invoice',
            'url' => ['invoices/view', 'vid' => $model->vid],
            'encode' => false,

        ],

        [
            'label' => ' <span class="fa fa-list"></span>  Manage Receipt',
            'visible'=> $model->status=='A',
            'url' => ['invoices/receipt', 'vid' => $model->vid],
            'encode' => false,
        ],
        // Add more actions as needed
    ],
]);
