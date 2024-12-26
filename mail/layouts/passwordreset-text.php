<?php

/** 
 * @var yii\web\View $this view component instance
 * @var yii\mail\BaseMessage $message the message being composed
 * @var string $content main view render result
 */

$this->beginPage();
$this->beginBody();
// echo $content;
?>
Hello <?= $user->username ?>,

Click the following link to reset your password at <?=Yii::$app->name ?>:
<?= Yii::$app->urlManager->createAbsoluteUrl(['site/reset-password', 'token' => $user->password_reset_token]) ?>
<?php
$this->endBody();
$this->endPage();
?>