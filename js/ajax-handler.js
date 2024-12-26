function initializeGoalButton() {
  $(".add-goal-btn").on("click", function () {
    var targetId = $(this).data("target-id"); // Get the target ID from the button's data attribute

    // Set the target ID in the hidden input field inside the modal form
    $("#target-id-field").val(targetId);

    // Open the modal
    $("#goalModal").modal("show");
  });

  // Handle form submission when the modal's "Submit" button is clicked
  $("#submit-goal").on("click", function () {
    var form = $("#goal-form");

    $.ajax({
      url: ajaxAddGoalUrl,
      type: "POST",
      data: form.serialize(), // Serialize the form data including the target ID
      success: function () {
        // Close the modal
        $("#goalModal").modal("hide");

        // Reload the PJAX container after successful addition
        $.pjax.reload({ container: "#pjax-container" });
      },
      error: function () {
        alert("Error adding goal.");
      },
    });
  });
}

$(document).ready(function () {
  initializeGoalButton(); // Initialize event handlers on page load

  // Reinitialize event handlers after PJAX reloads
  $(document).on("pjax:end", function () {
    initializeGoalButton();
  });
});
