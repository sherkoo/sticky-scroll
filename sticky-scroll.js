$(window).scroll(function(){

  var sticky = $(this).scrollTop();

  // Detect when top of browser reaches div with the sticky class
  if(sticky > $('.sticky').offset().top){
    
    $('.sticky').addClass('stuck');

  }

  // Remove stuck class when user goes back to the sticky anchor
  if(sticky < $('.sticky-anchor').offset().top){
    
    $('.sticky').removeClass('stuck');

  }

});