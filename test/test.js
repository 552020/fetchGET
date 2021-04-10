console.log = function () {};
const assert = require("chai").assert;
const fs = require("fs");
const Structured = require("structured");

const code = fs.readFileSync("public/main.js", "utf8");

describe("", function () {
  it("", function () {
    let structureOne = function () {
      const getSuggestions = () => {
        fetch(endpoint).then((response) => {});
      };
    };

    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(
      isMatchOne,
      "Did you chain `.then` to `fetch()` and include `response` as a parameter?"
    );
  });
});
