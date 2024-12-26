<?php

namespace app\components;

use Yii;
use app\models\User;
use yii\base\Component;
use kartik\grid\GridView;

class ExportComponent extends Component
{

    public function getKalaExport($title)
    {

        $d = Yii::$app->db->createCommand("SELECT company_name,company_address,tel,phone,fax,company_email,weburl,logo FROM companies")->queryOne(false);
        $tbH = "<br /><table cellpadding=2  cellspacing=0 width=100% >";
        $tbH .= "<tr><td width=10%><img src='" . Yii::getAlias('@web') . '/uploads/images/' . $d[7] . "'  width='100' height='60' /></td>";
        $tbH .= "<td align=center><b><span style='font-size: 16px; color: #000000;'>$d[0]</span></b><br />$d[1]<br />$d[2]<br />Tel:&nbsp;$d[3],&nbsp;Fax:&nbsp;$d[4]<br />";
        $tbH .= "email:&nbsp;<u>$d[5]</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>$d[6]</u>";
        $tbH .= "</table>";
        $titleH = "<hr><span><h5 style='font-weight:bold;font-size: 20px;text-align:center'>" . $title . "</h5></span><br>";




        $export = [
            GridView::PDF => [
                'label' => Yii::t('app', 'PDF'),
                'icon' => 'far fa-file-pdf',
                'iconOptions' => ['class' => 'text-danger'],
                'showHeader' => true,
                'showPageSummary' => true,
                'showFooter' => false,
                'showCaption' => true,
                'filename' => Yii::t('app', $title),
                'alertMsg' => Yii::t('app', 'The PDF export file will be generated for download.'),
                'options' => ['title' => Yii::t('app', 'Portable Document Format')],
                'mime' => 'application/pdf',
                // 'cssStyles' => $cssStyles,
                'config' => [
                    'mode' => 'UTF-8',
                    'format' => 'A4-L',
                    'destination' => 'D',
                    'marginTop' => 20,
                    'marginBottom' => 20,
                    'cssInline' => '.kv-wrap{padding:20px}',
                    'methods' => [
                        //'SetWatermarkText' => ['NOT APPROVED'],
                        'SetHeader' => false,
                        'SetFooter' => ['Printed by:' . User::user() ?? '' . ' | Printed on: {DATE d/m/Y h:i:s} | Page {PAGENO}'],
                    ],
                    'options' => [
                        'title' => $title,
                        'subject' => Yii::t('app', 'Report'),
                        'keywords' => Yii::t('app', 'generate pdf'),
                    ],
                    'contentBefore' =>
                    // $tH ,
                    $titleH,
                    'contentAfter' => '',
                ],
            ],
            GridView::EXCEL => [
                'label' => 'EXCEL',
                'filename' => $title,
                'options' => ['title' => $title],
            ],
        ];

        return $export;
    }
}
