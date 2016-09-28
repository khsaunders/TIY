$(function(){
  'use strict';
});

//Attempt Number 1
// var a = 1
// console.log(a);
//
// $(".clickme").click (function(){
//   alert(".modal-container.showing" .click())
//   alert(".modal.showing" .click())
//   alert(".modal-container.showing" .click())
// });

//Attempt Number 2, after some Googling and note review

$('.clickme').on('click', function(){
  $(this).text('Look forward to hearing from you');//changes text in button
  $('.modal-container, .modal').addClass('showing');
});



$('.fa').on('click', function(){
  $('.modal-container, .modal').removeClass('showing');
  console.log('clicked');
});
