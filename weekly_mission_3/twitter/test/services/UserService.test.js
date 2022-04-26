const UserService = require('../../app/services/UserService')

describe("Test for USerService", ()=> {

    test("1. create a new user using  the UserService",()=> {

        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        const userInfoInList = UserService.getInfo(user)

    })
    test("3. update username",()=>{
        const user = UserService.create(1, "carlogilmar", "Carlo")
        UserService.updateUserUsername(user, "carlog")
        expect(user.username).toBe("carlog")
    })
    test("4. Given a list of users give me the list of usernames", ()=>{
        const user1 = UserService.create(1, "carlogilmar1", "carlo")
        const user2 = UserService.create(1, "carlogilmar2", "carlo")
        const user3 = UserService.create(1, "carlogilmar3", "carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
    })


})