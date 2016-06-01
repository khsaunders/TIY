$(function(){
  'use strict';
});

$('#marshmallow').on('click', function(){
  $('.marshmallow-li, .marshmallow-p').addClass('showing');

});


  $('#chomper, #skunk').on('click', function(){
    $('.marshmallow-li, .marshmallow-p').removeClass('showing');

});


$('#skunk').on('click', function(){
  $('.skunk-li, .skunk-p').addClass('showing');

});


  $('#marshmallow, #chomper').on('click', function(){
    $('.skunk-li, .skunk-p').removeClass('showing');

});

$('#chomper').on('click', function(){
  $('.chomper-li, .chomper-p').addClass('showing');

});


  $('#marshmallow, #skunk').on('click', function(){
    $('.chomper-li, .chomper-p').removeClass('showing');

});
