const comment = {
    user: "Frank Saldana",
    likes: 100,
    content: "La gastronomía mexicana nunca decepciona",
    dateCreated: new Date(),
    videoNameAssociated: "Suadero estilo Taqueria | La Capital",
    numberOfResponses: 19,    
    getComment: function(){
        return `The user ${this.user} commented ${this.content}`
    },
    getGeneralInfo: function(){
      return `This comment was uploaded on ${this.dateCreated} to the video ${this.videoNameAssociated}`
    }
   }
   
   console.log("Nombre del usuario: " + comment.user)
   console.log("Comentario: " + comment.content)
   console.log(comment.getComment())
   console.log(comment.getGeneralInfo())