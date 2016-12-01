var Account = require('../account');
var assert = require("assert");

describe("Account", function() {

var account1 = new Account("Herman", 10000, "personal");

  it("should have a name", function() {
    assert.equal("Herman", account1.name);
  });

  it("should have amount", function() {
    assert.equal(10000, account1.amount);
  });

  it("should have a type", function() {
    assert.equal("personal", account1.type);
  });

});