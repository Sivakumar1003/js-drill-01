// Q1 Find all users who are interested in playing video games.

const users = require('../database.js');
const interestedVideoGame = require('../problem1.js');

const result = interestedVideoGame(users);
if(result.length == 0) {
    console.log("No users found");
} else {
    for(let user of result) {
        console.log(user);
    }
}