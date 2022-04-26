const User = require('../User.js')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }
    static getInfo(user){
        const userList = []
        userList.push(user.id)
        userList.push(user.username)
        userList.push(user.name)
        userList.push(user.bio)
        return userList;
    }

    static updateUserUsername(user, username){
        user.setUsername = username
      }

    static getAllUsernames(users){
        const usersUsernames = users.map(user => user.username)
        return usersUsernames
    }
}

module.exports = UserService