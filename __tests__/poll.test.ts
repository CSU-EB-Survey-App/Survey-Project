import Poll from "../models/Poll";

// -Imports-
const request = require("supertest");
const server = require("../server");
const Polls = require("../models/Poll");

/* Polls Unit Testing */

// Unit test for getting all polls
describe(
  "Polls " +
    new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  () => {
    describe("GET all Polls Route: /api/v1/polls/", () => {
      describe("Given Polls DO Exist", () => {
        it("Should return a 200", async () => {
          // expect(true).toBe(true); // Good way to test function setup
          await request(server).get(`/api/v1/polls/`).expect(200);
        });
      });
    });
  }
);

// Unit test for getting a single poll
describe("Polls", () => {
  describe("GET Single Poll Route: /api/v1/polls/:id", () => {
    describe("Given the poll DOES exist", () => {
      it("Should return a 200", async () => {
        let poll = await Polls.find({});
        await request(server).get(`/api/v1/polls/${poll[0]._id}`).expect(200);
      });
    });
  });
});

// Unit test for getting a single poll that does not exist
describe("Polls", () => {
  describe("GET a Single Poll Route: /api/v1/polls/:id", () => {
    describe("Given the poll does NOT exist", () => {
      it("Should return a 404", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const pollID = "64ab955de7cad940028b5ad1";
        await request(server).get(`/api/v1/polls/${pollID}`).expect(404);
      });
    });
  });
});

// Unit test for creating a new poll
describe("Polls", () => {
  describe("POST Create a Single Poll Route: /api/v1/polls/", () => {
    describe("Given the fields are correct", () => {
      it("Should return a 200", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        await request(server)
          .post(`/api/v1/polls/`)
          .send({
            question: "Is data structure and algorithms a hard class?",
            answer1: "Yes",
            answer2: "Maybe",
            answer3: "No",
            startDate:
              "Thu Jul 13 2023 00:00:00 GMT-0700 (Pacific Daylight Time",
            endDate: "Thu Jul 13 2023 00:00:00 GMT-0700 (Pacific Daylight Time",
            user: "64a60dc4f000b2e5794a52c8",
          })
          .expect(200);
      });
    });
  });
});

// Unit test for answering a poll
describe("Polls", () => {
  describe("PUT Answer Poll Route: /api/v1/polls/answer/:id", () => {
    describe("Given the poll DOES exist", () => {
      it("Should return a 200", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        let poll = await Polls.find({});
        await request(server)
          .put(`/api/v1/polls/answer/${poll[0]._id}`)
          .send({
            answer: "answer2Count",
            user: "64a60dc4f000b2e5794a52c8",
          })
          .expect(200);
      });
    });
  });
});

// Unit test for answering a poll that does not exist
describe("Polls", () => {
  describe("PUT Answer Poll Route: /api/v1/polls/answer/:id", () => {
    describe("Given the poll does NOT exist", () => {
      it("Should return a 400", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const pollID = "64ab955de7cad940028b5ad1";
        await request(server)
          .put(`/api/v1/polls/answer/${pollID}`)
          .send({
            answer: "answer2Count",
            user: "64a60dc4f000b2e5794a52c8",
          })
          .expect(400);
      });
    });
  });
});

// Unit test for voting on a poll thats useful
describe("Polls", () => {
  describe("PUT Vote on Useful Poll Route: /api/v1/polls/useful/:id", () => {
    describe("Given the poll DOES exist", () => {
      it("Should return a 200", async () => {
        let poll = await Polls.find({});
        await request(server)
          .put(`/api/v1/polls/useful/${poll[0]._id}`)
          .send({
            user: "64a60dc4f000b2e5794a52c8",
          })
          .expect(200);
      });
    });
  });
});

// Unit test for voting on a poll thats useful that does not exist
describe("Polls", () => {
  describe("PUT Vote on Useful Poll Route: /api/v1/polls/useful/:id", () => {
    describe("Given the poll does NOT exist", () => {
      it("Should return a 400", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const pollID = "64ab955de7cad940028b5ad1";
        await request(server)
          .put(`/api/v1/polls/useful/${pollID}`)
          .send({
            user: "64a60dc4f000b2e5794a52c8",
          })
          .expect(400);
      });
    });
  });
});

// Unit test for deleting a poll
describe("Polls", () => {
  describe("DELETE Poll Route: /api/v1/polls/:id", () => {
    describe("Given the poll DOES exist", () => {
      it("Should return a 200", async () => {
        let polls = await Polls.find({});
        // expect(true).toBe(true); // Good way to test function setup
        // const pollID = "64b3431391631dc186fee0b5"
        await request(server)
          .delete(`/api/v1/polls/${polls[0]._id}`)
          .expect(200);
      });
    });
  });
});

// Unit test for deleting a poll that does not exist
describe("Polls", () => {
  describe("DELETE Poll Route: /api/v1/polls/:id", () => {
    describe("Given the poll does Not exist", () => {
      it("Should return a 401", async () => {
        // expect(true).toBe(true); // Good way to test function setup
        const pollID = "64b3431391631dc186fee0b5";
        await request(server).delete(`/api/v1/polls/${pollID}`).expect(401);
      });
    });
  });
});
