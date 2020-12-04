//  Google Analytics 
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-112208375-1");

//Get current year
document.getElementById("year").innerHTML = new Date().getFullYear();

$(window).scroll(function() {

  if ($(window).scrollTop() > 300) {
      $('.nav-container').addClass('sticky');
  } else {
      $('.nav-container').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.nav-container').hasClass('open-nav')) {
      $('.nav-container').removeClass('open-nav');
  } else {
      $('.nav-container').addClass('open-nav');
  }
});

$('.nav-container li a').click(function() {
  if ($('.nav-container').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.nav-container').removeClass('open-nav');
  }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

 $('.smoothscroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});

});
