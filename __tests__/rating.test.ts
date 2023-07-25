// -Imports-
const supertest = require("supertest");
const app = require("../server");
const Ratings = require("../models/Rating");

// Unit Testing For Ratings

// Unit test for getting all ratings
describe(
  "Rating " +
    new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  () => {
    describe("GET all ratings route: /api/v1/rating/", () => {
      describe("Given ratings do exist", () => {
        it("Should return a 200", async () => {
          // expect(true).toBe(true); // Good way to test function setup
          await supertest(app).get(`/api/v1/ratings/`).expect(200);
        });
      });
    });
  }
);

// Unit test for geting a single rating
describe("Rating", () => {
  describe("GET single ratings route: /api/v1/rating/:id", () => {
    describe("Given the rating DOES exist", () => {
      it("Should return a 200", async () => {
        let rating = await Ratings.find({});
        // expect(true).toBe(true); // Good way to test function setup
        // const ratingID = "64a9e91817ae591c6b8bac71";
        await supertest(app)
          .get(`/api/v1/ratings/${rating[0]._id}`)
          .expect(200);
      });
    });
  });
});

// Unit test for geting a single rating that does not exist
describe("Rating", () => {
  describe("GET single ratings route: /api/v1/rating/:id", () => {
    describe("Given the rating does NOT exist", () => {
      it("Should return a 401", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const ratingID = "64a9e91817ae591c6b8bac72";
        await supertest(app).get(`/api/v1/ratings/${ratingID}`).expect(401);
      });
    });
  });
});

// Unit test for creating a rating
describe("Rating", () => {
  describe("POST create a single rating route: /api/v1/rating/", () => {
    describe("Given the fields ARE correct", () => {
      it("Should return a 200", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        await supertest(app)
          .post(`/api/v1/ratings/`)
          .send({
            question: "CSU East Bay is the best school",
            startDate:
              "Thu Jul 13 2023 00:00:00 GMT-0700 (Pacific Daylight Time)",
            endDate:
              "Thu Jul 13 2023 00:00:00 GMT-0700 (Pacific Daylight Time)",
            user: "64a60dc4f000b2e5794a52c8",
          })
          .expect(200);
      });
    });
  });
});

// Unit test for answering a rating
describe("Rating", () => {
  describe("PUT Answer a Rating Route: /api/v1/rating/answer/:id", () => {
    describe("Given the rating DOES exist", () => {
      it("Should return a 200", async () => {
        let rating = await Ratings.find({});
        // expect(true).toBe(true); // Good way to test function setup
        await supertest(app)
          .put(`/api/v1/ratings/answer/${rating[0]._id}`)
          .send({
            answer: 4,
            user: "64a76d80c2c8bc9f86f8b4dc",
          })
          .expect(200);
      });
    });
  });
});

// Unit test for answering a rating that does not exist
describe("Rating", () => {
  describe("PUT Answer a Rating Route: /api/v1/rating/answer/:id", () => {
    describe("Given the rating does NOT exist", () => {
      it("Should return a 400", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const ratingID = "64a9e91817ae591c6b8bac72";
        await supertest(app)
          .put(`/api/v1/ratings/answer/${ratingID}`)
          .send({
            answer: 4,
            user: "64a76d80c2c8bc9f86f8b4dc",
          })
          .expect(400);
      });
    });
  });
});

// Unit test for marking a rating as useful
describe("Rating", () => {
  describe("PUT Vote Rating as Useful Route: /api/v1/rating/useful/:id", () => {
    describe("Given the rating DOES exist", () => {
      it("Should return a 200", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const rating = await Ratings.find({});
        await supertest(app)
          .put(`/api/v1/ratings/useful/${rating[0]._id}`)
          .send({
            user: "64a76d80c2c8bc9f86f8b4dc",
          })
          .expect(200);
      });
    });
  });
});

// Unit test for marking a rating as useful that does not exist
describe("Rating", () => {
  describe("PUT Vote Rating as Useful Route: /api/v1/rating/useful/:id", () => {
    describe("Given the rating does NOT exist", () => {
      it("Should return a 400", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const ratingID = "64a9e91817ae591c6b8bac72";
        await supertest(app)
          .put(`/api/v1/ratings/useful/${ratingID}`)
          .send({
            user: "64a76d80c2c8bc9f86f8b4dc",
          })
          .expect(400);
      });
    });
  });
});

// Unit test for deleting a rating
describe("Rating", () => {
  describe("DELETE Rating Route: /api/v1/rating/:id", () => {
    describe("Given the rating DOES exist", () => {
      it("Should return a 200", async () => {
        let ratings = await Ratings.find({});
        await supertest(app)
          .delete(`/api/v1/ratings/${ratings[0]._id}`)
          .expect(200);
      });
    });
  });
});
