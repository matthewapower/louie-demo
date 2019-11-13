$('#dropdownTrigger').click(function(e) {
  let dropdown = $('.dropdown');

  e.preventDefault();
  dropdown.toggleClass('active');
});

$(document).mouseup(function (e) {
  let menus = ['.dropdown', '.navbar-trigger', '.navbar'];

  for(i = 0; i <= menus.length; i++) {
    if (!$(menus[i]).is(e.target) && $(menus[i]).has(e.target).length === 0) {
       $(menus[i]).removeClass('active open');
    }
  }

 });

$('.navbar-trigger').click(function() {
  $('.navbar').toggleClass('open');
});

$('.subnav-trigger').mouseover(function() {
  $(this).find('.subnav').addClass('active');
});

$('.subnav-trigger').mouseleave(function() {
  $(this).find('.subnav').removeClass('active');
});
