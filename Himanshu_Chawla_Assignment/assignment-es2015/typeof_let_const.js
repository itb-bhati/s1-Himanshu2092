function simple() {
  let a;
  if (typeof a) {
    console.log(a); // undefined
  }
}

function _simple() {
  const a = 10;
  if (typeof a) {
    console.log(a); // number
  }
}

simple(); // undefined
_simple(); // number
