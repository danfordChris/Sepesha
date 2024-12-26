<?php

namespace app\components;

use Yii;
use yii\base\Component;

class ToastAlert extends Component
{
    public function showAlerts()
    {
        $session = Yii::$app->session;
        $flashes = $session->getAllFlashes();
        
        if (is_iterable($flashes)) {
            foreach ($flashes as $type => $messages) {
                foreach ((array) $messages as $message) {
                    $this->renderToast($type, $message);
                }
            }
        }
    }

    private function renderToast($type, $message)
    {
        $options = $this->getToastOptions($type);
        
        $toastScript = "toastr.$type('$message', '', " . json_encode($options) . ");";
        
        Yii::$app->view->registerJs($toastScript);
    }

    private function getToastOptions($type)
    {
        $options = [];
        switch ($type) {
            case 'success':
                $options['toastClass'] = 'toast-success';
                break;
            case 'error':
                $options['toastClass'] = 'toast-error';
                break;
            case 'warning':
                $options['toastClass'] = 'toast-warning';
                break;
            case 'info':
                $options['toastClass'] = 'toast-info';
                break;
            default:
                // Handle unknown type, maybe throw an exception or provide a default option
                break;
        }
        return $options;
    }
}