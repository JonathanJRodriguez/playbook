const video = {
    title: "Trolololo",
    likes: 100,
    description: "Video by Eduard Khin",
    numberOfViews: 4000,
    dateCreated: new Date(),
    numberOfComments: 50,    
    getViewsandLikes: function(){
        return `This video ${this.title} has ${this.likes} likes and ${this.numberOfViews} views`
    },
    getGeneralInfo: function(){
      return `This video was uploaded on ${this.dateCreated} and has ${this.numberOfComments} comments`
    }
   }
   
   console.log("Nombre del video: " + video.title)
   console.log("Descripcion: " + video.description)
   console.log(video.getViewsandLikes())
   console.log(video.getGeneralInfo())