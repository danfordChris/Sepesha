<?php

use app\models\DriverVehicleAssignment;
use yii\helpers\Html;
 
 
$data = DriverVehicleAssignment::findOne(['id' => $id]);
$photo = $data->createdUser->profile_photo ?? '';
?>

<div class="group">

<h6 class="bg-success card-header card-title " style="background-color:#1B5E20;height:2em;">Driver Information

    </h6>

    <div class="table-responsive">
        <table class="table table-bordered table-sm table-hover">
            <tbody>
                <tr ">
                </tr>
                <tr>
                    <td><b>&nbsp;Firstname</b></td>
                    <td><?= $data->createdUser->name ?? "" ?></td>
                    <td><b>Middlename</b></td>
                    <td><?= $data->createdUser->mname ?? "" ?></td>
                    <td><b>Lastname</b></td>
                    <td><?= $data->createdUser->sname ?? "" ?></td>
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
                <td><?= $data->createdUser->reference_number ?? "" ?></td>
                    <td><b>Age</b></td>
                    <td>
    <?php 
    if (!empty($data->createdUser->dob)) {
        $dobDate = new DateTime($data->createdUser->dob);
        $currentDate = new DateTime();
        $age = $dobDate->diff($currentDate)->y;
        echo $age . " years old";
    } else {
        echo "";
    }
    ?>
</td>

                    <td><b>Mobile</b></td>
                    <td><?= "+".$data->createdUser->phonecode . "". ($data->createdUser->phone ?? "") ?>
                    </td>
                </tr>



                <tr>
              
                    <td><b>Driver License Number </b></td>
                    <td><?= $data->createdUser->driver_license_number ?? "" ?></td>
                    <td><b>Email</b></td>
                    <td><?= $data->createdUser->email ?? "" ?> </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>