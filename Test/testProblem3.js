// Q3 Find all users with masters Degree.

const users = require('../database.js');
const mastersDegree = require('../problem3.js');

const result = mastersDegree(users);
if(result.length == 0) {
    console.log("No users found");
} else {
    for(let user of result) {
        console.log(user);
    }
}