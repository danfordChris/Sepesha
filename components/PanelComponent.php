<?php

namespace app\components;

use Yii;
use yii\helpers\Html;
use yii\base\Component;


class PanelComponent extends Component
{

    public function getKalaPanel($title, $panelColor)
    {
        $panelhead = 'card-header p-2 text-white ' . $panelColor;
        $panel = [
            'heading' => '<h5 style="font-family:calibri(body),sans-serif;" class="panel-title"><i class="fe fe-list"></i> ' . Html::encode($title) . ' </h5>',
            'headingOptions' => ['class' => $panelhead, 'style' => 'height:38px;'],
            'beforeOptions' => ['style' => 'height:48px;'],
            'type' => 'info',
            'before' =>
            ' <a class="btn btn-sm btn-info-gradient mb-2 accordion-toggle collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion11" href="#collapseFour1" aria-expanded="false"><i class="fa fa-search fa-1x me-2"></i>' . Yii::t('app', 'Search') . '</a>',
        ];


        return $panel;
    }
}