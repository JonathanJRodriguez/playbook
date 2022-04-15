//Definicion de clases
class Travel{
    constructor(clientName,fromAddress,toAddress,hasMiddleStops,tripType,price){
        this.clientName = clientName;
        this.fromAddress = fromAddress; 
        this.toAddress = toAddress;
        this.hasMiddleStops = hasMiddleStops; 
        this.tripType = tripType; 
        this.price = price;
    }
    getTypeAndPrice(){
        return `The trip is ${this.tripType} with a price of $${this.price}`
    }
    getGeneralInfo(){
      return `The user ${this.clientName} will go from ${this.fromAddress} to ${this.toAddress}`
    }
   }
   
   class User{
       constructor(name,rewards,payMethod,rate,email,address){
        this.name = name;
        this.rewards = rewards; 
        this.payMethod = payMethod; 
        this.rate = rate; 
        this.email = email; 
        this.address = address; 
       }
    getRate(){
        return `${this.name} has ${this.rate}/5 stars`
    }
    getGeneralInfo(){
      return `The user ${this.name} lives in ${this.address}`
    }
   }
   


   //Instancias de clases
   //Travel
   console.log("Instancia de Travel")
   const travel = new Travel("Jonathan","CDMX address 1","CMDX address 2",false,"Uber X",244)
   console.log("Nombre del usuario: " + travel.clientName)
   console.log(travel.getTypeAndPrice())
   console.log(travel.getGeneralInfo())

   //User
   console.log("\nInstancia de User")
   const user = new User("Jonathan Rodriguez",222,"Cash",4.9,"mail@example.com","undefined street")
   console.log("Nombre del usuario: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getRate())
   console.log(user.getGeneralInfo())
