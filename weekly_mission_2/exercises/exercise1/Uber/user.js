const user = {
    name: "Jonathan Rodriguez",
    rewards: 222,
    payMethod: "Cash",
    rate: 4.9,
    email: "mail@example.com",
    address: "undefined street",
    getRate: function(){
        return `${this.name} has ${this.rate}/5 stars`
    },
    getGeneralInfo: function(){
      return `The user ${this.name} lives in ${this.address}`
    }
   }
   
   console.log("Nombre del usuario: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getRate())
   console.log(user.getGeneralInfo())