// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// isAdmin
function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }else{
        return false;
    }
}

// getEmail
function getEmail(user){
    let email = (`${user.firstName}.${user.lastName}@codeimmersives.com`);
    return email.toLowerCase();
}

// getPlaylistLength
function getPlaylistLength(playlist){
    return playlist.songs.length;
}

// getHardestHomework
function getHardestHomework(anArray){
    if(anArray.length === 0){
        return '';
    }

    let lowest = anArray[0];

    for(let i = 0; i < anArray.length; i++){
        if(anArray[i].averageScore < lowest.averageScore){
            lowest = anArray[i]
        }
    }
    return lowest.name;
}

// createPhonebook
function createPhonebook(names, numbers) {
    let phonebook = {};
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      let number = numbers[i];
      phonebook[name] = number;
    }
    return phonebook;
  }

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};