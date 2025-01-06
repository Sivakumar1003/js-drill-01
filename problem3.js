function mastersDegree(users) {
    return Object.keys(users).filter(user => {
        return users[user]["qualification"] === "Masters";
    });
}

module.exports = mastersDegree;