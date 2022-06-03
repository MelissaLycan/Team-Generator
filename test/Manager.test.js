const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

// describe("Manager", () => {
describe("getOfficeNumber", () => {
  // Positive Tests
  it("should add a new 'name' property to its 'Employee'object", () => {
    // Arrange
    const phoneText = "(303)945-0182";
    const officeNumber = new employee.officeNumber();

    // Act
    employee.getOfficeNumber(phoneText);

    // Assert
    expect(employee.officeNumber.length).toEqual(1);
    expect(employee.officeNumber instanceof Employee).toEqual(true);
    expect(employee.officeNumber.text).toEqual(phoneText);
  });

  // Exception test //
  it("should throw an error if not provided text", () => {
    // Arrange
    const employee = new employee.officeNumber();
    const err = new Error("Expected parameter 'text' to be a non empty string");
    //Define//
    const cb = () => employee.getOfficeNumber();

    // Assert //
    expect(cb).toThrowError(err);
  });
});
