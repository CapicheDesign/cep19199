var Backbone = require('backbone');
var ScrollReveal = require('../lib/scrollview.js');

var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click #menu-checkbox': 'toggleMainNav',
    'click .toggleSubnav': 'toggleSubNav',
    'keyup #menu-checkbox': 'keyboardToggleSubnav',
    'click .scroll-pagination a': 'updateHeader',
    'wheel document': 'updateHeader',
    'mousewheel document': 'updateHeader',
    'DOMMouseScroll document': 'updateHeader',
    'touchstart document': 'updateHeader',
    'touchmove document': 'updateHeader',
    'touchend document': 'updateHeader',
    'mouseenter #business-panel-4' : 'showBAUSubnav',
    'mouseleave #business-panel-4' : 'hideBAUSubnav'
  },

  initialize: function() {
    $('#main').scrollview({loop: false});
    $('#bau-subnav-container').slideUp('fast');

    this.$subnavContainer = $('#bau-subnav-container');

    //$('html').on('click', this.closeNavOnClick);
  },

  toggleMainNav: function(e) {
    var $btn = e.currentTarget;
        if($($btn).prop('checked') == true){
          $($btn).attr('aria-expanded','true');
        }
        else if($($btn).prop('checked') == false){
          $($btn).attr('aria-expanded','false');
        }
  },

  toggleSubNav: function(e) {
    e.preventDefault();
    if ( $(e.currentTarget).hasClass('sub-nav--open')) {
      $(e.currentTarget).removeClass('sub-nav--open');
      $(e.currentTarget).next('.sub-nav').slideUp();
      $(e.currentTarget).attr('aria-expanded','false');
    } else {
      $(e.currentTarget).addClass('sub-nav--open');
      $(e.currentTarget).next('.sub-nav').slideDown();
      $(e.currentTarget).attr('aria-expanded','true');
    }
  },

  keyboardToggleSubnav: function(e){
    if(e.keyCode == 13){
        this.$('#menu-checkbox').click();
    }
  },

  closeNavOnClick: function() {         
        // var $btn = $('#menu-checkbox');
        // if($($btn).prop('checked') == true){
        //   $($btn).attr('aria-expanded','true');
        // }
        // else if($($btn).prop('checked') == false){
        //   $($btn).attr('aria-expanded','false');
        // }
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
    //  $('#sectionHeading').delay(500).text(headingText).fadeIn(500);
  },
  showBAUSubnav: function(e) {
    e.stopPropagation();
    this.$subnavContainer.slideDown('fast');
    $('#bau-link').hide();
  },
  hideBAUSubnav: function(e) {
    e.stopPropagation();
    this.$subnavContainer.slideUp('fast');
    $('#bau-link').show();
  }
});

module.exports = AppView;
