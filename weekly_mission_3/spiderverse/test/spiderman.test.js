
describe("test suites dummy description", ()=> {
    test('case 1 Dummy', () => {
        const Spiderman = require('../app/Spiderman')
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew garfield", 2, "Sony")

        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")

        const tomHolland = new Spiderman("Spiderman Sony", 31, "Tom Holland", 2, "Marvel")

        expect (tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
})