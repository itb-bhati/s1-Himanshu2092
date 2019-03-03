class Profile {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get userName() {
    return this.getUserName();
  }

  getUserName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

let profile = new Profile("Himanshu", "Chawla");

console.log(profile.userName);
