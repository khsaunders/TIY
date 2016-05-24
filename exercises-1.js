/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()

var names = ['Finn', 'Rey', 'BB-8', 'Poe']

names.sort()

    ["BB-8", "Finn", "Poe", "Rey"]

//It organizes whatever is in the array in alphabetical order!

////////////////

// .concat()

var westeros = ['Jon', 'Sansa', 'Brienne', 'Hodor'],
    hogwarts = ['Hermione','Ron','Harry','Hagrid'];

  var westerosHogwarts = westeros.concat(hogwarts);

  console.log(bookFandom);

      [ 'Jon', 'Sansa', 'Brienne', 'Hodor', 'Hermione', 'Ron', 'Harry', 'Hagrid' ]

//It combines the contents of both arrays

////////////////

// .indexOf()

var names = ['Finn', 'Rey', 'BB-8', 'Poe']

array.indexOf('BB-8'); // 0 is the result
array.indexOf('Rey'); // 1 is the result

//It can find either the position of an item in an array OR help find the occurrences of an item

////////////////

// .split()

var hodor = 'Hold the door';

var splits = hodor.split(' ', 2);

console.log(splits);

    ['Hold''the']

//This helps arrange strings into arrays (???)

////////////////

// .join()

var hogwarts = ['Hermione','Ron','Harry','Hagrid'];

var characters = hogwarts.join()

//Apparently this assigns the items in the 'hogwarts' variable to the 'characters' variable.

////////////////

// .pop()

var adventureTime = ['BMO', 'Finn the Human', 'Jake the Dog', 'Princess Bubblegum'];

console.log(adventureTime);

var popped = adventureTime.pop

console.log(adventureTime);
console.log(popped);

//According to Mozilla's Developer Network, this is supposed to remove the last item in an array. I'm not sure if there is something wrong with my syntax, but when I followed MDN's example of syntax, it didn't seem to do what it should have done.

////////////////

// .push()

var broadCity = ['Ilana','Abbi', 'Lincoln', 'Bevers'];

var otherCharacters = broadCity.push('Trey', 'Jaime');

console.log(otherCharacters);

    6

//This allows a string to be added to another string or array

////////////////

// .slice()

var gryffindor = ['McGonagall', 'Harry', 'Hermione', 'Ron', 'Neville']

var whoRunTheShow = gryffindor.slice(0,2);

console.log(whoRunTheShow);

    ['McGonagall', 'Hermione']

////////////////

// .splice()

var adventureTime = ['BMO', 'Finn the Human', 'Jake the Dog', 'Princess Bubblegum'];

var moreAdventureTime = adventureTime.splice(2, 0, 'Lemongrab');

    [ 'BMO', 'Finn the Human', 'Lemongrab', 'Jake the Dog', 'Princess Bubblegum' ]

////////////////


// .shift()

var westeros = ['Jon', 'Sansa', 'Brienne', 'Hodor'];

console.log('westeros before: ' + 'Brienne');

var shifted = westeros.shift();

console.log('westeros after: '+ westeros);

westeros before: Brienne
westeros after: Sansa,Brienne,Hodor

//This is apparently useful to remove certain parts of an array? Or to figure out what comes after a certain point in an array? It looks like I can basically tell this array that I want to see what exactly comes after a specific point.

////////////////

// .unshift()

var arr = [ 4, 5, 9];

arr.unshift(-3, -2);

    5

//This is apparently some means to adding something to an array?? It puts in the "unshifted" items with the original list. The examples I viewed pertained specifically to integers. I'm not sure if that's the rule with this for sure or not.

////////////////

// .filter()

???

////////////////

// .map()

//THIS EXAMPLE WAS TAKEN DIRECTLY FROM THE MOZILLA DEVELOPER'S NETWORK. These last two concepts are extremely unclear to me. It seems as though they would directly with numbers, but I haven't been able to think of a 'real world' applicaiton of them. For right now, I'm just going to accept that this is just an introduction to these, and I will pay special attention to these last two concepts in the future (because, as of right now, I am thoroughly confused).

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]
