const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
// const Roster = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require("path");
const teamMembers = [];
const idArray = [];
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");
const render = require("./src/generateTeam.js");

console.log("Welcome to the Team Generator");
function app() {
  function getManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your team managers name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the managers id?",
          name: "id",
        },
        {
          type: "input",
          message: "What is their email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is their phone number",
          name: "officeNumber",
        },
      ])
      .then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        teamMembers.push(manager);
        idArray.push(response.id);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of team member would you like to add?",
          choices: ["engineer", "intern", "No One else to add"],
          name: "role",
        },
      ])
      .then((response) => {
        switch (response.role) {
          case "engineer":
            addEngineer();
            break;

          case "intern":
            addIntern();
            break;

          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your team engineers name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the engineers id?",
          name: "id",
        },
        {
          type: "input",
          message: "What is their email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is their github username?",
          name: "github",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );

        teamMembers.push(engineer);
        idArray.push(response.id);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your interns name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the interns id?",
          name: "id",
        },
        {
          type: "input",
          message: "What is their email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is school did they attend?",
          name: "school",
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        teamMembers.push(intern);
        idArray.push(response.id);
        createTeam();
      });
  }

  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), "utf-8");
  }
  getManager();
}

app();
