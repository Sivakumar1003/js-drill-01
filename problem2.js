function inGermany(users) {
    let names = [];

    for(let user in users) {
        let details = users[user];
        let nationality = details.nationality;

        if(nationality === "Germany") {
            names.push(user);
        }
    }
    return names;
}

module.exports = inGermany;