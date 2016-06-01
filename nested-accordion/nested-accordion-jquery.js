$(function(){
  'use strict';
});

$('#marshmallow , .arrow').on('click', function(){
  $('.marshmallow-li, .marshmallow-p, .arrow').addClass('showing');

});


  $('#chomper, #skunk, .arrow2, .arrow3').on('click', function(){
    $('.marshmallow-li, .marshmallow-p, .arrow').removeClass('showing');

});


$('#skunk, .arrow2').on('click', function(){
  $('.skunk-li, .skunk-p, .arrow2').addClass('showing');

});


  $('#marshmallow, #chomper, .arrow3, .arrow').on('click', function(){
    $('.skunk-li, .skunk-p, .arrow2').removeClass('showing');

});

$('#chomper, .arrow3').on('click', function(){
  $('.chomper-li, .chomper-p, .arrow3').addClass('showing');

});


  $('#marshmallow, #skunk, .arrow, .arrow2').on('click', function(){
    $('.chomper-li, .chomper-p, .arrow3').removeClass('showing');

});
