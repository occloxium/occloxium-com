let $ = window.jQuery;

$(() => {
  let openGallery = function (e) {
    $(this).addClass('is-open');
    $('main').addClass('is-hidden');
    $('.gallery-frame').removeClass('is-hidden');
    let url = $(this).attr('data-full-size-img');

    $('.gallery-frame .frame .img').css('background-image', `url(${url})`);
    $('.gallery-frame .actions .download').attr('href', url);
  };
  let closeGallery = function (e) {
    $('.is-open').removeClass('is-open');
    $('.gallery-frame .frame img').detach();
    $('main').removeClass('is-hidden');
    $('.gallery-frame').addClass('is-hidden');
  };
  let nextImage = function (e) {
    let o = $('.is-open');
    let next = o.removeClass('is-open').parent().next();
    if(next.length) {
      next.children('img').click();
    } else {
      // wrap around
      let parents = o.parent().parent().children();
      $(parents[0]).children('img').click();
    }
  };
  let previousImage = function (e) {
    let o = $('.is-open');
    let prev = o.removeClass('is-open').parent().prev();
    if(prev.length) {
      prev.children('img').click();
    } else {
      // wrap around
      let parents = o.parent().parent().children();
      $(parents[parents.length - 1]).children('img').click();
    }
  };

  $('.gallery img').on('click', openGallery);
  $('.gallery-frame .close').on('click', closeGallery);
  $('.gallery-frame .next').on('click', nextImage);
  $('.gallery-frame .prev').on('click', previousImage);
});