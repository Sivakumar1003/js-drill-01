function inGermany(users) {
    return Object.keys(users).filter(user => {
        return users[user].nationality === "Germany";
    });
}

module.exports = inGermany;