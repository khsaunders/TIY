$(function(){
  'use strict';

});



$("textarea").keyup(function(){

  var textValue =
  $('textarea').val().length;

  var maxLength = 140;
  console.log(textValue);

  $('.remaining').text(maxLength - textValue + " characters remaining");
  console.log(textValue);

  var hi = 'hello!'
  console.log(hi);

});
