let userName = "Vijay";
let userCity = "Bengaluru";
let usergreeting = function(){
    return userName+" says hi";
}
// module.exports.userName = userName;
// module.exports.userCity = userCity;
module.exports = {
    un : userName,
    uc : userCity,
    ug : usergreeting
}