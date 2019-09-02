var Backbone = require('backbone');
var ScrollReveal = require('../lib/scrollview.js');

var AppView = Backbone.View.extend({
  el: 'html',

  events: {
    'click #menu-checkbox': 'toggleMainNav',
    'click body': 'closeNavOnClick',
    'click .toggleSubnav': 'toggleSubNav',
    'keyup #menu-checkbox': 'keyboardToggleSubnav',
    'click .scroll-pagination a': 'updateHeader',
    'wheel document': 'updateHeader',
    'mousewheel document': 'updateHeader',
    'DOMMouseScroll document': 'updateHeader',
    'touchstart document': 'updateHeader',
    'touchmove document': 'updateHeader',
    'touchend document': 'updateHeader',
    'mouseenter #business-panel-4' : 'showTradesSubnav',
    'mouseleave #business-panel-4' : 'hideTradesSubnav'
  },

  initialize: function() {
    
    var $screenSize = window.matchMedia("(max-width: 767px)");

    this.checkScreenSize($screenSize);

    if ( $('#homepage').length === 1 ) {
      if (!$('html').hasClass('mobile')) {
        $('#main').scrollview({loop: false});
      }
      this.$subnavContainer = $('#trades-subnav-container');
      $('#trades-subnav-container').slideUp('fast');
    }

    if ( $('#contentPage-container').length === 1 ) {
      this.fixContentPageImage();
    }
  },

  checkScreenSize: function($screenSize) {
    if ($screenSize.matches) { // If media query matches
      $('html').addClass('mobile');
    } else {
      $('html').removeClass('mobile');
    }
  },

  fixContentPageImage: function(e) {
    var $height = $(window).height() - $('header').height();  
    $('.left-col').css('height',$height);
  },

  closeNavOnClick: function(e) {
    if ($(e.target).closest("#mainNav").length === 0) { 
      console.log('notonNav!');
      var $btn = $('#menu-checkbox');
      $($btn).prop('checked', false);
      $($btn).removeClass('open');
      $('#menu').attr('aria-expanded','false');
    } 
  },

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

  toggleSubNav: function(e) {
    e.preventDefault();
    if ( $(e.currentTarget).hasClass('sub-nav--open')) {
      $(e.currentTarget).removeClass('sub-nav--open');
      $(e.currentTarget).next('.sub-nav').slideUp();
      $('#menu').attr('aria-expanded','false');
    } else {
      $(e.currentTarget).addClass('sub-nav--open');
      $(e.currentTarget).next('.sub-nav').slideDown();
      $('#menu').attr('aria-expanded','true');
    }
  },

  keyboardToggleSubnav: function(e){
    if(e.keyCode == 13){
        this.$('#menu-checkbox').click();
    }
  },

  updateHeader: function(e) {    
    var dataIndex = $(e.currentTarget).data('index');
    if ( dataIndex == '1') {
      $('header').addClass('header__transparent');
       $('header').addClass('header__transparent');
      $('.logo img').attr('src','img/logo.svg');
      $('#menuToggle').removeClass('white-bg');
    } else {
      $('header').removeClass('header__transparent');
      $('.logo img').attr('src','img/logo-black.svg');
      $('#menuToggle').addClass('white-bg');
      this.updateSectionHeading(dataIndex);
    }
  },

  updateSectionHeading: function(i) {
    var headingText = '';
    switch (i)
    {
        case 2:
            headingText = 'Highlights';
            break;

        case 3:
            headingText = 'Business';
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
  },
  showTradesSubnav: function(e) {
    e.stopPropagation();
    this.$subnavContainer.slideDown('fast');
    $('#trades-link').hide();
  },
  hideTradesSubnav: function(e) {
    e.stopPropagation();
    this.$subnavContainer.slideUp('fast');
    $('#trades-link').show();
  }
});

module.exports = AppView;
