//
// pasm.js
//
// Command line assembler for PASM.
//
"use strict"

var fs = require("fs");
var parser = require("./dat-parser.js");


function testParser (s) {
    var j;
    try {
        j = parser.parse(s);
        console.log("Parse OK");
        console.log(j);
    } catch (e) {
        console.log("Ooops...syntax error");
        console.log(e.message);
        console.log("    Offset:  " + e.offset);
        console.log("    Line:    " + e.line);
        console.log("    Column:  " + e.column);
        // console.log("    Expected:" + e.expected);
        console.log("    Found:   " + e.found);
    }
}

fs.readFile("test.spin", {encoding: "utf8"}, function (err, data) {
    if (err) throw err;
    testParser(data);
});






