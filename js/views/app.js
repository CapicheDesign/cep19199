var Backbone = require('backbone');
var ScrollReveal = require('../lib/scrollview.js');
var Waypoints = require('../../node_modules/waypoints/lib/jquery.waypoints.min.js');
var Animsition = require('../lib/animsition.min.js');
var YouTubeModal = require('../lib/jquery-modal-video.min.js');
var SlickSlider = require('../lib/slick.min.js');
var Lottie = require('../lib/bodymovin/lottie.js');

var AppView = Backbone.View.extend({
  el: 'html',

  events: {
    'click #menu-checkbox': 'toggleMainNav',
    'click body': 'closeNavOnClick',
    'click .toggleSubnav': 'toggleSubNav',
    'keyup #menu-checkbox': 'keyboardToggleSubnav',
    'click .scroll-pagination a': 'updateHeaderDesktop',
    'wheel document': 'updateHeaderDesktop',
    'mousewheel document': 'updateHeaderDesktop',
    'DOMMouseScroll document': 'updateHeaderDesktop',
    'touchstart document': 'updateHeaderDesktop',
    'touchmove document': 'updateHeaderDesktop',
    'touchend document': 'updateHeaderDesktop',
    'click #close-btn': 'closeContentPage',
    'click a': 'hideNav',
    'mouseover #focus-panel-4': 'toggleRopeIconIn',
    'mouseout #focus-panel-4': 'toggleRopeIconOut',
    'click #homepage .homePageLink': 'homePageNav',
    'click .scroll-pagination li a': 'updateNavActive',
    'click #menu li a' : 'updateNavActive',
    'click #high1-link': 'moveHighlight1',
    'click #high4-link': 'moveHighlight4'
  },

  initialize: function() {

    var self = this;

    /* set up youtube modals */
    $(".js-modal-btn").modalVideo();

    /* set up slick sliders */
    $('.slick-slider').slick({
      dots: true,
    });

    if ( $('#homepage').length ) {

      /* stop chrome remembering scroll position on reload */
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      /* reload homepage when resized between mobile/desktop */
      var limit = 991;
      var ww = $(window).width();
      $(window).resize(function() {
        resW = $(window).width();
        if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {           
          location.reload(true);
        }
      });

      var getUrl = window.location;
      var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

      $(".animsition").animsition({
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '<img src="/img/loader.svg" />',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        transition: function(url){ window.location.href = url; }
      })
      .one('animsition.inStart',function(){
        
      })
      .one('animsition.inEnd',function(){
        $('#menu').css('display','block');
      });
    } else {
      $(".animsition").animsition({
        inClass: 'fade-in-right',
        outClass: 'fade-out-right',
        inDuration: 1000,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '<img src="/img/loader.svg" />',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        transition: function(url){ window.location.href = url; }
      })
      .one('animsition.inStart',function(){

      })
      .one('animsition.inEnd',function(){
        $('#menu').css('display','block');
        $('.left-col').css({'opacity':'1'});
      });
    }

    _.bindAll(this, 'checkScreenSize');

    $(window).scroll(this.updateHeaderMobile);
    
    // set small screen size to check mobile 
    var $screenSize = window.matchMedia("(max-width: 991px)");

    //run screen size check
    this.checkScreenSize($screenSize);

    // fixed image on content page
    if ( $('#contentPage-container').length === 1 ) {
      this.fixContentPageImage();
    }

    this.setUpHeader();

    this.initWaypoints();

    if ( $('.lottie').length ) {
      Lottie.loadAnimation({
        container: document.getElementById('logs-anim'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../../js/lib/bodymovin/data.json'
      });
    }

    this.initHomeScrollOnLoad();
  },
  /*** end initalize function ***/


  initHomeScrollOnLoad: function() {
    if ( $('.scroll-pagination').length > 0 ) {
      $('.scroll-pagination li a.active').trigger('click'); 
    }
  },

  moveHighlight1: function(e) {
    e.preventDefault();
    $('a[data-index="6"]').trigger("click");
  },

  moveHighlight4: function(e) {
    e.preventDefault();
    $('a[data-index="4"]').trigger("click");
  },

  setUpHeader: function() {
    
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    if ( $('#homepage').length ) {
      $('#menu li a').removeClass('active');
      $('#menu li').removeClass('active');
      if (location.search == '?s=1') {
        $('body').removeClass('current-page-1').addClass('current-page-2');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('#menu li a#highlightsLink').addClass('active');
        $('#menu li a#highlightsLink').closest('li').addClass('active');
        $('.logo img').attr('src', baseUrl+'/img/logo-black.svg');
        if ( $('.mobile').length <= 0) {
          $('#main').css({'transform':'translate3d(0px, -100%, 0px)'});
        }
      } else if (location.search == '?s=2') {
        $('body').removeClass('current-page-1').addClass('current-page-3');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('#menu li a#businessLink').addClass('active');
        $('#menu li a#businessLink').closest('li').addClass('active');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        if ( $('.mobile').length <= 0) {
          $('#main').css({'transform':'translate3d(0px, -200%, 0px)'});
        }
      } else if (location.search == '?s=3') {
        $('body').removeClass('current-page-1').addClass('current-page-4');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('#menu li a#peopleLink').addClass('active');
        $('#menu li a#peopleLink').closest('li').addClass('active');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        if ( $('.mobile').length <= 0) {
          $('#main').css({'transform':'translate3d(0px, -300%, 0px)'});
        }
      } else if (location.search == '?s=4') {
        $('body').removeClass('current-page-1').addClass('current-page-5');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('#menu li a#focusLink').addClass('active');
        $('#menu li a#focusLink').closest('li').addClass('active');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        if ( $('.mobile').length <= 0) {
          $('#main').css({'transform':'translate3d(0px, -400%, 0px)'});
        }
      } else if (location.search == '?s=5') {
        $('body').removeClass('current-page-1').addClass('current-page-6');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('#menu li a#financialsLink').addClass('active');
        $('#menu li a#financialsLink').closest('li').addClass('active');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        if ( $('.mobile').length <= 0) {
          $('#main').css({'transform':'translate3d(0px, -500%, 0px)'});
        }
      } else {
        $('#menu li a#homeLink').addClass('active');
        $('#menu li a#homeLink').closest('li').addClass('active');
        $('.logo img').attr('src',baseUrl+'/img/logo.svg');
      }
    }
  },

  updateNavActive: function(e) {
    if ( !$(e.currentTarget).hasClass('toggleSubnav') && !$(e.currentTarget).hasClass('pdf-link') ) {
      $('#menu li a').removeClass('active');
      $('#menu li').removeClass('active');
      var $linkIndex = $(e.currentTarget).data('index');
      var $linkId = $(e.currentTarget).attr('id');
      if ( $linkIndex == '1' || $linkId == 'homeLink') {
        $('#menu li a#homeLink').addClass('active');
        $('#menu li a#homeLink').closest('li').addClass('active');
      } else if ( $linkIndex == '2'  || $linkId == 'highlightsLink' ) {
        $('#menu li a#highlightsLink').addClass('active');
        $('#menu li a#highlightsLink').closest('li').addClass('active');
      } else if ( $linkIndex == '3' || $linkId == 'businessLink' ) {
        $('#menu li a#businessLink').addClass('active');
        $('#menu li a#businessLink').closest('li').addClass('active');
      } else if ( $linkIndex == '4' || $linkId == 'peopleLink' ) {
        $('#menu li a#peopleLink').addClass('active');
        $('#menu li a#peopleLink').closest('li').addClass('active');
      } else if ( $linkIndex == '5' || $linkId == 'focusLink' ) {
        $('#menu li a#focusLink').addClass('active');
        $('#menu li a#focusLink').closest('li').addClass('active');
      } else if ( $linkIndex == '6' || $linkId == 'financialsLink' ) {
        $('#menu li a#financialsLink').addClass('active');
        $('#menu li a#financialsLink').closest('li').addClass('active');
      }
    }
  },

  initWaypoints: function() {
    if ( $('.mobile').length <= 0 && $('#homepage').length ) {
      var waypoint1 = new Waypoint({
        element: document.getElementById('highlights'),
        handler: function() {
          $('.logo').hide();
          $('#sectionHeading').text('Highlights');
        }
      });

      var waypoint2 = new Waypoint({
        element: document.getElementById('business'),
        handler: function() {
          $('.logo').show();
          $('#sectionHeading').text('Our Business');
        }
      });

      var waypoint3 = new Waypoint({
        element: document.getElementById('people'),
        handler: function() {
          $('.logo').show();
          $('#sectionHeading').text('Our People');
        }
      });

      var waypoint4 = new Waypoint({
        element: document.getElementById('focus'),
        handler: function() {
          $('.logo').show();
          $('#sectionHeading').text('Our Focus');
        }
      });

      var waypoint5 = new Waypoint({
        element: document.getElementById('financials'),
        handler: function() {
          $('.logo').show();
          $('#sectionHeading').text('Financial Information');
        }
      });
    }
  },

  closeContentPage: function() {
      var $section = $('#areaHeading').text();      
  },

  hideNav: function(e) {
    if( !$(e.currentTarget).parents('.scroll-pagination').length && !$(e.currentTarget).hasClass('toggleSubnav') ) {
     $('#menu').hide();
   }
  },

  // check screen size
  checkScreenSize: function($screenSize) {
    if ($screenSize.matches) { // if small screen size
     
      $('html').addClass('mobile'); // ...add mobile class
      $('.nav__home').addClass('nav__mobile'); // ...add mobile class
      $('.header__home #sectionHeading').text('');
      if ( $('.slick-slider').length > 0 ) { // if small screen size
       $('.slick-dots').css('display','none');
      }
    } else { // .. otherwise if large screen size
      this.setUpScrollView(); // ... add scrollview plugin for homepage
      $('html').removeClass('mobile'); // ..remove mobile class
    }
  },
  
  // set up scrollview plugin for large screen home page
  setUpScrollView: function() {
    if ( $('#homepage').length === 1 ) { // if we are on the home page
      $('#main').scrollview({loop: false}); // ... instantiate scrollview plugin
    } else {
      return; // .. otherwise do nothing
    }
  },

  // set the size of left-hand image on content page
  fixContentPageImage: function(e) {
    var $height = $(window).height() - $('header').height();  
    $('.left-col').css('height',$height);
  },

  // close the main nav if clicking outside
  closeNavOnClick: function(e) {
    if ($(e.target).closest("#mainNav").length === 0) { 
      var $btn = $('#menu-checkbox');
      $($btn).prop('checked', false);
      $($btn).removeClass('open');
      $('#menu').attr('aria-expanded','false');
    } 
  },

  // open and close main nav
  toggleMainNav: function() {
    var $btn = $('#menu-checkbox');
    $('#menu').css('display','block');
    if($($btn).prop('checked') == true){
      $($btn).addClass('open');
      $('#menu').attr('aria-expanded','true');
    }
    else if($($btn).prop('checked') == false){
      $($btn).removeClass('open');
      $('#menu').attr('aria-expanded','false');
    }
  },

  // open and close subnav (within main nav menu)
  toggleSubNav: function(e) {
    e.preventDefault();
    if ( $(e.currentTarget).hasClass('sub-nav--open')) {
      $(e.currentTarget).removeClass('sub-nav--open');
      $(e.currentTarget).next('.sub-nav').slideUp();
      $('#menu').attr('aria-expanded','false');
    } else {
      $('#menu').find('.sub-nav--open').next('.sub-nav').slideUp();
      $('#menu').find('.sub-nav--open').removeClass('sub-nav--open');
      $(e.currentTarget).addClass('sub-nav--open');
      $(e.currentTarget).next('.sub-nav').slideDown();
      $('#menu').attr('aria-expanded','true');
    }
  },

  // open close menu using enter key
  keyboardToggleSubnav: function(e){
    if(e.keyCode == 13){
        this.$('#menu-checkbox').click();
    }
  },

  // update header when changing sections on homepage
  updateHeaderMobile: function(e) {

    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    
    if ($('html.mobile').length === 1) { // if small screen size 
  
      if ( $('#homepage').length === 1 ) { // ... and we are on the home page 
         
        if ( $(window).scrollTop() > 0 ) { // if we are not at top of page
          // ... remove transparency from header and nav
          $('.header__home').removeClass('header__transparent'); 
          $('.header__home .logo img').attr('src', baseUrl+'/img/logo-black.svg');
          $('#menuToggle').addClass('white-bg'); 
        } else if ( $(window).scrollTop() <= 0 ) {
          $('header').addClass('header__transparent');
          $('.logo img').attr('src',baseUrl+'/img/logo.svg');
          $('#menuToggle').removeClass('white-bg');
        }
      }
    }
  },

  // update header when changing sections on homepage
  updateHeaderDesktop: function(e) {
    if ( $('.mobile').length <= 0 ) {
      var getUrl = window.location;
      var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
      if ( $('#homepage').length === 1 ) { 
        var dataIndex = $(e.currentTarget).data('index');
        if ( dataIndex == '1') {
          $('header').addClass('header__transparent');
          $('.logo img').attr('src',baseUrl+'/img/logo.svg');
          $('#menuToggle').removeClass('white-bg');
        } else {
          $('header').removeClass('header__transparent');
          $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
          $('#menuToggle').addClass('white-bg');
          this.updateSectionHeading(dataIndex);
        }
      }
    }
  },

  // update heading when changing sections on homepage
  updateSectionHeading: function(i) {
    if ( $('#homepage').length === 1 ) { // if we are on the home page    
      var headingText = '';
      switch (i)
      {
          case 2:
              headingText = 'Highlights';
              break;

          case 3:
              headingText = 'Our Business';
              break;

          case 4:
            headingText = 'Our People';
            break;

          case 5:
            headingText = 'Our Focus';
            break;

          case 6:
            headingText = 'Financial Information';
            break;
        }
      $('#sectionHeading').text(headingText);
    }
  }, 

  toggleRopeIconIn: function() {
      $('.panel--icon__ropes').addClass('inverse');
  },

  toggleRopeIconOut: function() {
    $('.panel--icon__ropes').removeClass('inverse');
  },

  homePageNav: function(e) {
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    
      var $btn = $('#menu-checkbox');
      $($btn).prop('checked', false);
      $($btn).removeClass('open');
      $('#menu').attr('aria-expanded','false');
      $("#menu li a").removeClass('active');
      $(e.currentTarget).addClass('active');
    if ($('.mobile').length > 0) {
      /* mobile */
      var $headerHeight = $('header').outerHeight();
      var $myScroll;
      var $sectionTop;
      e.preventDefault();
       /* mobile */
       if ( $(e.currentTarget).attr('id') == 'homeLink' ) {
          $sectionTop = $("#home").offset().top;
          $myScroll = $sectionTop -= $headerHeight;
        $('html, body').animate({
          scrollTop: $myScroll
        }, 500);
      } else if( $(e.currentTarget).attr('id') == 'highlightsLink' ) {
        $sectionTop = $("#highlights").offset().top;
        $myScroll = $sectionTop -= $headerHeight;
       $('html, body').animate({
         scrollTop: $myScroll
       }, 500);
      } else if ( $(e.currentTarget).attr('id') == 'businessLink' ) {
        $sectionTop = $("#business").offset().top;
        $myScroll = $sectionTop -= $headerHeight;
       $('html, body').animate({
         scrollTop: $myScroll
       }, 500);
      } else if ( $(e.currentTarget).attr('id') == 'peopleLink' ) {
        $sectionTop = $("#people").offset().top;
        $myScroll = $sectionTop -= $headerHeight;
       $('html, body').animate({
         scrollTop: $myScroll
       }, 500);
      } else if ( $(e.currentTarget).attr('id') == 'focusLink' ) {
        $sectionTop = $("#focus").offset().top;
        $myScroll = $sectionTop -= $headerHeight;
       $('html, body').animate({
         scrollTop: $myScroll
       }, 500);
      } else if ( $(e.currentTarget).attr('id') == 'financialsLink' ) {
        $sectionTop = $("#financials").offset().top;
        $myScroll = $sectionTop -= $headerHeight;
       $('html, body').animate({
         scrollTop: $myScroll
       }, 500);
      }
    } else {
      /* desktop */
      $('#main').css('transition', 'all 1000ms ease 0s');
      $(".scroll-pagination li a").removeClass('active');
      if( $(e.currentTarget).attr('id') == 'homeLink' ) {
        $('#main').css({'transform':'translate3d(0px, 0px, 0px)'});
        $('body').removeClass().addClass('animsition current-page-1');
        $('header').addClass('header__transparent');
        $('#menuToggle').removeClass('white-bg');
        $('.logo img').attr('src',baseUrl+'/img/logo.svg');
        $('.logo').show();
        $('#sectionHeading').text('');
        $(".scroll-pagination li a" + "[data-index='1']").addClass("active");

      } else if( $(e.currentTarget).attr('id') == 'highlightsLink' ) {
        $('#main').css({'transform':'translate3d(0px, -100%, 0px)'});
        $('body').removeClass().addClass('animsition current-page-2');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        $('.logo').show();
        $('#sectionHeading').text('Highlights');
        $(".scroll-pagination li a" + "[data-index='2']").addClass("active");
      } else if( $(e.currentTarget).attr('id') == 'businessLink' ) {
        $('#main').css({'transform':'translate3d(0px, -200%, 0px)'});
        $('body').removeClass().addClass('animsition current-page-3');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        $('.logo').show();
        $('#sectionHeading').text('Our Business');
        $(".scroll-pagination li a" + "[data-index='3']").addClass("active");
      } else if ( $(e.currentTarget).attr('id') == 'peopleLink' ) {
        $('#main').css({'transform':'translate3d(0px, -300%, 0px)'});
        $('body').removeClass().addClass('animsition current-page-4');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        $('.logo').show();
        $('#sectionHeading').text('Our People');
        $(".scroll-pagination li a" + "[data-index='4']").addClass("active");
      } else if ( $(e.currentTarget).attr('id') == 'focusLink' ) {
        $('#main').css({'transform':'translate3d(0px, -400%, 0px)'});
        $('body').removeClass().addClass('animsition current-page-5');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        $('.logo').show();
        $('#sectionHeading').text('Our Focus');
        $(".scroll-pagination li a" + "[data-index='5']").addClass("active");
      } else if ( $(e.currentTarget).attr('id') == 'financialsLink' ) {
        $('#main').css({'transform':'translate3d(0px, -500%, 0px)'});
        $('body').removeClass().addClass('animsition current-page-6');
        $('header').removeClass('header__transparent');
        $('#menuToggle').addClass('white-bg');
        $('.logo img').attr('src',baseUrl+'/img/logo-black.svg');
        $('.logo').show();
        $('#sectionHeading').text('Financial Information');
        $(".scroll-pagination li a" + "[data-index='6']").addClass("active");
      }
    }
  }
});

module.exports = AppView;
