<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use yii\helpers\Html;
use kartik\form\ActiveForm;
use yii\data\ActiveDataProvider;
use app\models\User;
use kartik\grid\GridView;
use yii\widgets\Pjax;
use kartik\select2\Select2;
use app\models\Offices;
use app\models\SignupForm;
use app\models\SystemRoles;
//use fedemotta\datatables\DataTables;
use yii\helpers\ArrayHelper;
use reine\datatables\DataTables;
use yii\widgets\ListView;

$this->title = 'User Registration';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="card mg-b-20" id="tabs-style3">
    <div class="card-body">
        <div class="main-content-label mg-b-5">
            <h4><?= Html::encode($this->title) ?></h4>
        </div>
        <p class="mg-b-20">User management and authentication module , here you can ,edit ,active,disable and change
            password of users.
        </p>
        <div class="text-wrap">
            <div class="example">
                <div class="panel panel-primary tabs-style-3">
                    <div class="tab-menu-heading">
                        <div class="tabs-menu ">
                            <!-- Tabs -->
                            <ul class="nav panel-tabs">
                                <li class=""><a href="#tab11" class="btn btn-outline-info" data-bs-toggle="tab"><i
                                            class="fa fa-user me-1"></i> Manage Users</a></li>
                                &nbsp;
                                <!-- <li><a href="#tab12" data-bs-toggle="tab" class="btn btn-outline-success"><i class="fa fa-plus me-1"></i> Add User</a></li> -->

                            </ul>
                        </div>
                    </div>
                    <div class="panel-body tabs-menu-body">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab11">
                                <?= $this->render('_user_list',['dataProvider'=>$dataProvider,'searchModel'=>$searchModel]) ?>
                            </div>
                            <div class="tab-pane" id="tab12">
                                <?= $this->render('_user_reg_form',['model'=>$model]) ?>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>