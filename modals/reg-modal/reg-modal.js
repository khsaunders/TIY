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
  $(this).text('Sign up, fool!');
  $('.modal-container').addClass('showing');
});

$('.close, .modal-container').on('click', function(){
  $('modal-container').removeClass('showing');
});
