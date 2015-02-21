/*
 * CON
 *
 * Syntax1:
 * Symbol = Expression <EOL(( ,┆ EOL )) Symbol = Expression>...
 *
 * Syntax2:
 * #Expression (( ,┆ EOL )) Symbol <[Offset]> <(( ,┆ EOL )) Symbol <[Offset]> >...
 *
 * Syntax3:
 * Symbol <[Offset]> <(( ,┆ EOL )) Symbol <[Offset]> > ...
 * 
 * Note:   Suspect syntax 3 is NOT redundant it is not just the tail of syntax 2
 *
 * Issues: 
 *         Syntax 2 will need a line feed to terminate it, else it get confused.
 */
start
  = conBlock
  
conBlock
  = conSyntax*

conSyntax
  = "CON" white* EOL+ 
  / conSyntax3 EOL+
  {
    return "syntax3"
  }
  / conSyntax2 EOL+
  {
    return "syntax2"
  }
  / conSyntax1 EOL+
  {
    return "syntax1"
  }

conSyntax1 
  = "CON"? white constantAssignments
  / constantAssignments

constantAssignments
  = symbol white* [=] white* constantExpression (white* [,\n] white* constantAssignments)*

conSyntax2 
  = "CON"? white* "#" white* constantExpression white* [,\n] white* symbolDefs
  / "CON"? white* "#" white* constantExpression

conSyntax3 
  = "CON"? white* symbolDefs* white*

symbolDefs 
  = symbol white* offset? white* [,\n] white* symbolDefs !("=")  
  / symbol white* offset?  

offset
  = "[" white* constantExpression white* "]" 

constantExpression
  = [0-9]+

symbol
  = [a-zA-Z0-9_]+

white
  = [ ]+

EOL
  = (white* [\n])