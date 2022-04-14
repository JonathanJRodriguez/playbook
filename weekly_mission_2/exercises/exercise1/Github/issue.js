const issue = {
    title: "Mi primer issue",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 10,
    labels: ["bug", "duplicate", "invalid"],
    author: "JonathanJRodriguez",
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} is associated with ${this.repositoryNameAssociated} repository`
    }
   }
   
   console.log("Nombre del issue: " + issue.title)
   console.log("Labels: " + issue.labels)
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())