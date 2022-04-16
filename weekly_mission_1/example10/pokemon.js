export default class MyPokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello () {
      console.log(`Mi pokemon [${this.name}] te saluda`)
    }
  }