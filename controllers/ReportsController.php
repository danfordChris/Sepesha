<?php

namespace app\controllers;

use Yii;
use app\models\User;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\NotFoundHttpException;
use yii\web\Response;

class ReportsController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                        // 'matchCallback' => function ($rule, $action) {
                        //     return  User::auth('admin');
                        // }
                    ],

                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }



    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionIdentifiedGraph()
    {
        return $this->render('identified-graph');
    }

    public function actionIdentifiedGraphPage()
    {
        return $this->render('identified-graph-page');
    }

    public function actionEnrollmentGraph()
    {
        return $this->render('enrollment-graph');
    }

    public function actionEnrollmentGraphPage()
    {
        return $this->render('enrollment-graph-page');
    }

    public function actionGenderAgeGraph()
    {
        return $this->render('gender-age-graph');
    }

    public function actionGenderAgeGraphPage()
    {
        return $this->render('gender-age-graph-page');
    }

    public function actionRegionTanzania()
    {
        return $this->render('region-tanzania');
    }


    public function actionEnrollmentChart()
    {
        $sqldata = "SELECT COUNT(id) as counts, services FROM `intakes` GROUP BY services";
        $data = Yii::$app->db->createCommand($sqldata)->queryAll();

        $chartData = [];
        foreach ($data as $row) {
            if ($row['services'] == 1) {
                $r =  'Family Intervention';
            } elseif ($row['services'] == 3) {
                $r =  'Transfer to other Service Provider';
            } elseif ($row['services'] == 4) {
                $r =  'Youth Enrollment (Link with Association)';
            } elseif ($row['services'] == 5) {
                $r =  'Youth Enrollment';
            } elseif ($row['services'] == 11) {
                $r =  'Act Parent';
            } elseif ($row['services'] == 100) {
                $r =  'Remain on Street';
            }
            $chartData[] = [

                'label' => $r,
                'y' => (int) $row['counts']
            ];
        }

        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

        return $chartData;
    }

    public function actionIdentifiedChart()
    {
        $sqldata = "SELECT
    COUNT(*) AS beneficiaries,
    CASE
        WHEN how_identified = 19 THEN 'Street Outreach'
        WHEN how_identified = 28 THEN 'Child Support Desk'
        WHEN how_identified = 34 THEN 'Existing Beneficiary'
        WHEN how_identified IN (14,15,16,17,18,20) THEN 'Stakeholders'
        ELSE 'Others'
    END AS identified_category
FROM beneficiaries
GROUP BY identified_category
ORDER BY identified_category";
        $data = Yii::$app->db->createCommand($sqldata)->queryAll();

        $chartData = [];
        foreach ($data as $row) {
            $chartData[] = [

                'label' => $row['identified_category'],
                'y' => (int) $row['beneficiaries']
            ];
        }

        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

        return $chartData;
    }

    public function actionBeneficiaryData()
    {
        $query = "SELECT region, COUNT(*) as count FROM beneficiaries GROUP BY region";
        $data = Yii::$app->db->createCommand($query)->queryAll();

        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        return $data;
    }

    public function actionGenderAgeChart()
    {
        $sql = "
        SELECT
            gender,
            CASE
                WHEN reg_age < 7 THEN 'below 7 years'
                WHEN reg_age BETWEEN 8 and 14 THEN '8-14 years'
                WHEN reg_age BETWEEN 15 and 16 THEN '15-16 years'
                WHEN reg_age BETWEEN 17 and 18 THEN '17-18 years'
            END AS age_category,
            COUNT(*) AS beneficiaries
        FROM beneficiaries
        GROUP BY gender, age_category
        ORDER BY age_category desc, gender;
    ";

        $data = Yii::$app->db->createCommand($sql)->queryAll();

        $chartData = [];
        $ageCategories = [];
        $totalMale = 0;
        $totalFemale = 0;
        $totalOverall = 0;

        foreach ($data as $row) {
            $ageCategory = $row['age_category'];

            if (!isset($chartData[$ageCategory])) {
                $chartData[$ageCategory] = [
                    'Male' => 0,
                    'Female' => 0,
                    'Total' => 0,
                ];
                $ageCategories[] = $ageCategory;
            }

            if ($row['gender'] == 'Male') {
                $chartData[$ageCategory]['Male'] = (int)$row['beneficiaries'];
                $totalMale += (int)$row['beneficiaries'];
            } elseif ($row['gender'] == 'Female') {
                $chartData[$ageCategory]['Female'] = (int)$row['beneficiaries'];
                $totalFemale += (int)$row['beneficiaries'];
            }

            $chartData[$ageCategory]['Total'] += (int)$row['beneficiaries'];
        }

        $totalOverall = $totalMale + $totalFemale;

        $maleData = [];
        $femaleData = [];
        $totalData = [];
        $overallData = [
            ['label' => 'Total', 'y' => $totalMale, 'gender' => 'Male'],
            ['label' => 'Total', 'y' => $totalFemale, 'gender' => 'Female'],
            ['label' => 'Total', 'y' => $totalOverall, 'gender' => 'Overall']
        ];

        foreach ($ageCategories as $category) {
            $maleData[] = ['label' => $category, 'y' => $chartData[$category]['Male']];
            $femaleData[] = ['label' => $category, 'y' => $chartData[$category]['Female']];
            $totalData[] = ['label' => $category, 'y' => $chartData[$category]['Total']];
        }

        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        return [
            'maleData' => $maleData,
            'femaleData' => $femaleData,
            'totalData' => $totalData,
            'overallData' => $overallData
        ];
    }
}
