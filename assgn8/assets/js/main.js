
// I used the scrollr library and made some changes based on need
jQuery(document).ready(function( $ ) {
  ( function( $ ) {
    var s = skrollr.init({
        render: function(data) {
        }
    });
  } )( jQuery );

// this part comes with templete for nav bar
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

    $(".navbar-collapse a").on('click', function() {
      $(".navbar-collapse.collapse").removeClass('in');
    });
  });


  // learned from Stackoverflow for fixing image after scrolling, made lots of changes
  var fixmeTop = $('#services').offset().top;      
  $(window).scroll(function() {                  
    var currentScroll = $(window).scrollTop(); 

    if (currentScroll >= fixmeTop-1260 && currentScroll< fixmeTop-960) {           
        $('#services').css({                      
            position: 'fixed',
            top: '1300px',  
            opacity: '1',
        });
        $('#text').css({
            opacity: '1'
        });


    } else if (currentScroll>=fixmeTop-960){
      $('#services').css({                     
            position: 'fixed',
            top: '1300px',  
            opacity: '1',
        });
      $('#text').css({
            opacity: '0'
        });

    } else {                                   
        $('#services').css({                     
            position: 'static',
            opacity: '1',
        });
        $('#text').css({
            opacity: '1'
        });
    }

    if (currentScroll>=fixmeTop+800){
      $('#services').css({                     
            opacity: '0',
        });
    }

});

  // learned following instruction on CSS3 animation website
  //BEGIN animation effect of images for Progress section 

    $(window).scroll(function() {
      $("#tau").each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+460) {
          $(this).addClass("slideUp");
        }
      });
    });
  
    $(window).scroll(function() {
      $("#tauH").each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+460) {
          $(this).addClass("slideUp");
        }
      });
    });
  
    $(window).scroll(function() {
      $("#tauN").each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+410) {
          $(this).addClass("slideUp");
        }
      });
    });
  
    $(window).scroll(function() {
      $("#n1").each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass("slideRight");                
        }
      });
    });
  
    $(window).scroll(function() {
      $("#n2").each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass("slideRight");
        }
      });
    });
  
    $(window).scroll(function() {
      $("#n3").each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+450) {
          $(this).addClass("slideRight");
        }
      });
    });
  

    // scrolling and appear effect for Summary section
    $(window).scroll(function() {
      $("#finaltext").each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+480) {
          $(this).addClass("slideDown");
        }
      });
    });

    // scrolling and appear effect for Alice section
    $(window).scroll(function() {
      $("#Alice").each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+280) {
          $(this).addClass("hatch");
        }
      });
    });

