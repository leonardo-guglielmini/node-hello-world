//console.log("Hello World");

//console.log(process.argv);

let words = process.argv.slice(2).map((arg) => {
    return arg;
});

//console.log(words);
console.log(`Hello ${words.join(" ")}`);
