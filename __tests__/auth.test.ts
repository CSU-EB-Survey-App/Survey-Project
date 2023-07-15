// -Imports-
// import supertest from "supertest";
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

// Unit test for getting user information
describe('Authentication', () => {
    describe("Get User Route", () => {
        describe("Given the user does not exist", () => {
            it("Should return a 404", async () => {
                expect(true).toBe(true); // Good way to test function setup
                // const userID = "1234556";
                // await supertest().get("api/v1/auth/user")
            })
        })
    })
})