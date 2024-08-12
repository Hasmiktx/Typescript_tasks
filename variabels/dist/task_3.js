"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function getRole(role) {
    switch (role) {
        case Role.Admin:
            return `This role for Admin`;
        case Role.User:
            return `This role for User`;
        default:
            return `Welcome Guset mode`;
    }
}
console.log(getRole(Role.Guest));
