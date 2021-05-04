
$(document).ready(() => {
  $('.contact-box').on("click", () => {
    console.log('clicked');
    $('#contact-form').toggle();
  });
});
