// var is function scoped
function test(condition) {
  var value = "Himanshu";
  if (condition) {
    var value = "Chawla";
    console.log(value); // chawla
  }

  console.log(value); // Himanshu
}

// let is block scoped
function test(condition) {
  let value = "Himanshu";
  if (condition) {
    value = "Chawla";
    console.log(value); // Chawla
  }

  console.log(value); // Chawla
}

// const cannot reassigned
function test(condition) {
  const value = "Himanshu";
  if (condition) {
    value = "Chawla"; // type error
  }

  console.log(value); // type error
}
