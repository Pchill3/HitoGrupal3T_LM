//Menu 
var mediaQuery = window.matchMedia('(max-width: 1100px)');
$('.lnr-menu').on('click', function(){
    
  $('.menu').toggleClass("menu-show");
  $('main').toggleClass("main-move");
  if (mediaQuery.matches) {
    if ($('.menu').hasClass("menu-show")) {
      $('.menu_principal').css('display', 'flex');
    } else {
      $('.menu_principal').css('display', 'none');
    }
  }
})