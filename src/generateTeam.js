const generateTeam = (team) => {
  console.log(team);
  const generateManager = (manager) => {
    return `<div class="card d-flex flex-row flex-wrap">
        <ul class="card-title d-flex flex-column">${manager.getName()}
        <li class="d-flex mx-3 align-items-center">${manager.getRole()}</li>
        <li class="d-flex mx-3 align-items-center">${manager.getId()}</li>
        <li class="card-link d-flex mx-3 align-items-center">${manager.getEmail()}</li>
        <li class="d-flex mx-3 align-items-center">${manager.getOfficeNumber()}</li>
        </ul></div>`;
  };
  const generateEngineer = (engineer) => {
    return `<div class="card container d-flex flex-row flex-wrap">
        <ul class="card-title d-flex flex-column">${engineer.getName()}
        <li class="d-flex mx-3 align-items-center">${engineer.getRole()}</li>
        <li class="d-flex mx-3 align-items-center">${engineer.getId()}</li>
        <li class="card-link d-flex mx-3 align-items-center">${engineer.getEmail()}</li>
        <li class="card-link d-flex mx-3 align-items-center"><a href="https://www.github.com/${engineer.getGithub()}"</li>
        </ul></div>`;
  };

  const generateIntern = (intern) => {
    return `<div class="card d-flex flex-row flex-wrap">
        <ul class="card-title d-flex flex-column">${intern.getName()}
        <li class="d-flex mx-3 align-items-center">${intern.getRole()}</li>
        <li class="d-flex mx-3 align-items-center">${intern.getId()}</li>
        <li class="card-link d-flex mx-3 align-items-center">${intern.getEmail()}</li>
        <li class="d-flex mx-3 align-items-center">${intern.getSchool()}</li>
        </ul></div>`;
  };
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

module.exports = (team) => {
  return ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      ref="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    />
    <link ref="stylesheet" href="./style.css"/>
    <title>Team Generator</title>
  </head>

  <body>
    <header id="header" class="jumbotron">My Team</header>
    ${generateTeam(team)}

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html> `;
};
