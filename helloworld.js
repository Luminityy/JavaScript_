function nodeJSConsole() {
    console.log("Hello World, from Node.js!");
}


function browserConsole() {
    console.log("Hello World, from Browser Console!");
}


function main() {
   
    if (typeof module !== 'undefined' && module.exports) {
        // Running in Node.js
        nodeJSConsole();
    } else {
        
        browserConsole();
    }
}


main();
