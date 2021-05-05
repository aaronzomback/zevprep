
$(document).ready(() => {
  $('.contact-box').on("click", () => {
    $('#contact-div').toggle();
      console.log('clicked');
  });

  $('#close-form').on("click", () => {
    $('#contact-div').hide();
  })


  // hamburger nav

  $('#hamburger-icon').on("click", () => {
    $('#hamburger-nav').toggle();
    $('#hamburger-icon').hide();
  });

  $('#ham-close').on("click", () => {
    $('#hamburger-nav').hide();
    $('#hamburger-icon').show();
  })
});
