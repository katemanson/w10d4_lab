var Bank = function(name) {
  this.name = name;
  this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },
  findByName: function(name) {
    return this.accounts.filter(function(account){
      if (account.name === name) {
        return account;
      }
    });
  },
  findLargestAccount: function() {
    var amounts = this.accounts.map(function(account){
      return account.amount;
    }) 
    var largestAmount = Math.max.apply(this,amounts);
    return this.accounts.find(function(account){
      if (account.amount === largestAmount) {
        return account;
      }
    })
  }, 
  totalValue: function() {
    var amounts = this.accounts.map(function(account){
      return account.amount;
    });
     return amounts.reduce(function(acc, item){
      return acc + item}, 0);
  }
};

module.exports = Bank;