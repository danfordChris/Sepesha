<?php

use yii\helpers\Url;

$URL = Yii::getAlias('@app')
?>

<div class="group1">
    <!-- <h6 style="font-weight:bold;" class="text-decoration-italic">Approvals</h6> -->

    <h6 class="card-header bg-danger text-white">
        <i class="far fa-comment "></i> &nbsp;Approvals
    </h6>

    <div class=" table-responsive">
        <table id=" " class="table table-sm table-bordered table-stripped table-condensed" style="font-size: small;">
            <thead class="thead-light">
                <tr>
                    <!-- <th>S/N</th> -->
                    <th>STAGE</th>
                    <th>STATUS</th>
                    <th>COMMENT</th>
                    <th>DONE BY</th>
                    <th>DONE ON</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($approvalsWf as $y => $appV) : ?>
                <tr>
                    <!-- <td><?= $y + 1 . '.'; ?></td> -->
                    <td><?= $appV->wfsname; ?></td>
                    <td><?= $appV->wfstatus ?></td>
                    <td><?= $appV->comments; ?>
                        <?php if ($appV->attachment) : ?>
                        <p>
                            <a class="badge badge-secondary text-white bx bx-download" style="font-size: 10px;"
                                target="_blank" title="<?= $appV->wfsname ?>" href="<?= $appV['attachment'] ?>">
                                <span class="material-icons" style="font-size: 10px;">
                                    attach_file
                                </span>
                                View attachment</a>
                        </p>
                        <?php endif ?>
                    </td>
                    <td><?= $appV->created->full_name  ?>
                    </td>
                    <td><?= $appV->created_at ?>

                    </td>

                </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>

<div id="documentModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Document</h4>
            </div>
            <div class="modal-body" id="documentModalBody">
                <!-- Document content will be loaded here -->
            </div>
        </div>
    </div>
</div>


<?php


$script = <<< JS
let url='viwapprovaldoc';
$(document).ready(function() {
$('#viewDocumentBtn').click(function() {
var documentId = $(this).data('document-id');
console.log(documentId)
$.ajax({
url: url,
type: 'POST',
data: {
documentId: documentId
},
//dataType: 'json', // Change to 'html' if you're expecting HTML response
success: function(response) {
    console.log(response)

                    // Display the document content in modal or embedded HTML tag
                    $('#documentModalBody').html(response);
                    $('#documentModal').show();

},
error: function() {
alert('Error occurred while loading the document.');
}
});
});

// Close the modal when the close button is clicked

});
JS;
$this->registerJs($script);
?>