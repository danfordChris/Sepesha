<?php

namespace app\widgets;

use Yii;
use yii\base\Widget;
use yii\helpers\Url;


class  ReportHeaderWidget extends Widget
{
    public $title = null;
    public function run()
    {

        $d = Yii::$app->db->createCommand("SELECT company_name,company_address,tel,phone,fax,company_email,weburl,logo FROM companies")->queryOne(false);
        // $logo = Url::to('@web/uploads/' . $d[7], true);
        $logo = Yii::getAlias('@web') . '/uploads/' . $d[7];
        $tbH = "<br /><table   width=100% > <tr>";

        $tbH .= "<td  width=90% align=center><b><span style='color: #000000;'>$d[0]</span></b><br />$d[1]<br />$d[2]<br />Tel:&nbsp;$d[3],&nbsp;Fax:&nbsp;$d[4] , ";
        $tbH .= "Email:&nbsp;<u>$d[5]</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>$d[6]</u> </td>";
        $tbH .= "<td width=10%><img src='" . $logo . "'  width='20%' style='text-align:center'/></td>";
        $tbH .= "</tr></table>";
        $titleH = "<hr><span><h5 style='font-weight:bold;text-align:center'> <u>" . $this->title . "</u></h5></span><br>";
        echo $tbH . $titleH;
    }
}
