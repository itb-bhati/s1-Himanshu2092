// iterables
var myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let value of myIterable) {
  console.log(value);
  // 1
  // 2
  // 3
}

console.log([...myIterable]); // [1, 2, 3]

// generators
function* gen() {
  yield* ["a", "b", "c"];
}

for (let a of gen()) {
  console.log(a);
}
