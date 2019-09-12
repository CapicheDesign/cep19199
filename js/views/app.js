var Backbone = require('backbone');
var ScrollReveal = require('../lib/scrollview.js');
var Waypoints = require('../../node_modules/waypoints/lib/jquery.waypoints.min.js');
var SmoothState = require('../lib/jquery.smoothState.js');

var AppView = Backbone.View.extend({
  el: 'html',

  events: {
    'click #menu-checkbox': 'toggleMainNav',
    'click body': 'closeNavOnClick',
    'click .toggleSubnav': 'toggleSubNav',
    'keyup #menu-checkbox': 'keyboardToggleSubnav',
    'click .scroll-pagination a': 'updateHeaderDesktop',
    'wheel document': 'updateHeaderDesktop',
    'mousewheel document': 'uupdateHeaderDesktop',
    'DOMMouseScroll document': 'updateHeaderDesktop',
    'touchstart document': 'updateHeaderDesktop',
    'touchmove document': 'updateHeaderDesktop',
    'touchend document': 'updateHeaderDesktop',
    'mouseenter #business-panel-4' : 'showTradesSubnav',
    'mouseleave #business-panel-4' : 'hideTradesSubnav',
    'mouseenter .panel__home' : 'showHoverText',
    'mouseleave .panel__home' : 'hideHoverText',
    'click #close-btn': 'closeContentPage'
  },

  initialize: function() {
    this.render();

    /* smoothstate for page transitions */

    var $page = $('#animate-page')
    options = {
      debug: true,
      prefetch: true,
      cacheLength: 2,
      forms: 'form',
      onStart: {
        duration: 100, // Duration of our animation
        render: function ($container) {
          // Add your CSS animation reversing class
          $container.addClass('is-exiting');
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');
          // Inject the new content
          $container.html($newContent);
        }
      },
      onAfter: function() {
  
      }
    },
    smoothState = $page.smoothState(options).data('smoothState');

    var self = this;

    if ( $('#homepage').length ) {
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
          $('#sectionHeading').text('Business');
        }
      });

      var waypoint3 = new Waypoint({
        element: document.getElementById('people'),
        handler: function() {
          $('#sectionHeading').text('People');
        }
      });

      var waypoint4 = new Waypoint({
        element: document.getElementById('focus'),
        handler: function() {
          $('#sectionHeading').text('Focus');
        }
      });

      var waypoint5 = new Waypoint({
        element: document.getElementById('financials'),
        handler: function() {
          $('#sectionHeading').text('Financials');
        }
      });
    }

    _.bindAll(this, 'checkScreenSize');

    $(window).scrollTop(0); // start at top

    $(window).scroll(this.updateHeaderMobile);
    
    // set small screen size to check mobile 
    var $screenSize = window.matchMedia("(max-width: 767px)");

    //run screen size check
    this.checkScreenSize($screenSize);

    // reload page on resize desktop only
    $(window).on('resize', function() {
      if ($('html.mobile').length !== 1) {
        window.location.reload(false);
      }
    });

    // fixed image on content page
    if ( $('#contentPage-container').length === 1 ) {
      this.fixContentPageImage();
    }
  },
  /*** end initalize function ***/

  render: function(){   
    $('#mainNav').css('display','block');
  },

  closeContentPage: function() {
      var $section = $('#areaHeading').text();
      console.log($section);
      
  },

  // check screen size
  checkScreenSize: function($screenSize) {
    if ($screenSize.matches) { // if small screen size
      $('html').addClass('mobile'); // ...add mobile class
    } else { // .. otherwise if large screen size
      this.setUpScrollView(); // ... add scrollview plugin for homepage
      $('html').removeClass('mobile'); // ..remove mobile class
      // hide trades subnav on load
      if ( $('#homepage').length === 1 ) {
        this.$subnavContainer = $('#trades-subnav-container');
        $('#trades-subnav-container').hide();
      }
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
    
    if ($('html.mobile').length === 1) { // if small screen size 
  
      if ( $('#homepage').length === 1 ) { // ... and we are on the home page 
        var distance = $('header').offset().top;
         
        if ( $(window).scrollTop() !== 0 ) { // if we are not at top of page
          // ... remove transparency from header and nav
          $('.header__home').removeClass('header__transparent'); 
          $('.logo img').attr('src','img/logo-black.svg');
          $('#menuToggle').addClass('white-bg'); 
        } else if ( $(window).scrollTop() === 0 ) {
          $('header').addClass('header__transparent');
          $('.logo img').attr('src','img/logo.svg');
          $('.logo').show();
          $('#sectionHeading').text('');
          $('#menuToggle').removeClass('white-bg');
        }
      }
    }
  },

  // update header when changing sections on homepage
  updateHeaderDesktop: function(e) {
    if ( $('#homepage').length === 1 ) { // if we are on the home page    
      var dataIndex = $(e.currentTarget).data('index');
      if ( dataIndex == '1') {
        $('header').addClass('header__transparent');
        $('.logo img').attr('src','img/logo.svg');
        $('#menuToggle').removeClass('white-bg');
      } else {
        $('header').removeClass('header__transparent');
        $('.logo img').attr('src','img/logo-black.svg');
        $('#menuToggle').addClass('white-bg');
        this.updateSectionHeading(dataIndex);
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
            headingText = 'Financial Statements';
            break;
        }
      $('#sectionHeading').text(headingText);
    }
  },

  // show or hide 'trades' subnav on homepage
  showTradesSubnav: function(e) {
    e.stopPropagation();
    this.$subnavContainer.show();
    $('#trades-link').hide();
  },
  hideTradesSubnav: function(e) {
    e.stopPropagation();
    this.$subnavContainer.hide();
    $('#trades-link').show().css('margin-bottom','0');
  },

  // show or hide hover text on homepage
  showHoverText: function(e) {
    if ($(e.target).find('#hover-text-container').length) {
      $(e.target).find('#hover-text-container').show();
    }
  },
  hideHoverText: function(e) {
    if ($(e.target).find('#hover-text-container').length) {
      $(e.target).find('#hover-text-container').hide();
    }
  },
});

module.exports = AppView;
