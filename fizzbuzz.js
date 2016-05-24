

for (var i = 0; i < 100; i++){

	if(i % 15 === 0){
		console.log ('FizzBuzz')
	}

	else if (i % 3 === 0){
		console.log ('Fizz');
	}
	else if (i % 5 === 0){
		console.log ('Buzz');
	}

	else {
		console.log(i);

	}

}


//The really interesting thing with this problem is that I found I was a git repo that I came across suggested simply multiplying the numbers 3 and 5 together for one of the if's. Alternately, Aaron pointed out that I could just use && as well.
