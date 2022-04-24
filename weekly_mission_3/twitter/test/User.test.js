const User = require('../app/User.js')

describe("Unit tests  for user object", ()=>{
    test('Create an User Object', ()=>{
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dataCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})