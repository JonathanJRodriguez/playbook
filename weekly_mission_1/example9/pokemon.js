//pokemon.js
//el constructor de la clase Pokemon+

class Pokemon {
  constructor(name) {
    this.name = name;
  }

  //este método se guardará en esta clase como sayHello
  sayHello = () => {
    //actions
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  };

  sayMessage = (message) => {
    console.log(`Mi pokemon ${this.name} dice: ${message}`);
  };
}

module.exports = Pokemon
