  // var myHeading = document.querySelector = ('h1').style.color= #E21E1E;
  // myHeading.innerHTML= 'About Me'

  //Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.

document.querySelector('body').style.fontFamily = "sans-serif";

var img = document.createElement('img');
img.setAttribute('src', 'https://scontent-atl3-1.xx.fbcdn.net/t31.0-8/12030373_1071009966243955_1886191460089721634_o.jpg');
img.setAttribute('alt', 'picture' );
img.setAttribute('width', '50%');
img.setAttribute('height', '90%');
document.body.appendChild(img);

  // document.querySelector("li").style.color ='red';

  // first attempt at loop for text color
  // if{
  //   (document.querySelector("li"))
  //     print(.style.color = 'red';)
  // }


  //second attemp at loop for text color
  // var colorStyle = document.getElementById()
  // if (colorStyle) {
  //   document.querySelector("li").style.color = 'red';
  // }

  // third attempt at loop for text color
  // if (fullName) {
  //   document.querySelector("li").style.color = 'red';
  // }
  //
  // else if (hometown){
  //   document.querySelector("li").style.color = 'red';
  // }
  // else if (movie){
  //   document.querySelector("li").style.color = 'red';
  // }
  // else (food){
  //   document.querySelector("li").style.color = 'red';
  // }

  //replace spans with own information
var fullName = document.getElementById('fullname');
fullName.innerHTML = 'Kaitlin Saunders';

var hometown = document.getElementById('hometown');
hometown.innerHTML = 'Sammamish, WA';

var movie = document.getElementById ('movie');
movie.innerHTML = 'Mad Max: Fury Road';

var food = document.getElementById ('food');
food.innerHTML = 'pizzaaaa';

//Put each goal in JS to keep track of stuff
//change class then make it color red.

// document.querySelector("li").style.color ='red';

var listThings = document.querySelectorAll("li");

for (var i=0; i <= listThings.length; i ++){
  listThings[i].style.color = 'red'; //"and these are the things we want you to do"
  listThings[i].className = 'listitems';
};

//for says "for this thing..." parentheses give it parameters. we give it a variable via i.

// var img = document.createElement("img");
// img.setAttribute( 'src', 'https://www.facebook.com/photo.php?fbid=891850564159540&set=t.590813030&type=3&theater');
// img.setAttribute("alt", 'picture' );
// img.setAttribute("width", '25%');
// img.setAttribute("height", '60%');
// document.body.appendChild('img');
