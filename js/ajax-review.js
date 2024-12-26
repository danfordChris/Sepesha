function initializeReviewsButton() {
  $(".add-review").on("click", function () {
    var reviewId = $(this).data("review-id"); // Get the goal ID from the button's data attribute

    // Set the goal ID in the hidden input field inside the modal form
    $("#review-id-field").val(reviewId);

    // Check if the modal element exists
    if ($("#reviewModal").length) {
      // Open the modal
      $("#reviewModal").modal("show");
    } else {
      console.log("Modal element not found.");
    }
  });

  // Handle form submission when the modal's "Submit" button is clicked
  $("#submit-review").on("click", function () {
    var form = $("#review-form");

    $.ajax({
      url: ajaxAddReviewsUrl,
      type: "POST",
      data: form.serialize(), // Serialize the form data including the goal ID
      success: function () {
        // Close the modal
        $("#reviewModal").modal("hide");

        // Reload the PJAX container after successful addition
        $.pjax.reload({ container: "#review-container" });
      },
      error: function () {
        alert("Error adding action.");
      },
    });
  });
}

$(document).ready(function () {
  initializeReviewsButton();

  // Reinitialize event handlers after PJAX reloads
  $(document).on("pjax:end", function () {
    initializeReviewsButton();
  });
});
