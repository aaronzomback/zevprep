
$(document).ready(() => {
  $('.contact-box').on("click", () => {
    $('#contact-div').toggle();
      console.log('clicked');
  });

  $('#close-form').on("click", () => {
    $('#contact-div').hide();
  })
});
