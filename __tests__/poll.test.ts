// -Imports-
const supertest = require("supertest");
const app = require("../server");


// Unit test for getting user information
describe('Poll', () => {
    describe("Get Single Poll Route", () => {
        describe("Given the poll does not exist", () => {
            it("Should return a 404", async () => {
                expect(true).toBe(true); // Good way to test function setup
                const pollID = "64ab855053f81e8f25a663fa"; // 64ab855053f81e8f25a663fb is a correct db entry
                await supertest(app).get(`/api/v1/polls/${pollID}`).expect(404);
            })
        })
    })
})