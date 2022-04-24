
describe("Unit test for Mission Commander Class", ()=> {
    test('Create a mission commander object', () => {
        const MissionCommander = require('../app/MissionCommander');
        const MC = new MissionCommander("Woopa")
        expect(MC.name).toBe("Woopa");
    })
})