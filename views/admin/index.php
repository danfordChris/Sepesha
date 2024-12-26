<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap4\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap4\ActiveForm;
use yii\bootstrap4\Modal;
//use dosamigos\datepicker\DatePicker;


$this->title = 'ADMIN MANAGEMENT';
$this->params['breadcrumbs'][] = $this->title;
?>


<div class="site-contact">

    <div class="card">

        <div class="card-body">
            <!-- <table class='table table-bordered'>
                <tr>
                    <td><span style="font-size:16px;font-weight: bold;">RCA</span></td>
                    <td align="right">
                        <?= Html::a(Yii::t('app', 'Create New Quote'), ['new-quotation'], ['class' => 'btn btn-success btn-sm']) ?>
                    </td>
                </tr>
            </table> -->


            <?php

            echo  $dataProvider;

            ?>
        </div>
    </div>


</div>
<?php
Modal::begin([

    'title' => 'McJuro Client Quotation',
    'id' => 'modal',
    'size' => 'modal-lg',

    //keeps from closing modal with esc key or by clicking out of the modal.
    // user must click cancel or X to close
    'clientOptions' => ['backdrop' => 'static', 'keyboard' => false, 'z-index' => -1]
]);
echo "<div id='modalContent'></div>";
Modal::end();
?>
<?php
$this->registerJsFile(
    '@web/js/popup.js',
    ['depends' => [\yii\web\JqueryAsset::class]]
);
?>