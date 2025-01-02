// Q4 Group users based on their Programming language mentioned in their designation.

const users = require('../database.js');
const programmingLanguage = require('../problem4.js');

const result = programmingLanguage(users);

console.log(result);