const obj = {
  name: "Himanshu",
  location: "Delhi",
  country: "India"
};

const { name: username, location, country, age = 20 } = obj;

console.log(username);
console.log(location);
console.log(country);
console.log(age);
