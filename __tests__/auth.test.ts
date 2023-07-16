// -Imports-
const superT = require("supertest")
const Svr = require("../server");
const User = require("../models/User");
// Example of a unit test for POST requests
// describe('PUT /api/users/:id', () => {
//     it('should update an existing user', async () => {
//       const userId = '123'; // Replace with the actual user ID
//       const response = await request(app)
//         .put(`/api/users/${userId}`)
//         .send({ name: 'Updated Name' });
  
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual(/* expected response body */);
//     });
//   });

// Unit test for getting user informations
// describe('Authentication', () => {
//     describe("Get User Route", () => {
//         describe("Given the user does not exist", () => {
//             it("Should return a 404", async () => {
//                 expect(true).toBe(true); // Good way to test function setup
//                 // const userID = "1234556";
//                 // await supertest().get("api/v1/auth/user")
//             })
//         })
//     })
// })

// Unit test for registering a user
describe('Authentication', () => {
    describe("POST Register User Route: /api/v1/auth/register", () => {
        describe("Given the input fields ARE correct", () => {
            it("Should return a 200", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                const id = `TT${Math.floor(Math.random() * 9999) + 0}`;
                const tempEmail = `stephendk${Math.floor(Math.random() * 9999) + 0}@yahoo.com`
                await superT(Svr).post(`/api/v1/auth/register`).send({
                    studentID: id,
                    email: tempEmail,
                    password: "123456789101112"
                }).expect(200);
            })
        })
    })
})

// Unit test for registering a user with empty fields
describe('Authentication', () => {
    describe("POST Register User Route: /api/v1/auth/register", () => {
        describe("Given EMPTY fields", () => {
            it("Should return a 400", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                await superT(Svr).post(`/api/v1/auth/register`).send({
                    studentID: "",
                    email: "",
                    password: ""
                }).expect(400);
            })
        })
    })
})

// Unit test for registering a user when the account already exists
describe('Authentication', () => {
    describe("POST Register a User Route: /api/v1/auth/register", () => {
        describe("Given the account is ALREADY created", () => {
            it("Should return a 400", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                await superT(Svr).post(`/api/v1/auth/register`).send({
                    studentID: "YH6675",
                    email: "stephendklein@msn.com",
                    password: "1234567890123"
                }).expect(400);
            })
        })
    })
})

// Unit test for registering a user with a badly formatted email
describe('Authentication', () => {
    describe("POST Register a User Route: /api/v1/auth/register", () => {
        describe("Given the WRONG email format", () => {
            it("Should return a 400", async () => {
                // expect(true).toBe(true); // Good way to test function setup
                await superT(Svr).post(`/api/v1/auth/register`).send({
                    studentID: "SC5567",
                    email: "stephendklein",
                    password: "1234567890123"
                }).expect(400);
            })
        })
    })
})

// Unit test for logging a user in with good credentials
describe('Authentication', () => {
    describe("POST Login User Route: /api/v1/auth/login", () => {
        describe("Given the user DOES exist", () => {
            it("Should return a 200", async () => {
                await superT(Svr).post(`/api/v1/auth/login`).send({
                    studentID: "WW1234",
                    password: "123456789"
                }).expect(200);
            })
        })
    })
})

// Unit test for logging a user in with empty credentials
describe('Authentication', () => {
    describe("POST Login User Route: /api/v1/auth/login", () => {
        describe("Given EMPTY fields", () => {
            it("Should return a 400", async () => {
                await superT(Svr).post(`/api/v1/auth/login`).send({
                    studentID: "",
                    password: ""
                }).expect(400);
            })
        })
    })
})

// Unit test for logging a user in with credentials but account does not exist
describe('Authentication', () => {
    describe("POST Login User Route: /api/v1/auth/login", () => {
        describe("Given account does NOT exist", () => {
            it("Should return a 401", async () => {
                await superT(Svr).post(`/api/v1/auth/login`).send({
                    studentID: "ZZ9999",
                    password: "123456789"
                }).expect(401);
            })
        })
    })
})

// Unit test for logging a user with student id but bad password
describe('Authentication', () => {
    describe("POST Login User Route: /api/v1/auth/login", () => {
        describe("Given good id but BAD password", () => {
            it("Should return a 401", async () => {
                await superT(Svr).post(`/api/v1/auth/login`).send({
                    studentID: "WW1234",
                    password: "12345678910"
                }).expect(401);
            })
        })
    })
})

