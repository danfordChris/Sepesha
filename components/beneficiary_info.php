<?php

use yii\helpers\Html;
use app\models\Intake;

// var_dump($dataIntake);
$intakeData = Intake::findOne(['id' => $dataIntake]);
$beneficiaryPhoto = $intakeData->beneficiary->photo ?? '';
if (!empty($beneficiaryPhoto)) {
    $photoPath = Yii::getAlias('@web') . '/uploads/beneficiary/photo/' . $beneficiaryPhoto;
    $beneficiaryPhotoPath = $photoPath;
} else {
    $defaultAvatar = $intakeData->beneficiary->gender === 'Male' ? 'manaavatar2.png' : 'Femaleavatar.jpg';
    $beneficiaryPhotoPath = Yii::getAlias('@web') . '/uploads/' . $defaultAvatar;
}

?>



<div class="group">


    <!-- <h6 style="font-weight:bold;" class="text-decoration-italic">Beneficiary Information</h6> -->
    <h6 class="bg-success card-header card-title " style="background-color:#1B5E20;height:2em;">Beneficiary Information

    </h6>

    <div class="table-responsive">
        <table class="table table-bordered table-sm table-hover">
            <tbody>
                <tr ">

                </tr>
                <tr>
                    <td><b>&nbsp;Firstname</b></td>
                    <td><?= $intakeData->beneficiary->fname ?? "" ?></td>
                    <td><b>Middlename</b></td>
                    <td><?= $intakeData->beneficiary->mname ?? "" ?></td>
                    <td><b>Lastname</b></td>
                    <td><?= $intakeData->beneficiary->sname ?? "" ?></td>
                    <td rowspan=" 5">
                    <img src="<?= $beneficiaryPhotoPath ?>" width="190px" height="184px" alt="" border="1px">

                    <br>
                    <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?= $intakeData->beneficiary->getFullName() ?></b>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <?= Html::a(
                        '<span type="" class="mx-1 button-icon mb-1 btn-block"><i class="fa fa-eye me-1"></i>View More</span>',
                        Yii::$app->urlManager->createUrl(['/beneficiary/view', 'token' => $intakeData->beneficiary->bkey]),
                        ['title' => Yii::t('yii', 'Edit'),]
                    ); ?>

                    </td>
                </tr>
                <tr>
                    <td><b>&nbsp;Gender</b></td>
                    <td><?= $intakeData->beneficiary->gender ?? "" ?></td>
                    <td><b>Age</b></td>
                    <td><?= $intakeData->beneficiary->realAge ?? "" ?></td>
                    <td><b>Mobile</b></td>
                    <td><?= $intakeData->beneficiary->phone ?? "" ?></td>
                </tr>
                <tr>
                    <td><b>&nbsp;CYP ID</b></td>
                    <td><?= $intakeData->beneficiary->registrationNumber ?? "" ?></td>
                    <td><b>Date of Intake </b></td>
                    <td><?= Yii::$app->formatter->asDate($intakeData->intake_date, 'php:d-M-Y');  ?></td>
                    <td><b>Beneficiary Type</b></td>
                    <td><?= $intakeData->beneficiary->category->sname ?? "" ?> </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>