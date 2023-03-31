(function ($) {
  "use strict";

  $(window).on('load', function () {
    $('.preloader').fadeOut();
    isotopeintial()
  });

  if ($('.preloader').length > 0) {
    $('.preloaderCls').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.preloader').css('display', 'none');
      })
    });
  };

  function onePageNav(element) {
    if ($(element).length > 0) {
      $(element).each(function () {
        $(this).find('a').each(function () {
          $(this).on('click', function () {
            var target = $(this.getAttribute('href'));
            if (target.length) {
              event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: target.offset().top - 10
              }, 1000);
            };

          });
        });
      })
    }
  };
  onePageNav('.onepage-nav');


  $('.mobile-menu-active').vsmobilemenu({
    menuContainer: '.vs-mobile-menu',
    expandScreenWidth: 992,
    menuToggleBtn: '.vs-menu-toggle',
  });


  
  // Scroll To top Button Select 
  var scrollToTopBtn = '.scrollToTop'
  $(window).on("scroll", function () {

    //Check to see if the window is top if not then display button
    if ($(this).scrollTop() > 50) {
      $('header').addClass('show bg-primary3');
    } else {
      $('header').removeClass('show bg-primary3');
    }

    //Check to see if the window is top if not then display button
    if ($(this).scrollTop() > 400) {
      $(scrollToTopBtn).addClass('show');
    } else {
      $(scrollToTopBtn).removeClass('show');
    }

  });


  $(scrollToTopBtn).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 4000);
    return false;
  });



  if ($('.background-image').length > 0) {
    $('.background-image').each(function () {
      var src = $(this).attr('data-vs-img');
      $(this).css({
        'background-image': 'url(' + src + ')'
      });
    });
  };



  function isotopeintial(){
    // Isotope initialization
    var $isotope = $('.filter-active').isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    // Isotope filter
    $('.filter-menu').on('click', 'button', function () {

      var $this = $(this);
      $('.filter-menu').find('button').removeClass('active');
      $this.addClass('active');
      var selector = $this.attr('data-filter');
      $isotope.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });



  }





   

  window.addEventListener('contextmenu', function (e) {
    // do something here... 
    e.preventDefault();
  }, false);


  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }



})(jQuery);