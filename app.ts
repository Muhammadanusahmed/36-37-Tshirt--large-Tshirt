Question36: Tshirt:

function make_shirt1(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt1("medium", "Code is Life");

console.log("__________________________________________________________");

Question37: largeTshirt:

function make_shirt2(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt2(); // Default large and message
make_shirt2("medium"); // Default message, medium size
make_shirt2("small", "Dive into Coding"); // Custom message, small size