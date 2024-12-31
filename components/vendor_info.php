<?php

use app\models\ClientInfo;
use app\models\DriverVehicleAssignment;
use yii\helpers\Html;

$data = ClientInfo::findOne(['id' => $id]);
$photo = $data->getVendorphoto();
if (!empty($photo)) {
    $frontURL = Yii::$app->params['frontURL'];
    $photoPath = $frontURL . '/uploads/profile_photos/' . $photo;
    $photo = $photoPath;
} else {
    //$photo = 'No image available';
}
?>

<div class="group">

<h6 class="bg-success card-header card-title " style="background-color:#1B5E20;height:2em;">Vendor Information

    </h6>

    <div class="table-responsive">
        <table class="table table-bordered table-sm table-hover">
            <tbody>
                <tr ">
                </tr>
                <tr>
                    <td><b>&nbsp;Firstname</b></td>
                    <td><?= $data->getFirstName() ?></td>
                    <td><b>Middlename</b></td>
                    <td><?= $data->getMiddleName() ?></td>
                    <td><b>Lastname</b></td>
                    <td><?= $data->getLastame()?></td>
                    <td rowspan=" 5">
                    <img src="<?= Html::encode($photo); ?> " width="190px" height="184px" alt="" border="1px">

                    <br>
                    <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                    </td>
                </tr>
                <tr>
                <td><b>&nbsp;Reference Number</b></td>
                <td><?= $data->getReferenceNumber() ?></td>
                    <td><b>Age</b></td>
                    <td><?= $data->createdUser->age ?? "" ?></td>
                    <td><b>Mobile</b></td>
                    <td><?= $data->getPhoneNumber()?></td>
                </tr>
                <tr>
                    <td><b>Email</b></td>
                    <td><?= $data->getEmail() ?> </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>