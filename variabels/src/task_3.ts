enum Role{
    Admin="Admin",
    User="User",
    Guest="Guest"
}


function getRole(role:Role):string{
    switch(role){
        case Role.Admin:
            return `This role for Admin`
        case Role.User:
            return `This role for User`
        default:
            return `Welcome Guset mode` as string
    }
}


console.log(getRole(Role.Admin))