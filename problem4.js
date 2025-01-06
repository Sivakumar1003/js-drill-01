function programmingLanguage(users) {
    let userLanguage = {};

    for (let user in users) {
        let desgination = users[user].desgination;

        desgination = desgination.split(" ").map(value => value.trim());

        for (let lan of desgination) {
            if (lan == "Golang" || lan == "Javascript" || lan == "Python") {
                if (userLanguage[lan] == undefined) {
                    userLanguage[lan] = [];
                }
                userLanguage[lan].push(users[user]);
            }
        }

    }
    return userLanguage;
}
module.exports = programmingLanguage;