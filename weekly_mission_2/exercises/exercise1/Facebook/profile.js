const profile = {
    usernameAssociated: "Jonathan Rodriguez",
    personalLink: "https://www.facebook.com/userName",
    numberOfFriends: 500,
    profileID: "AHFI234WDEFa00",
    numberOfPosts: 13458,
    dateCreated: new Date(),
    getNumberOfFriends: function(){
        return `${this.usernameAssociated} has ${this.numberOfFriends} friends on Facebook`
    },
    getGeneralInfo: function(){
      return `The profile ${this.personalLink} was created on ${this.dateCreated}`
    }
   }
   
   console.log("Enlace personalizado: " + profile.personalLink)
   console.log("Numero de posts: " + profile.numberOfPosts)
   console.log(profile.getNumberOfFriends())
   console.log(profile.getGeneralInfo())