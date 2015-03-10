//
// pasm.js
//
// Command line assembler for PASM.
//
"use strict";

var PEG = require('pegjs');
var assert = require('assert');
var fs = require('fs');

// Read pegjs grammar files and concatenate. 
function loadGrammar() {
    var grammarFiles = [
            "pre.peg",
            "con.peg",
            "dat.peg"
        ],
        grammar = "";
    grammarFiles.map(function (name) {
        grammar += fs.readFileSync(name, 'utf-8');
    });
    return grammar;
}

function testParser(parser, source, rule) {
    var ast;
    try {
        ast = parser.parse(source, {
            startRule: rule
        });
        console.log("Parse OK");
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
}

var grammar = loadGrammar();

// Create parser
var parser = PEG.buildParser(grammar, {
    cache: true,
    allowedStartRules: ["start", "program"]
});

var tests = [
        {sourceFile: "con.spin", rule: "start"},
        {sourceFile: "dat.spin", rule: "program"}
    ];
tests.map(function (test) {
    var source;
    source = fs.readFileSync(test.sourceFile, 'utf-8');
    testParser(parser, source, test.rule);
});





