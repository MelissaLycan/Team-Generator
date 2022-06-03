class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  printInfo() {
    console.log(`This employees name is ${this.name}`);
    console.log(`Their id is ${this.id}`);
    console.log(`Email them here ${this.email}`);
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }

  getRole() {
    return `Employee`;
  }
}
module.exports = Employee;
