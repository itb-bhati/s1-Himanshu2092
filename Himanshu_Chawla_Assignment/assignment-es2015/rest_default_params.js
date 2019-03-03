// rest and default params

function simple(a, _default = 2, ...rest) {
  console.log(a);
  console.log(_default);
  console.log(rest);
}

simple(10, undefined, 20, 30, 40); // 10, 2, [20, 30, 40]
