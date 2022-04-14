const post = {
    user: "Jonathan Rodriguez",
    content: "Hola a todos mis amigos de Facebook!",
    contentType: "Text",
    numberOfLikes: 300,
    dateCreated: new Date(),
    getContentAndLikes: function(){
        return `The comment ${this.content} has ${this.numberOfLikes} likes`
    },
    getGeneralInfo: function(){
      return `This comment was created on ${this.dateCreated} by ${this.user} and has ${this.numberOfLikes} likes`
    }
   }
   
   console.log("Nombre del usuario: " + post.user)
   console.log("Tipo de post: " + post.contentType)
   console.log(post.getContentAndLikes())
   console.log(post.getGeneralInfo())