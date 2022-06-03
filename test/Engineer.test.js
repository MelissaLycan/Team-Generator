const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

// describe("Engineer", () => {
describe("getGitHub", () => {
  // Positive Tests
  it("should add a new 'name' property to its 'Employee'object", () => {
    // Arrange
    const gitHubText = "MelissaLycan";
    const github = new employee.github();

    // Act
    employee.getGitHub(gitHubText);

    // Assert
    expect(employee.github.length).toEqual(1);
    expect(employee.github instanceof Employee).toEqual(true);
    expect(employee.github.text).toEqual(gitHubText);
  });

  // Exception test //
  it("should throw an error if not provided text", () => {
    // Arrange
    const employee = new employee.github();
    const err = new Error("Expected parameter 'text' to be a non empty string");
    //Define//
    const cb = () => employee.getGitHub();

    // Assert //
    expect(cb).toThrowError(err);
  });
});
