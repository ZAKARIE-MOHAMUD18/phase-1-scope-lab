
var customerName = 'bob';
const leastFavoriteCustomer = 'Ali';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const means it's global
}


function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}





function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Dev'; // This causes an error
}
