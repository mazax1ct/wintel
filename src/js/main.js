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


//открытие попапа
$(document).on('click', '.js-popup-opener', function () {
  var popup = $(this).attr('data-popup');

  $('body').addClass('popup-is-open');

  $('.popups-container').fadeIn(300);

  $('.popup-shade[data-popup="'+popup+'"]').fadeIn(300, function () {
    $(this).find('.popup').addClass('is-open');
  }).css('display', 'flex');

  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-closer', function () {
  $(this).closest('.popup').removeClass('is-open');

  $(this).closest('.popup-shade').fadeOut(300, function () {
    if(!$('.popup-shade').is(':visible')) {
      $('.popups-container').fadeOut(300);
    }
  });

  $('body').removeClass('popup-is-open');

  return false;
});

$(document).on('click', '.popup-shade', function (evt) {
  if (!$('.popup').is(evt.target) && $('.popup').has(evt.target).length === 0) {
    $(this).find('.popup').removeClass('is-open');

    $(this).closest('.popup-shade').fadeOut(300, function () {
      if(!$('.popup-shade').is(':visible')) {
        $('.popups-container').fadeOut(300);
      }
    });

    $('body').removeClass('popup-is-open');
  }
});
