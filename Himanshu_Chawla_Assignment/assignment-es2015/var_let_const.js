// var is function scoped
function test_1(condition) {
  var value = "Himanshu";
  if (condition === 1) {
    var value = "Chawla";
    console.log(value); // chawla
  }

  console.log(value); // Himanshu
}

// let is block scoped
function test_2(condition) {
  let value = "Himanshu";
  if (condition === 1) {
    value = "Chawla";
    console.log(value); // Chawla
  }

  console.log(value); // Chawla
}

// const cannot reassigned
function test_3(condition) {
  const value = "Himanshu";
  if (condition === 1) {
    value = "Chawla"; // type error
  }

  console.log(value); // type error
}

test_1(1);
test_2(1);
test_3(1);
