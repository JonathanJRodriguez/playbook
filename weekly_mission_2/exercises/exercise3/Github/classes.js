//Modelado de clases de Github
class Issue {
  constructor(title, repository, status, comments, labels, author) {
    this.title = title;
    this.repositoryNameAssociated = repository;
    this.status = status;
    this.numberOfComments = comments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
  }
  getTitleAndAuthor() {
    return `This issue ${this.title} was created by ${this.author}`;
  }
  getGeneralInfo() {
    return `This issue ${this.title} is associated with ${this.repositoryNameAssociated} repository`;
  }
}

class PullRequest {
  constructor(title, branchName, status, repositoryNameAssociated) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = new Date();
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
  }

  getStatus() {
    return `This pull request is ${this.status} on branch ${this.branchName}`;
  }
  getTitleAndAuthor() {
    return `This pull request ${this.title} was created on ${this.dateCreated}`;
  }
}

class Repository {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

//Instancias de cada clase
//issue
console.log("Instancia de Issue");
const issue = new Issue(
  "mi Primer Issue",
  "LaunchX",
  "Open",
  10,
  ["bug", "duplicate", "invalid"],
  "JonathanJRodriguez"
);
console.log("Nombre del issue= " + issue.title);
console.log("Labels= " + issue.labels);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

//pullRequest
console.log("\nInstancia de PullRequest");
const pullRequest = new PullRequest(
  "Mi pull request",
  "main",
  "Open",
  "LaunchX"
);
console.log("Nombre del pull request: " + pullRequest.title);
console.log("Status: " + pullRequest.status);
console.log(pullRequest.getTitleAndAuthor());
console.log(pullRequest.getStatus());

//repository
console.log("\nInstancia de Repository");
const repo = new Repository(
  "LaunchX",
  "carlogilmar",
  "JavaScript",
  100,
  199,
  299,
  10,
  10
);
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());
