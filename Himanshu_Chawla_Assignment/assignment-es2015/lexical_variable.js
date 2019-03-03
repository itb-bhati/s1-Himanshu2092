/* 
lexical variables scoping (static scoping) are private scoping. 
It can access lexical variables inside the global scope in which they are assigned.
*/

// lexical variable scope
function parent() {
  var x = 10;
  function child() {
    console.log(x);
  }
}

// lexical code example
class Parent {
  constructor() {
    this.name = "Himanshu";
    this.getParentScope = function() {
      setTimeout(() => {
        console.log(this);
        console.log(this.name);
      });
    };
  }
}

let parent = new Parent();
parent.getParentScope();
