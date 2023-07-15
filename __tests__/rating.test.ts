// -Imports-
const supertest = require('supertest');
const app = require("../server");

// Unit Testing For Ratings

// Unit test for getting all ratings
describe('Rating', () => {
    describe("GET all ratings route: /api/v1/rating/", () => {
        describe("Given ratings do exist", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                // const pollID = "64ab855053f81e8f25a663fa"; // 64ab855053f81e8f25a663fb is a correct db entry
                await supertest(app).get(`/api/v1/rating/`).expect(200);
            })
        })
    })
})

// Unit test for geting a single rating
describe('Rating', () => {
    describe("GET single ratings route: /api/v1/rating/:id", () => {
        describe("Given the rating DOES exist", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64a9e91817ae591c6b8bac71";
                await supertest(app).get(`/api/v1/rating/${ratingID}`).expect(200);
            })
        })
    })
})

// Unit test for geting a single rating that does not exist
describe('Rating', () => {
    describe("Get single ratings route: /api/v1/rating/:id", () => {
        describe("Given the rating does NOT exist", () => {
            it("Should return a 401", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64a9e91817ae591c6b8bac72";
                await supertest(app).get(`/api/v1/rating/${ratingID}`).expect(401);
            })
        })
    })
})

// Unit test for creating a rating
describe('Rating', () => {
    describe("POST create a single rating route: /api/v1/rating/", () => {
        describe("Given the fields ARE correct", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                await supertest(app).post(`/api/v1/rating/`).send({
                    question: "CSU East Bay is the best school",
                    startDate: "Thu Jul 13 2023 00:00:00 GMT-0700 (Pacific Daylight Time)",
                    endDate: "Thu Jul 13 2023 00:00:00 GMT-0700 (Pacific Daylight Time)",
                    user: "64a60dc4f000b2e5794a52c8"
                }).expect(200);
            })
        })
    })
})


// Unit test for answering a rating
describe('Rating', () => {
    describe("PUT Answer a Rating Route: /api/v1/rating/answer/:id", () => {
        describe("Given the rating DOES exist", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64ab20ced2b7bf3956def5cb";
                await supertest(app).put(`/api/v1/rating/answer/${ratingID}`).send({
                    answer: 4,
                    user: "64a76d80c2c8bc9f86f8b4dc"
                }).expect(200);
            })
        })
    })
})

// Unit test for answering a rating that does not exist
describe('Rating', () => {
    describe("PUT Answer a Rating Route: /api/v1/rating/answer/:id", () => {
        describe("Given the rating does NOT exist", () => {
            it("Should return a 400", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64a9e91817ae591c6b8bac72";
                await supertest(app).put(`/api/v1/rating/answer/${ratingID}`).send({
                    answer: 4,
                    user: "64a76d80c2c8bc9f86f8b4dc"
                }).expect(400);
            })
        })
    })
})

// Unit test for marking a rating as useful
describe('Rating', () => {
    describe("PUT Vote Rating as Useful Route: /api/v1/rating/useful/:id", () => {
        describe("Given the rating DOES exist", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64a9e91817ae591c6b8bac71";
                await supertest(app).put(`/api/v1/rating/useful/${ratingID}`).send({
                    user: "64a76d80c2c8bc9f86f8b4dc"
                }).expect(200);
            })
        })
    })
})

// Unit test for marking a rating as useful that does not exist
describe('Rating', () => {
    describe("PUT Vote Rating as Useful Route: /api/v1/rating/useful/:id", () => {
        describe("Given the rating does NOT exist", () => {
            it("Should return a 400", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64a9e91817ae591c6b8bac72";
                await supertest(app).put(`/api/v1/rating/useful/${ratingID}`).send({
                    user: "64a76d80c2c8bc9f86f8b4dc"
                }).expect(400);
            })
        })
    })
})

// Unit test for deleting a rating
describe('Rating', () => {
    describe("DELETE Rating Route: /api/v1/rating/:id", () => {
        describe("Given the rating DOES exist", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const ratingID = "64b30c8be83afa704027e29d";
                await supertest(app).delete(`/api/v1/rating/${ratingID}`).expect(200);
            })
        })
    })
})