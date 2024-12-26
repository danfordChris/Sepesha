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
<p>Hello <?= $user->username ?>,</p>
<p>Thank you for registering. Please click the following link to confirm your email at CATC Portal:</p>
<p><?= Yii::$app->urlManager->createAbsoluteUrl(['site/confirmemail', 'token' => $user->confirmation_token]) ?></p>
<?php
$this->endBody();
$this->endPage();
?>