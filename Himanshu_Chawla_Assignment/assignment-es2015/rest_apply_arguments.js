// arguments and ...rest params
function test(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(...rest);
}

test(10, 20, 30, 40, 50, 60);

// apply method
var person1 = { name: "Marvin", age: 42, size: "2xM" };
var person2 = { name: "Zaphod", age: 42000000000, size: "1xS" };

var say = function(greeting) {
  alert(greeting + ", " + this.name);
};

var update = function(name, age, size) {
  this.name = name;
  this.age = age;
  this.size = size;
};

var dispatch = function(person, method, args) {
  method.apply(person, args);
};

dispatch(person1, say, ["Hello"]);
dispatch(person2, update, ["Slarty", 200, "1xM"]);
