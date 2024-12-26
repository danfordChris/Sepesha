<?php

use yii\helpers\Html;

/** @var \yii\web\View $this view component instance */
/** @var \yii\mail\MessageInterface $message the message being composed */
/** @var string $content main view render result */
?>
<?php $this->beginPage() ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=<?= Yii::$app->charset ?>" />
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>

<body>
    <?php $this->beginBody() ?>
    <?php $fullname = $user->first_name.' '.$user->last_name;
    ?>
    <p>Hello <?= ucwords(strtolower($fullname)) ?> with Username: <?= $user->username ?> and Password:
        <strong><?= $randompassword ?><strong> ,</p>
    <p>You have been preliminary registered for <strong><?= $coursename ?></strong> by
        <strong><?= $sponsorname ?></strong> at CATC Portal.</p>
    <p>Please click the following link to confirm your email:</p>
    <p><?= Yii::$app->urlManager->createAbsoluteUrl(['site/confirmemail', 'token' => $user->confirmation_token]) ?></p>
    <?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>