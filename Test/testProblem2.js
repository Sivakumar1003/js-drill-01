// Q2 Find all users staying in Germany.

const users = require('../database.js');
const inGermany = require('../problem2.js');

const result = inGermany(users);
if(result.length == 0) {
    console.log("No users found");
} else {
    for(let user of result) {
        console.log(user);
    }
}