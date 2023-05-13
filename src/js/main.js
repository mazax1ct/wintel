$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.main-menu').addClass('is-open');
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('overflow');
  $('.main-menu').removeClass('is-open');
  return false;
});
