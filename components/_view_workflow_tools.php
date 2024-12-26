<?php
function activeLink($controllerId, $actionId)
{
    $activeIntake = (Yii::$app->controller->id == $controllerId && Yii::$app->controller->action->id == $actionId) ? 'active' : '';
    return  $activeIntake;
}                         ?>
<div class="card">
    <div class="body">
        <div id="mail-nav">
            <h5 class="b-b p-10 text-strong"><?= $lazima ? 'Mandatory Case Tools' : 'General Tools' ?></h5>
            <ul class="" id="mail-folders">
                <?php foreach ($toolsData as $tool): ?>

                    <li class="<?= activeLink($tool->casetoolName->ctrl, $tool->casetoolName->action) ?>">
                        <a href="<?= Yii::$app->urlManager->createUrl([$tool->casetoolName->ctrl . '/' . $tool->casetoolName->action, 'tool' => $tool->id, 'ref' => $refno, 'modelClass' => get_class($tool)]) ?>"
                            title="Sent"> <i class="fas fa-file fas-2x"></i> <?= $tool->casetoolName->name  ?>
                            <?php if ($tool->mandatory == 1) {
                                echo '<span class="text-danger">*</span>';
                            } else {
                                echo '';
                            } ?></a>
                    </li>
                <?php endforeach ?>
            </ul>

        </div>
    </div>
</div>