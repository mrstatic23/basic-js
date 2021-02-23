const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretTeamName = [];
  if (Array.isArray(members)) {
    members.forEach(element => {
      if (typeof element === 'string') {
        const name = element.trim();
        secretTeamName.push(name[0].toUpperCase());
      }
    });
    return secretTeamName.sort().join('');
  }

  return false;
};