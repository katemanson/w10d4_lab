var Bank = require("../bank");
var Account = require("../account");
var assert = require("assert");

describe("Bank", function() {

  var bank1 = new Bank("Damn Bank");
  var bank2 = new Bank("Another Damn Bank");
  var account1 = new Account("Herman", 10000, "personal");
  var account2 = new Account("Lily", 50000, "personal");
  var account3 = new Account("Grandpa", 1000000, "business");
  var account4 = new Account("Eddie", 80, "personal");
  var account5 = new Account("Marilyn", 5000, "business");
  bank2.addAccount(account1);
  bank2.addAccount(account2);
  bank2.addAccount(account3);
  bank2.addAccount(account4);
  bank2.addAccount(account5);





  it("should start with no accounts", function() {
    assert.equal(0, bank1.accounts.length);
  });

  it("should be possible to add an account", function() {
    bank1.addAccount(account1);
    assert.equal(1, bank1.accounts.length);
  });

  it("should be possible to find an account by account name", function() {
    var accountFound = bank2.findByName("Eddie");
    console.log(accountFound);
    assert.equal("Eddie", accountFound[0].name);

  });

  it("should be possible to find the largest account", function() {
    var largest = bank2.findLargestAccount();
    assert.equal("Grandpa", largest.name);
  });

  it("should be possible to find the total value of all the accounts", function() {
    assert.equal(1065080, bank2.totalValue());
  });

  it("should be possible to find the average account value", function() {

  });

  it("should be possible to find the total value for an account type", function() {

  });

});