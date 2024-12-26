<?php

namespace app\widgets;

use Yii;
use yii\base\Widget;
use yii\helpers\Html;

class NotiflixToast extends Widget
{
    public $type;
    public $message;

    public function init()
    {
        parent::init();

        // Register Notiflix library and custom script
        $this->registerAssets();
    }


    public function run()
    {
        $session = Yii::$app->session;
        $flashes = $session->getAllFlashes();

        foreach ($flashes as $type => $messages) {
            foreach ((array) $messages as $message) {
                $this->renderToast($type, $message);
            }
        }
    }


    private function renderToast($type, $message)
    {
        $options = $this->getToastOptions();
        $script = <<<JS
Notiflix.Notify.$type('$message', $options);
JS;

        $this->view->registerJs($script);
    }

    private function getToastOptions()
    {
        // You can customize options here as per Notiflix documentation
        return '{}';
    }

    private function registerAssets()
    {
        // Replace 'notiflix.min.js' with the actual path to Notiflix library
        $this->view->registerJsFile('@web/js/notiflix-3.2.7.min.js', ['depends' => [\yii\web\JqueryAsset::class]]);

        // Replace 'notiflix.min.css' with the actual path to Notiflix CSS file
        $this->view->registerCssFile('@web/css/notiflix-3.2.7.min.css');
    }
}