// Follow along with the examples here
function doNothing(){}
function sayHello() {
  console.log("Hello!");
}
sayHello()

function sayHelloToGuadalupe(){
    console.log("Hello, Guadalupe")
}

sayHelloToGuadalupe()

function doSomething(thing) {
  console.log(thing);
}

doSomething("anything"); // passing the argument 'anything' into our function

function sayHelloTo(firstname){
    console.log(`Hello, ${firstname}`)
}

sayHelloTo("John")
sayHelloTo(1)

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Hello", "Judah")

function add(x, y) {
  return x + y;
}
console.log(add(1,2))

function say(greeting, firstName) {
    console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));