// Unit test for checking user authentication with token
describe('Authentication', () => {
    describe("POST Check Authentication Route: /api/v1/auth/isauth", () => {
        describe("Given GOOD token", () => {
            it("Should return a 200", async () => {
                let user = await User.create({
                    studentID: `XY${Math.floor(Math.random() * 9999) + 0}`,
                    email: `checkrauth${Math.floor(Math.random() * 9999) + 0}@polls.com`,
                    password: "123456789"
                })
                const userToken = await user.getSignedJwtToken();
                await superT(Svr).post(`/api/v1/auth/isauth`).send({
                    token: userToken
                }).expect(200);
            })
        })
    })
})

// Unit test for checking user authentication with bad token
describe('Authentication', () => {
    describe("POST Check Authentication Route: /api/v1/auth/login", () => {
        describe("Given GOOD token", () => {
            it("Should return a 200", async () => {
                let user = await User.create({
                    studentID: `WW${Math.floor(Math.random() * 9999) + 0}`,
                    email: `checkauthtesting${Math.floor(Math.random() * 9999) + 0}@polls.com`,
                    password: "123456789"
                })
                const userToken = await user.getSignedJwtToken();
                await superT(Svr).post(`/api/v1/auth/isauth`).send({
                    token: userToken
                }).expect(200);
            })
        })
    })
})


// Unit test for checking user authentication with bad token
describe('Authentication', () => {
    describe("POST Check Authentication Route: /api/v1/auth/login", () => {
        describe("Given BAD token", () => {
            it("Should return a 400", async () => {
                await superT(Svr).post(`/api/v1/auth/isauth`).send({
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjM2ZTdjYzVlZDdjOWU0ZGRlM2E5NyIsImlhdCI6MTY4OTQ4MDgyOCwiZXhwIjoxNjkyMDcyODI4fQ.d5Ka2eE-Ls8UHETFb2lkDbVVjjcwszFyGVkjPMM6Tyz"
                }).expect(400);
            })
        })
    })
})


// Unit test for deleting user account
describe('Authentication', () => {
    describe("DELETE User Account Route: /api/v1/auth/delete", () => {
        describe("Given GOOD token", () => {
            it("Should return a 200", async () => {
                let user = await User.create({
                    studentID: `NM${Math.floor(Math.random() * 9999) + 0}`,
                    email: `unittesting${Math.floor(Math.random() * 9999) + 0}@pollstesting.com`,
                    password: "123456789"
                })
                const token = await user.getSignedJwtToken();
                await superT(Svr).delete(`/api/v1/auth/delete`).send({
                    token: token
                }).expect(200);
            })
        })
    })
})

// Unit test for deleting user account with bad token
describe('Authentication', () => {
    describe("DELETE User Account Route: /api/v1/auth/delete", () => {
        describe("Given BAD token", () => {
            it("Should return a 400", async () => {
                const badUserToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjM2ZTdjYzVlZDdjOWU0ZGRlM2E5NyIsImlhdCI6MTY4OTQ4MDgyOCwiZXhwIjoxNjkyMDcyODI4fQ.d5Ka2eE-Ls8UHETFb2lkDbVVjjcwszFyGVkjPMM6Tyz";
                await superT(Svr).delete(`/api/v1/auth/delete`).send({
                    token: badUserToken
                }).expect(400);
            })
        })
    })
})


// Unit test for getting user account information with good token
describe('Authentication', () => {
    describe("POST Query User Account Route: /api/v1/auth/user", () => {
        describe("Given GOOD token", () => {
            it("Should return a 200", async () => {
                let user = await User.create({
                    studentID: `VB${Math.floor(Math.random() * 9999) + 0}`,
                    email: `unittesting${Math.floor(Math.random() * 9999) + 0}@polls.com`,
                    password: "123456789"
                })
                const userToken = await user.getSignedJwtToken();
                await superT(Svr).post(`/api/v1/auth/user`).send({
                    token: userToken
                }).expect(200);
            })
        })
    })
})

// Unit test for getting user account information with bad token
describe('Authentication', () => {
    describe("POST Query User Account Route: /api/v1/auth/user", () => {
        describe("Given BAD token", () => {
            it("Should return a 400", async () => {
                let badToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjM2ZTdjYzVlZDdjOWU0ZGRlM2E5NyIsImlhdCI6MTY4OTQ4MDgyOCwiZXhwIjoxNjkyMDcyODI4fQ.d5Ka2eE-Ls8UHETFb2lkDbVVjjcwszFyGVkjPMM6Tyz"
                await superT(Svr).post(`/api/v1/auth/user`).send({
                    token: badToken
                }).expect(400);
            })
        })
    })
})