<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap4\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap4\ActiveForm;
use yii\bootstrap4\Modal;
//use dosamigos\datepicker\DatePicker;


$this->title = 'Information Technology Unit / Systems Workflow';
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="site-contact">

    <div class="card">

        <div class="card-body">
            <table class='table table-bordered'>
                <tr>
                    <td><span style="font-size:16px;font-weight: bold;">Workflow Management : Workflow List</span></td>

                    <td align="right">
                        <?= Html::a(Yii::t('app', 'Register New Workflow'), ['new-wf'], ['class' => 'btn btn-success btn-sm text-white']) ?>
                    </td>
                </tr>
            </table>



            <?php

      echo  $dataProvider;

      ?>
        </div>
    </div>


</div>