declare enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
declare function getRole(role: Role): string;
