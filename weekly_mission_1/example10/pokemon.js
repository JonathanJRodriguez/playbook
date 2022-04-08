/*
  export default nos permite exportar esta clase e importara

  import MyPokemon from './pokemon.js'
*/

export default class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello = () => {
    //actions
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  };
}
