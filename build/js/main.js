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


$(document).on('click', '.accordion__toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});

$(document).on('click', '.js-dropdown-opener', function () {
  $(this).closest('.avia__item').find('.dropdown').addClass('is-open');
  return false;
});

$(document).on('click', '.js-dropdown-closer', function () {
  $(this).closest('.dropdown').removeClass('is-open');
  return false;
});
