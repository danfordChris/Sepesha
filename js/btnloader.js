$(function () {
  $("form").on("submit", function () {
    var submitButton = $(this).find(":submit");
    var buttonText = submitButton.html();
    var loadingIcon = '<span class="fa fa-refresh fa-refresh-animate"></span>';

    // Disable the submit button and change its content to show loading icon and text
    submitButton.prop("disabled", true).html(loadingIcon + " Loading...");

    // Ensure that the button is re-enabled after a timeout (for demonstration purposes)
    setTimeout(function () {
      submitButton.prop("disabled", false).html(buttonText);
    }, 5000); // Adjust the timeout as needed
  });
});
