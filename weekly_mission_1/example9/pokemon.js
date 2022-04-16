class Pokemon {
    constructor (name) {
      this.count = 0
      this.name = name
    }


    
    sayHello () {
      console.log('Mi pokemon ' + this.name + ' te saluda!!!')
    }
    sayMessage (message){
        console.log('Mi pokemon ' + this.name + ' dice: ' + message)
    }
  }
  
//   module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
  module.exports = Pokemon // Clase