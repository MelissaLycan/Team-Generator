const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

//Describes engineer class
describe("Engineer class", () => {
  it("Tests for github name and role override", () => {
    //Define
    const engineer = new Engineer("Fred", "13", "fred@email.com", "gitFred90");
    //Assert
    expect(typeof engineer.github).toBe("string");
  });
  it("should get github username", () => {
    const engineer = new Engineer(
      "Jerry",
      "14",
      "jerry@email.com",
      "gitJerry90"
    );
    const github = engineer.github;

    expect(engineer.github).toBe(github);
  });
  it("should set role to Engineer", () => {
    const engineer = new Engineer("Tom", "15", "tom@email.com", "gitTom90");

    expect(engineer.getRole()).toBe("Engineer");
  });
});
