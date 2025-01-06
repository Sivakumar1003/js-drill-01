function interestedVideoGame(users) {
    let interestPerson = [];
    for(let user in users) {
        let interests = users[user].interests;
        if(interests) {
            interests = interests[0].split(",").map((interest) => {
                return interest.trim();
            })
            if ( interests.includes("Playing Video Games") ) {
                interestPerson.push(user);
            }
        }
    }
}

module.exports = interestedVideoGame;