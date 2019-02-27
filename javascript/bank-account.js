


let myVariable;

function myfunction(a, b) {
  return a + b;
}
let boxForAnonymousFunction = function(a, b) {
  return a + b;
}
let boxForAnonymousFunction2 = (a, b) => {
  return a + b;
}
boxForAnonymousFunction(1,4);

myfunction(1,4);
myfunction(76,1);


let myAccount = {
  balance: 130,
  iban: null,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};
myAccount.iban = '4875938745938745';
myAccount['iban'] = '4875938745938745';
console.log(myAccount.balance);
myAccount.deposit(500);
console.log(myAccount.balance);

let fn1 = () => 1
let fn2 = () => 2
let fn3 = () => 3

let arr = [fn1, fn2, fn3, () => 4, () => 9];
console.log(arr[4])