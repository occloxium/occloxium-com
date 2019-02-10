$(document).ready(() => {
  $('main article').fadeOut();
  if(location.hash){
    $('main article' + location.hash).fadeIn(1000);
  } else {
    location.hash = '#about';
    $('main article#about').fadeIn(1000);
  }
  $(`footer a[for="${location.hash}"]`).addClass('is-active');
  $('footer nav').slideUp();
});

$('footer button').click(() => {
  $('footer').addClass('is-animating').removeClass('is-finished');
  if($('footer').hasClass('is-collapsed')){
    $('footer nav').slideDown(150);
    setTimeout(() => {
      $('footer').addClass('is-expanded').removeClass('is-collapsed');
    }, 0);
  } else {
    $('footer nav').slideUp(350);
    setTimeout(() => {
      $('footer').addClass('is-collapsed').removeClass('is-expanded');
    }, 350);
  }
    
  setTimeout(() => {
    $('footer').addClass('is-finished').removeClass('is-animating');
  }, 350);
});
$('footer a').click((e) => {
  $('footer a.is-active').removeClass('is-active');
  $('main article').fadeOut();
  $(e.target).addClass('is-active');
  setTimeout(() => {
    $('main article' + location.hash).fadeIn(1000);
    $('footer button').click();
  }, 50);
});
$('footer .overlay').click(() => {
  $('footer nav').slideUp(350);
  setTimeout(() => {
    $('footer').addClass('is-collapsed').removeClass('is-expanded');
  }, 350);
});