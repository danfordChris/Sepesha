<?php

use app\models\DriverVehicleAssignment;
use app\models\Vehicle;
use yii\helpers\Html;


$data = Vehicle::findOne(['id' => $id]);
$photo = $data->driver->profile_photo ?? '';
?>

<div class="group">

    <h6 class="bg-danger text-white card-header card-title"> <i class="material-icons">person_outline</i>Driver
        Information

    </h6>

    <div class="table-responsive">
        <table class="table table-bordered table-sm table-hover">
            <tbody>
                <tr ">
                </tr>
                <tr>
                    <td><b>&nbsp;Firstname</b></td>
                    <td><?= $data->driver->name ?? "" ?></td>
                    <td><b>Middlename</b></td>
                    <td><?= $data->driver->mname ?? "" ?></td>
                    <td><b>Lastname</b></td>
                    <td><?= $data->driver->sname ?? "" ?></td>
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
                    <td><?= $data->driver->reference_number ?? "" ?></td>
                    <td><b>Age</b></td>
                    <td>
                        <?php
                        if (!empty($data->driver->dob)) {
                            $dobDate = new DateTime($data->driver->dob);
                            $currentDate = new DateTime();
                            $age = $dobDate->diff($currentDate)->y;
                            echo $age . " years old";
                        } else {
                            echo "";
                        }
                        ?>
                    </td>

                    <td><b>Mobile</b></td>
                    <td><?= "+" . $data->driver->phonecode . "" . ($data->driver->phone ?? "") ?>
                    </td>
                </tr>



                <tr>

                    <td><b>Driver License Number </b></td>
                    <td><?= $data->driver->driver_license_number ?? "" ?></td>
                    <td><b>Email</b></td>
                    <td><?= $data->driver->email ?? "" ?> </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>