const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

// describe("Engineer", () => {
describe("getSchool", () => {
  // Positive Tests
  it("should add a new 'name' property to its 'Employee'object", () => {
    // Arrange
    const schoolText = "Denver University";
    const school = new employee.school();

    // Act
    employee.getSchool(schoolText);

    // Assert
    expect(employee.school.length).toEqual(1);
    expect(employee.school instanceof Employee).toEqual(true);
    expect(employee.school.text).toEqual(phoneText);
  });

  // Exception test //
  it("should throw an error if not provided text", () => {
    // Arrange
    const employee = new employee.school();
    const err = new Error("Expected parameter 'text' to be a non empty string");
    //Define//
    const cb = () => employee.getSchool();

    // Assert //
    expect(cb).toThrowError(err);
  });
});
