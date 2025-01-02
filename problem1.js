function interestedVideoGame(users) {
    let interestPerson = [];

    for(let user in users) {
        let details = users[user];
        let interests = details.interests[0];

        if(interests != undefined) {
            interests = interests.split(",");

            for(let interest of interests) {
                interest = interest.trim();
                if(interest == "Playing Video Games"){
                    interestPerson.push(user);
                }
            }
        }
    }
    return interestPerson;
}

module.exports = interestedVideoGame;