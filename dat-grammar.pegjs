/*
 * dat-grammar.pegjs 
 *
 *   peg.js grammar specification for pasm.js.
 *   That is to say the DAT sections of Spin source files.
 *
 */

{
  function isKeyword (s) {return false}
}

start
  = program

program
  = lines

lines
  = line*

line
  = nonBlankLine
  / blankLine

nonBlankLine
  = white* s:pasmStatement white* "\n"?
    {
      return s;
    }
  / "DAT"i white* "\n"?
    {
      return {dat_block: true}
    }
  
blankLine
  = white* "\n"
    {
      return {bankLine: true};
    }
  / white+
    {
      return {bankLine: true};
    }
  / white* "'" c:[a-zA-Z0-9/ ']*  "\n"
    {
      return {comment: c.join("")};
    }

pasmStatement
  = l:label white c:condition white i:instruction
    {
      i.label = l;
      i.condition = c;
      return {instruction:i};
    }
  / l:label white i:instruction
    {
      i.label = l;
      return {instruction:i};
    }
  / c:condition white i:instruction
    {
      i.condition = c;
      return {instruction:i};
    }
  / i:instruction
    {
      return {instruction:i}
    }
  / o:org
  / f:fit
  / l:label
    {
      return {instruction: {label: l}};
    }
  
fit
  = "fit"i white e:expression
    {
      return {org: e}
    }
    / "fit"i
    {
      return {org: 0}
    }

org
  = "org"i white e:expression
    {
      return {org: e}
    }
    / "org"i
    {
      return {org: 0}
    }

expression
  = number

label
  = l:[a-zA-Z0-9_]+
    !{
      return isKeyword(l.join(""));
    }
    {
      return l.join("");
    }

instruction
  = o:op0 e:effectList
    {
      return {operation:o, effects:e}
    }
  / o:op1 white s:src e:effectList 
    {
      return {operation:o, src:s, efects:e}
    }
  / o:op2 white? d:dest white? "," white? s:src e:effectList
    {
      return {operation:o, dest:d, src:s, efects:e}
    }

src
  = l:"#"? [ ]* s:symbol
    {
      return {literal:l, value: s}
    }
  / l:"#"? [ ]* n:number
    {
      return {literal:l, value: n}
    }

dest
  = symbol
  / number

number
  = QuaternaryNumber
  / binaryNumber
  / hexNumber
  / decimalNumber

binaryNumber
  = "%" d:[0-1]*
    {
      return parseInt(d.join(""), 2);
    }

QuaternaryNumber
  = "%%" d:[0-3]+
    {
      return parseInt(d.join(""), 4);
    }

decimalNumber
  = d:[0-9]*
    {
      return parseInt(d.join(""), 10);
    }

hexNumber
  = "$" d:[0-9a-fA-F]*
    {
      return parseInt(d.join(""), 16);
    }

symbol
  = first:[a-zA-Z_] rest:[a-zA-Z_0-9]*
    !{
      return isKeyword(first + rest.join(""));
    }
    {
      return first + rest.join("");
    }

effectList
  = effectEntry*

effectEntry
  = white e:effect
    {
      return e
    }

effect
  = "wc"i
  / "wr"i
  / "wz"i
  / "nr"i

op0
  = "nop"i

op1
  = "jmp"i

op2
  = "add"i
  / "sub"i
  / "jmpret"i
  / "test"i
  / "mov"i
  / "rcr"i
  / "djnz"i
  / "shr"i
  / "rdlong"i
  / "rdbyte"i
  / "neg"i
  / "and"i
  / "cmp"i
  / "wrbyte"i
  / "wrlong"i
  / "waitcnt"i
  / "tjz"i
  / "or"i
  / "ror"i

white
  = [ ]+
    {
      return "WHITESPACE"
    }

condition
  = "if_e"i
  / "if_ne"i

