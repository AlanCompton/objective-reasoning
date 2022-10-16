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
    //return user.userRole === "ADMIN";
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
function getHardestHomework(homeworkArray){
    let lowestHw = homeworkArray[0];

    for(let i=0; i< homeworkArray.length ;i++){
        if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
        }
    }
    return lowestHw.name;
}

// createPhonebook
function createPhonebook(names,numbers){
    let phonebook = {};

    for(let i=0; i<names.length ;i++){
        phonebook[names[i]] = numbers[i];
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