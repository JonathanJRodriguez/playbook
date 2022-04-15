//Definicion de clases
class Post{
    constructor(user,content,contentType, numberOfLikes){
        this.user = user;
        this.content = content;
        this.contentType = contentType;
        this.numberOfLikes = numberOfLikes;
        this.dateCreated= new Date();
    }
    getContentAndLikes(){
        return `The comment ${this.content} has ${this.numberOfLikes} likes`
    }
    getGeneralInfo(){
      return `This comment was created on ${this.dateCreated} by ${this.user} and has ${this.numberOfLikes} likes`
    }
   }
   
   class Profile{
       constructor(usernameAssociated,personalLink,numberOfFriends,profileID,numberOfPosts){
        this.usernameAssociated = usernameAssociated; 
        this.personalLink = personalLink;
        this.numberOfFriends = numberOfFriends; 
        this.profileID = profileID;
        this.numberOfPosts = numberOfPosts;
        this.dateCreated = new Date();
       }
    getNumberOfFriends(){
        return `${this.usernameAssociated} has ${this.numberOfFriends} friends on Facebook`
    }
    getGeneralInfo(){
      return `The profile ${this.personalLink} was created on ${this.dateCreated}`
    }
   }
   
    class User{
        constructor(name,currentCity,workPlace,school,email,gender,dateOfBirth){
            this.name = name;
            this.currentCity = currentCity; 
            this.workPlace = workPlace; 
            this.school = school;
            this.email = email;
            this.gender = gender; 
            this.dateOfBirth = dateOfBirth;
        }
    getNameAndBirthday(){
        return `${this.name} was born on ${this.dateOfBirth}`
    }
    getGeneralInfo(){
      return `The user ${this.name} works at ${this.workPlace} and lives in ${this.currentCity}`
    }
   }
   

   //instancias de las clases
   //Post
   console.log("Instancia de Post");
   const post = new Post("Jonathan Rodriguez","Hola a todos mis amigos de Facebook!","Text",300)
   console.log("Nombre del usuario: " + post.user)
   console.log("Tipo de post: " + post.contentType)
   console.log(post.getContentAndLikes())
   console.log(post.getGeneralInfo())

   //Profile
   console.log("\nInstancia de Profile");
   const profile = new Profile("Jonathan Rodriguez","https://www.facebook.com/userName",500,"AHFI234WDEFa00",13458)
   console.log("Enlace personalizado: " + profile.personalLink)
   console.log("Numero de posts: " + profile.numberOfPosts)
   console.log(profile.getNumberOfFriends())
   console.log(profile.getGeneralInfo())

   //User
   console.log("\nInstancia de User");
   const user = new User("Jonathan","CDMX","Super office","IPN","mail@example.com","male","28/11/1989")
   console.log("Nombre del usuario: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getNameAndBirthday())
   console.log(user.getGeneralInfo())