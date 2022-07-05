const Employee = require("../lib/employee");

// describes the employee Class -  accepts (name, id, email)
describe("Employee class", () => {
  it("Tests for name, id, email", () => {
    //Define
    const employee = new Employee("Fred", "13", "fred@email.com");
    //Assert
    expect(typeof employee.getName()).toBe("string");

    expect(typeof employee.getId()).toBe("string");

    expect(typeof employee.getEmail()).toBe("string");
  }); //execute
  it("should get name", () => {
    const employee = new Employee("Jerry", "14", "jerry@email.com");
    const { name } = employee;

    expect(employee.getName()).toBe(name);
  });

  it("should get ID", () => {
    const employee = new Employee("Tom", "15", "tom@email.com");
    const { id } = employee;

    expect(employee.getId()).toBe(id);
  });

  it("should get email", () => {
    const employee = new Employee("Angel", "16", "angel@email.com");
    const { email } = employee;

    expect(employee.getEmail()).toBe(email);
  });

  it("should get role", () => {
    const employee = new Employee("Eduardo", "9", "Eduardo@email.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
