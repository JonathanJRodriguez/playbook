const channel = {
    name: "Johnn RP",
    subscribers: 100,
    description: "Here are some videos made by me",
    numberOfViews: 4000,
    dateCreated: new Date(),
    getViewsandSubscribers: function(){
        return `This channel ${this.name} has ${this.subscribers} subscribers and ${this.numberOfViews} views`
    },
    getGeneralInfo: function(){
      return `This channel was created on ${this.dateCreated} and has ${this.numberOfViews} views`
    }
   }
   
   console.log("Nombre del canal: " + channel.name)
   console.log("Descripcion: " + channel.description)
   console.log(channel.getViewsandSubscribers())
   console.log(channel.getGeneralInfo())