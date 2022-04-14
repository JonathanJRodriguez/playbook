const user = {
    name: "Jonathan",
    currentCity: "CDMX",
    workPlace: "Super office",
    school: "IPN",
    email: "mail@example.com",
    gender: "male",
    dateOfBirth: "28/11/1989",
    getNameAndBirthday: function(){
        return `${this.name} was born on ${this.dateOfBirth}`
    },
    getGeneralInfo: function(){
      return `The user ${this.name} works at ${this.workPlace} and lives in ${this.currentCity}`
    }
   }
   
   console.log("Nombre del usuario: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getNameAndBirthday())
   console.log(user.getGeneralInfo())