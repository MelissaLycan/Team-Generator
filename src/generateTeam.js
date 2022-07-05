const generateTeam = (team) => {
  console.log(team);
  const generateManager = (manager) => {
    return `<section class="card bg-info rounded border border-dark container d-flex justify-content-around mt-5 mx-5">
    <ul class= "card-title bg-info text-dark d-flex flex-column mx-3 align-items-center"><h3>${manager.getName()}</h3>
        <li class="card-text d-flex mx-3 align-items-center">${manager.getRole()}</li>
        <li class="card-text d-flex mx-3 align-items-center">${manager.getId()}</li>
        <li class="card-link d-flex mx-3 align-items-center">${manager.getEmail()}</li>
        <li class="card-text d-flex mx-3 align-items-center">${manager.getOfficeNumber()}</li>
        </ul></section>`;
  };
  const generateEngineer = (engineer) => {
    return `<section class="card bg-info rounded border border-dark container d-flex justify-content-around mt-5 mx-5 h-100">
        <ul class="card-title bg-info text-dark d-flex flex-column"><h3>${engineer.getName()}</h3>
        <li class="card-text d-flex mx-3 align-items-center">${engineer.getRole()}</li>
        <li class="card-text d-flex mx-3 align-items-center">${engineer.getId()}</li>
        <li class="card-link card-link d-flex mx-3 align-items-center">${engineer.getEmail()}</li>
        <li class="btn card-link d-flex mx-3 align-items-center"><a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul></section>`;
  };

  const generateIntern = (intern) => {
    return `<section class="card bg-info d-flex rounded border border-dark container justify-content-around mt-5 mx-5">
        <ul class="card-title bg-info text-dark d-flex flex-column"><h3>${intern.getName()}</h3>
        <li class="card-text d-flex mx-3 align-items-center">${intern.getRole()}</li>
        <li class="card-text d-flex mx-3 align-items-center">${intern.getId()}</li>
        <li class="card-link card-link d-flex mx-3 align-items-center">${intern.getEmail()}</li>
        <li class="card-link d-flex mx-3 align-items-center">${intern.getSchool()}</li>
        </ul></section>`;
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>

  </head>

  <body class="d-flex">
    <header class="container d-flex h-50 w-100 bg-white justify-content-around">My Team</header>
    
     <main class="d-flex flex-row flex-wrap justify-content-center justify-space-around">
    ${generateTeam(team)}
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html> `;
};
