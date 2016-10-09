$(function(){
  'use strict';
});

$('.clickme').on('click', function(){
  $(this).text('Look forward to hearing from you');//changes text in button
  $('.modal-container, .modal').addClass('showing');
});



$('.fa-times, #submitEmail').on('click', function(){
  $('.modal-container, .modal').removeClass('showing');
  console.log('clicked');
});
