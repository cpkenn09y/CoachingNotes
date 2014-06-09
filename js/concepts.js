// LOOPING

for (var i = 0; i < 5; i++) {
 console.log(i)
}

var array = [1,2,3,4,"bear"]

for (index in array) {
  console.log(index)
}

var n = 10

while (n < 15) {
  n += 1
  console.log(n)
}

// CONDITIONALS

var y = "Fence Lizard"

if (y === "Fence Lizard") {
  alert(y)
} else if {

} else {

}

// FUNCTION SCOPED / CLOSURE

function parentFunction() {

  var sport = "baseball"

  function childFunction() {

    alert(sport)

  }

  childFunction()

}

// FUNCTION DECLARATION

var myFavFunction = function() { // FUNCTION EXPRESSION

}

function dance() { // FUNCTION DECLARATION
}


// EXPLICIT RETURN

function dance() {
  return "MAKARENA"
}

// DEBUGGER


function parentFunction() {

  var sport = "baseball"

  function childFunction() {

    var fence = "lizard"

  }

  debugger

  childFunction()

}


// CONSTRUCTOR

var Human = function(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

// DATA SHAPES

// Primitives
// * String
// * Integer

// Complex
// * Array
// * Object Literals

// OBJECT Literals

var myObjLit = {a : "yolo", b: "yay", 1: "ship!"}

// Global vs Local

// * make sure to use 'var', otherwise we pollute the global namespace

// PROTOTYPING

var Human = function(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

Human.prototype.dance = function() {
  console.log(this.name + ' dances! Hard!')
}

// NULL vs UNDEFINED

var life = null

// CAPITALIZATIONS

// snake_case
// CamelCase
// mixedCase













