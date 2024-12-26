function initializeActionsButton() {
  $(".add-reys").on("click", function () {
    var goalId = $(this).data("goals-id"); // Get the goal ID from the button's data attribute

    // Set the goal ID in the hidden input field inside the modal form
    $("#goal-id-field").val(goalId);

    // Check if the modal element exists
    if ($("#reysModal").length) {
      // Open the modal
      $("#reysModal").modal("show");
    } else {
      console.log("Modal element not found.");
    }
  });

  // Handle form submission when the modal's "Submit" button is clicked
  $("#submit-action").on("click", function () {
    var form = $("#actions-form");

    $.ajax({
      url: ajaxAddActionUrl,
      type: "POST",
      data: form.serialize(), // Serialize the form data including the goal ID
      success: function () {
        // Close the modal
        $("#reysModal").modal("hide");

        // Reload the PJAX container after successful addition
        $.pjax.reload({ container: "#actions-container" });
      },
      error: function () {
        alert("Error adding action.");
      },
    });
  });
}

$(document).ready(function () {
  initializeActionsButton();

  // Reinitialize event handlers after PJAX reloads
  $(document).on("pjax:end", function () {
    initializeActionsButton();
  });
});
