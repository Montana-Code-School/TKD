/*
  ES6!

  Here are some of the features of ES6 that we are going to go over:

  Fat Arrow Functions
  Enhanced Object Literals
  let & const keywords
*/


/*
  FAT ARROW FUNCTIONS

  Fat arrow functions (=>) are included in ES6, and they help us create cleaner functions.
  We no longer have to write function(){} every time we need to put a function somewhere, instead,
  we can use a ()=>{} syntax.

  If your function has only one expression, you don't even need the curly braces, you can just do something like:

  (x,y)=>x*y;

  and it would return x*y

*/

var oldFunction = function(x,y){
  console.log("This is the old way.");
};

var newFunction = (x,y) => {
  console.log("The new way!")
};
//or
var newFunction = (x,y) => console.log("And this is the new way!");

oldFunction();
newFunction();

/*
  Now, here are some examples of how we can actually clean up something that looks typically very messy.
*/

var people = [{ name: "Bill", age: 54 }, { name: "Thomas", age: 15 }, { name: "Erin", age: 22 }, { name: "Tabitha", age: 33 }];

// Now, if I want an array of the names only, I might do something like this:

console.log(
  people.map(function(person){
    return person.name;
  })
);

// Here is how we can do the same thing using arrow functions (this time returning an array of ages)

console.log(
  people.map(person=>person.age)
);

//See, it's cleaner.



/*
  ENHANCED OBJECT LITERALS

  Sometimes when you are working with object literals, it can become messy and redundant looking. Below are a few ES6 tricks when
  using object literal notation.
*/

//With ES5, you will need to specify the name and value for each, even if they are the same like they are below:
function person(name, age) {
	return {
		name: name,
		age: age
	};
}

console.log(person("Bob",15));

/*
  With ES6, we can actually just list the properties, and they will be assigned to *existing* variable names. So if there is a name and age
  accessible in the current scope, we can just list them like this:
*/

function person(name,age) {
	return {
		name,
    age
	};
}

console.log(person("Sarah",24));

//These will function the same, but once again, a little nicer to work with.

/*
  Now, we can also enjoy some improvements to the way we define functions within objects.
*/

//With ES5, you would create a member method like this:
function person(name, age) {
	return {
		name: name,
		age: age,
    getOlder: function(){
      this.age++;
    }
	};
}

console.log(person("Eric",25));

/*
  With ES6, we can make it a *little* easier, ommiting the function keyword.
*/

function person(name,age) {
	return {
		name,
    age,
    getOlder(){
      this.age++;
    }
	};
}

var obj = new person("Aaron",43);//age is 43
obj.getOlder();
console.log(obj);//now age is 44


/*
  LET & CONST VARIABLE KEYWORDS

  We are used to using 'var' in JavaScript, but with ES6 comes a few new keywords, const and let.

  Something to keep in mind:

  var is function scope
  let and const are block scope (between curly braces)

  This means that var can be used anywhere within the function it's defined, but let and const are only applicable inside of the current set of curly braces.
  Of course you can still define these at the top of the page to apply to all code, globally.
*/

const myConstantVariable = "This variable will not change, so it is a constant";
let myChangingVariable = "This might change, so I use the let keyword, and it will only be used in the current block";

/*
  These additions help us be more explicit in how we define variables. We now can label things that change vs things that don't change, and that can
  be really helpful down the road.
*/
