//I found this code after days of being hung up on writing some kind of function for my accordion. This was posted on Code Pen.
//Interestingly, the creator, Will Mitchell, refers to it as a widget. There are bits of code in here that I find both fascinating and really scary.
//The URL for this code is http://codepen.io/wakamoleguy/pen/lJhys


(function () {
  var accordions, i;

  // Author's note: "Make sure the browser supports what we are about to do."
  if (!document.querySelectorAll || !document.body.classList) return;// It didn't occur to me that I could use 'or' in an 'if' statment. I'm sure there are risks associated with this. Because JavaScript is so picky about everything all the time.

  // Author's note: "Using a function helps isolate each accordion from the others"
  // What he states in that note is consistent with that we'd talked about in class with the todo list. The way he defines his variables is confusing to me, though. I know we typically only chain something if it's all part of the same element <--(I think I'm using that word correctly here), so seeing this variable all chained together weirded me out.
  function makeAccordion(accordion) {
    var targets, currentTarget, i;

    targets = accordion.querySelectorAll('.accordion > * > h1'); //This line also freaked me out. I know the asterisk tends to mean 'all.' I don't know what the '> * >' indicates, but it appears to be integral to the opening of the panels. Without that piece, nothing happens upon clicking.
    for(i = 0; i < targets.length; i++) { //This looks like for loops we've worked with before, so this part makes sense to me
      targets[i].addEventListener('click', function () {
        if (currentTarget)
          currentTarget.classList.remove('expanded');

        currentTarget = this.parentNode;
        currentTarget.classList.add('expanded');
      }, false);
    }

    accordion.classList.add('js');
  }

  // Authoer's note : "Find all the accordions to enable"
  accordions = document.querySelectorAll('.accordion');

  // Author's note: "Array functions don't apply well to NodeLists"
  for(i = 0; i < accordions.length; i++) {
    makeAccordion(accordions[i]); //He targets this array on the line above
  }

})();
