// 1  - starts here
console.log("start");

// 2 - Adds the sayHelloTo method in the memory
function sayHelloTo(name) {
    // 6 - ends here
    console.log(`Hello ${name}`);
}

// 3 - Start the web api and waits for 4 seconds
setTimeout(() => {
    // 5 - Call  the function after 4 seconds
    sayHelloTo("asitha");
}, 4000);

//  4 - prints this
console.log("end");
