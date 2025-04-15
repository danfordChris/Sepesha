<?php

namespace app\components;

use yii\base\Component;
use app\models\Settings;

class SettingsComponent extends Component
{
    private $_settings;

    public function init()
    {
        parent::init();
        $this->_settings = Settings::config();
    }

    public function get($key)
    {
        return $this->_settings->$key ?? null;
    }
}