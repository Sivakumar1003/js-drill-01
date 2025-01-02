function programmingLanguage(users) {
    let language = {};

    for(let user in users) {
        let details = users[user];
        let desgination = details.desgination;

        desgination = desgination.split(" ");

        for(let lan of desgination) {
            lan = lan.trim();

            if(lan == "Golang" || lan == "Javascript" || lan == "Python"){
                if(language[lan] == undefined) {
                    language[lan] = [];
                }
                language[lan].push(details);
            }
        }
    }
    return language;
}
module.exports = programmingLanguage;