Question36: Tshirt: function make_shirt1(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt1("medium", "Code is Life");
console.log("__________________________________________________________");
Question37: largeTshirt: function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt2(); // Default large and message
make_shirt2("medium"); // Default message, medium size
make_shirt2("small", "Dive into Coding"); // Custom message, small size
