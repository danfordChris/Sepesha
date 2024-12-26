


<?= $this->render('view', [
         'creditsRevenue' =>$creditsRevenue,
         'debitsReceivables'=>$debitsReceivables,
         'approvals'=>$approvals,
         'model' => $model,

    ]) ?>

<?= $this->render('_form_approval', [
        'modelApproval'=>$modelApproval,
        'model' => $model,

    ]) ?>
