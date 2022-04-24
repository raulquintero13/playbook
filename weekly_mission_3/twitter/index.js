const User = require('./app/User.js')


const user = new User(1, "carlogilmar", "Carlo", "Bio")
console.log(user.getDateCreated)