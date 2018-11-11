(() => {
  const openGallery = function(e){
    $('main').addClass('is-hidden');
    const url = $(this).prop('data-full-size-img');


  };
  const closeGallery = function(e){
    $('main').removeClass('is-hidden');
  };
  const nextImage = function(e){

  };
  const previousImage = function(e){

  };
  $('.gallery img').on('click', openGallery);
})();