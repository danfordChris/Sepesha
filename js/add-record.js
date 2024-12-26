$(document).ready(function() {
    // Attach a click event to the DataTables rows
    $('#datatabler').on('click', 'tr', function() {
        var intid = $(this).data('key'); // 'intid' is a key for the row
        // Set the value of the hidden input field
        $('#courseintake').val(intid);
    });
});

function loadUpdateForm(id) {
    var targetId = id; // Get the target ID from the button's data attribute
    $.ajax({
        url: ajaxViewPlanUrl,
        type: 'GET',
        data: { id: id },
        success: function(data) {
            console.log('her',targetId);
            $('#modalContents').html(data); // Load the form into the modal content
            $('#rcamodal2').modal('show'); // Show the modal
        }
    });
};


function initializeGoalButton() {
    $('.add-record-btn').on('click', function() {
        var targetId = $(this).data('target-id'); // Get the target ID from the button's data attribute
        console.log('Plan ID:', targetId);

        // Set the target ID in the hidden input field inside the modal form
        $('#target-id-field').val(targetId);

        // Open the modal
        $('#goalModal').modal('show');
    });

    // Handle form submission when the modal's "Submit" button is clicked
    $('#submit-goal').on('click', function() {
        var form = $('#goal-form');

        $.ajax({
            url: ajaxAddGoalUrl,
            type: 'POST',
            data: form.serialize(), // Serialize the form data including the target ID
            success: function() {
                // Close the modal
                $('#goalModal').modal('hide');

                // Reload the PJAX container after successful addition
                $.pjax.reload({container: '#pjax-container'});
            },
            error: function() {
                alert('Error adding goal.');
            }
        });
    });
}

$(document).ready(function() {
    // initializeGoalButton(); // Initialize event handlers on page load
    // loadUpdateForm(id);

    // Reinitialize event handlers after PJAX reloads
    $(document).on('pjax:end', function() {
        initializeGoalButton();
    });
});