let carousels = document.querySelectorAll('.glide');

carousels.forEach(function(element){

  if (element.classList.contains('glide-overflow-view')) {
    new Glide(element, {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      gap: 40,
      autoplay: 2500,
      hoverpause: true,
      breakpoints: {
        768: {
          perView: 1
        }
      },
      perTouch: 3
    }).mount()
  } else {
    new Glide(element, {type: 'carousel', autoplay: 2500, hoverpause: true}).mount()
  }
});
