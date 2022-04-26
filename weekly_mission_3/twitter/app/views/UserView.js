const UserService = require('./../services/UserService')

class UserView{

  static createUser(payload){
    if(payload === null){
      console.log("Error es null")
      return {error: "El payload no existe."}
    } else if (payload.username ==null || payload.name == null || payload.id == null){
        return {error: "necesitan tener un valor valido"}
    
    } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
      return UserService.create(payload.id, payload.username, payload.name)
    } else{
      return {error: "necesitan tener un valor valido"}
    }
  }
}

module.exports = UserView