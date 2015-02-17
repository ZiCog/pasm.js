# pasm.js
A parser for the assembly language used by the Propeller micro-controller from Parallax Inc. in Javascript.

This is basically my experiment in using peg.js to create a parser for PASM. It may one day blossom into a real code code generating assembler but I would not count on it.


How to play with this
---------------------

Install pegjs globally to get the pegjs parser generator command:

    $ npm install -g pegjs

In the pasm.js directory install pegjs locally to get the module (This is not used yet but allows the parser generator to be used from the application itself):

    $ npm install pegjs

The parser can be regenerated from the grammar with pegjs:

    $ pegjs dat-grammar.pegjs dat-parser.js

Run the pasm parser:

    $ node  parser.js

Currently this will read content of test.spin and dump the resulting AST to the console.

Whilst test.spin is a genuine sample of pasm source taken from a serial port driver and it is parsed successfully this parse is by no means complete yet.
 


