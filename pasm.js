//
// pasm.js
//
// Command line assembler for PASM.
//
"use strict"

var PEG = require('pegjs');
var assert = require('assert');
var fs = require('fs');

// Read pegjs grammar files and concatenate. 
function loadGrammar () {
    var grammarFiles = [
            "pre.peg",
            "con.peg",
            "dat.peg"
        ],
        grammar = "";
    grammarFiles.map(function(name) {
        grammar += fs.readFileSync(name, 'utf-8') ;
    });
    return grammar;
}

var grammar = loadGrammar();

// Create parser
var parser = PEG.buildParser(grammar, {
    cache: true,
    allowedStartRules: ["start", "program"]
});

// Read test data  
var source = fs.readFileSync('con.spin', 'utf-8');

// Do a test
var ast;
   try {
        ast = parser.parse(source, {
            startRule: "start"
        });
        console.log("Parse OK");
        console.log(typeof j);
        console.log(JSON.stringify(ast, null, '  '));
        //assert.deepEqual( parse("x==1\n"), ["a", "b", "c"] );
    } catch (e) {
        console.log("Ooops...syntax error");
        console.log(e.message);
        console.log("    Offset:  " + e.offset);
        console.log("    Line:    " + e.line);
        console.log("    Column:  " + e.column);
        // console.log("    Expected:" + e.expected);
        console.log("    Found:   " + e.found);
    }

function testParser (s) {
    var j;
    try {
        j = parser.parse(s, {
            startRule: "program"
        });
        console.log("Parse OK");
        console.log(typeof j);
        console.log(JSON.stringify(j, null, '  '));
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

fs.readFile("dat.spin", {encoding: "utf8"}, function (err, data) {
    if (err) throw err;
    testParser(data);
});






