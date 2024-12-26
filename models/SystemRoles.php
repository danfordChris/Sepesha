<?php

namespace app\models;

use Yii;
use yii\base\Model;

class SystemRoles extends Model
{




	public static function isAdmin()
	{
		$id = Yii::$app->user->id;
		$conn = Yii::$app->db;
		$q = "SELECT COUNT(empid) FROM uroles ";
		$q .= "WHERE empid ='$id' AND rid = '1' AND DATEDIFF(CURDATE(),fdate) >= 0 AND DATEDIFF(tdate,CURDATE()) >= 0";
		$role = $conn->createCommand($q)->queryScalar();
		if ($role > 0) {
			return true;
		}
		return false;
	}


	public static function isOnWorkflow($wid, $stid)
	{
		$id = Yii::$app->user->id;
		$conn = Yii::$app->db;
		$q = "SELECT COUNT(empid) FROM wfroles ";
		$q .= "WHERE empid ='$id' AND wid = '$wid' AND stid = '$stid' AND DATEDIFF(CURDATE(),fdate) >= 0 AND DATEDIFF(tdate,CURDATE()) >= 0";
		$role = $conn->createCommand($q)->queryScalar();
		if ($role > 0) {
			return true;
		}
		return false;
	}
}
