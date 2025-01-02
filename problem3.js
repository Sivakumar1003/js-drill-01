function mastersDegree(users) {
    let names = [];

    for(let user in users) {
        let details = users[user];
        let qualification = details.qualification;

        if(qualification === "Masters") {
            names.push(user);
        }
    }
    return names;
}

module.exports = mastersDegree;