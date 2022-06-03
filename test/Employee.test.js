const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an 'Employee' object with a 'name' property set to an empty string when called with the 'new' keyword", () => {
      // Arrange
      const employee = new Employee();
      // Assert
      expect(employee).toEqual([]);
    });
  });
});

describe("getName", () => {
  // Positive Tests
  it("should add a new 'name' property to its 'Employee'object", () => {
    // Arrange
    const nameText = "Melissa Lycan";
    const name = new employee.name();

    // Act
    employee.getName(nameText);

    // Assert
    expect(employee.name.length).toEqual(1);
    expect(employee.name instanceof Employee).toEqual(true);
    expect(employee.name.text).toEqual(nameText);
  });

  // Exception test //
  it("should throw an error if not provided text", () => {
    // Arrange
    const employee = new employee.name();
    const err = new Error("Expected parameter 'text' to be a non empty string");
    //Define//
    const cb = () => employee.getName();

    // Assert //
    expect(cb).toThrowError(err);
  });
});

describe("getId", () => {
  // Positive test
  it("should return the employee id element in the Employee Object", () => {
    // Arrange
    const id = new employee.id("");
    const text1 = "4321";
    let getId;

    // Act
    employee.getId(text1);

    // Assert
    expect(employee.id instanceof Employee).toEqual(true);
    expect(employee.id).toEqual(text1);
  });
});

describe("getEmail", () => {
  // Positive test
  it("should return the employee id element in the Employee Object", () => {
    // Arrange
    const id = new employee.email("");
    const text1 = "melissamlycan@gmail.com";
    let getEmail;

    // Act
    employee.getEmail(text1);

    // Assert
    expect(employee.email instanceof Employee).toEqual(true);
    expect(employee.email).toEqual(text1);
  });
});
