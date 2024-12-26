<?php

namespace app\controllers;

use app\models\User;
use Yii;
use yii\web\Response;
use yii\web\Controller;
use yii\helpers\FileHelper;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class DatabaseController extends Controller
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
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('admin');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'create', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('create_database');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view', 'update'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return   User::auth('edit_database');
                        }
                    ],
                    [
                        'allow' => true,
                        'actions' => ['index', 'view'],
                        'roles' => ['@'],
                        'matchCallback' => function ($rule, $action) {
                            return  User::auth('view_database');
                        }
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

    public function actionExport()
    {
        //Yii::$app->response->format = Response::FORMAT_RAW;
        $content = $this->exportDatabase();
        //  $timed = date('Y-m-d_H:i:s');
        // Yii::$app->response->headers->add('Content-Type', 'text/sql');
        // Yii::$app->response->headers->add('Content-Disposition', 'attachment; filename="' . $timed . '_data_backup.sql"');

        return $content;
    }

    protected function exportDatabase()
    {

        $db = Yii::$app->db;
        $dsn = $db->dsn;
        $username = $db->username;
        $password = $db->password;

        // Extract database name and host from DSN
        preg_match('/dbname=([^;]*)/', $dsn, $matchesDb);
        preg_match('/host=([^;]*)/', $dsn, $matchesHost);
        $dbName = $matchesDb[1];
        $dbHost = isset($matchesHost[1]) ? $matchesHost[1] : 'localhost';

        // Ensure the directory exists
        $exportPath = Yii::getAlias('@webroot/exports');
        FileHelper::createDirectory($exportPath, 0777);

        // Get the path for the dump file
        $filePath = "{$exportPath}/{$dbName}_backup_" . date('Y-m-d_H-i-s') . ".sql";

        // Command to dump the database
        $command = "mysqldump --user={$username} --password='{$password}' --host={$dbHost} {$dbName} > {$filePath}";

        // Execute the command and capture the output and status
        exec($command . ' 2>&1', $output, $returnVar);

        if ($returnVar !== 0) {
            Yii::$app->session->setFlash('error', 'Database export failed: ' . implode("\n", $output));
            return $this->refresh();
        }

        Yii::$app->session->setFlash('success', 'Database exported successfully.');
        return Yii::$app->response->sendFile($filePath);
    }
}
