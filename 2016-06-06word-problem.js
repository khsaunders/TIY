array holds top choices
string + position of thing


console.log ("My favorite food is" + [i])



var foodArray = ["pizza", "Jimmy Johns", "beer", "sushi", "cereal"]

// var len = foodArray.length

for (i = 0; i < foodArray.length; i++);
console.log ("My first favorite food is " + foodArray [0]);
console.log ("My second favorite food is " + foodArray [1]);
console.log("My first favorite food is " + foodArray [2]);


//  if (i in foodArray) {
// console.log("My first favorite food is " +  foodArray[i])}

var foodArray = ["pizza", "Jimmy Johns", "beer", "sushi", "cereal"]

// var len = foodArray.length

How David did it:

I think he added like a name to define shit here

for (i = 0; i < foodArray.length; i++);
return ("My # " + number + " choice is " + foodArray[0])

console.log ()


/*AJAX (Francis)
Asynchronus
JavaScript
and XML

Its pretty much just a really long function. Greeeaaaaat. Pulls info from other sites. Asynchronous They don't all load at the same time. Power when doing apps. Don't have to wait for HTML or JS to load. Just have to call for the info at the right time. SO long as internet is working, you should be good. ALlows JS to ask server for data without refreshing page. First step to single page app.


Info comes from a JSON file. It looks similar to an opject. Kind of like a huge array combined with some kind of CSS page. Curly braces and a lot of information. So you can call for information so you don't have to hard code it. JSON files in F.E. tend to be written by hand. The back end tends to generate JSON files for us. We just pull it to display. We will have to make a few simple JSON files for this class.

$get.JSON('https://api.github.com/users')
.done(function(data) {

//When this call is done, run the done part. That top part is changeable.*/

console.log(data.map(function(u) {
return u.login
}
});


She's going to build one in front of us in JS Bin. Don't forget to add library in JS Bin.
Psuedo coding:
//1. User enters GitHub name
//2. Information is pulled
//3. Information is displayed on page under form

$(function() {
$('.user-form').on('submit', function(e){
e.preventDefault();

 var ghLogin = ($input[name='gh-login']).val(); //created variable gh Login which calls on value of input. Asking for value of that specific class there. The gh-login is specifically what you are searching in the JSON file. Square brackets here are specifically targeting a thing.
  $get.JSON('https://api.github.com/users' + ghLogin) //Have JSON get that stuff from the specified api. Getting users gh info
  .done(showUser)
  .fail (showError);

});

//NOTE you can only make like 100 calls to gh a day

function showError(reg, status, err){
  err = err || {};
  err.message = err.message || status;
  console.log(err);
  show('gh-error-template'), {message : err});
}

function show (template, model)

var fn = _.tempaltes ($('#' + template).html(), { //lodash is another utility library, like jQuery but smaller. it has a lot of cool functions to call on. Templating is a thing.
variable: 'm'});
$('.user-info').html(fn(model));
}
{}});

//Looking at GitHub documentation. Use info to own specification. Looks weird as fuck. We basically just have to scroll through this and read it all. We have to apparently read a bunch of api documentation now? Like how you talk to it. Really avoid api's without documentation.


//Also, In looking at the lodash templates, there's <%- m .message %>. Those tags are called skull tags. Used frequently in the back end. It uses a type of template for stuff. 'm.' means model. It is showing the model type.
