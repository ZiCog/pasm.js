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
 */
start
  = (conAssignments / conEnumerations)*  

conAssignments
  = conCON? white* constantAssignment white* "," white* conAssignmentList EOL 
  / conCON? white* constantAssignment EOL
  / conCON? white* EOL

conAssignmentList
  = constantAssignment white* "," white* conAssignmentList
  / constantAssignment

constantAssignment
  = symbol white* "=" white* constantExpression

conEnumerations
  = conCON? white* "#" white* constantExpression white* "," white* conEnumerationList EOL
  / conCON? white* "#" white* constantExpression EOL
  / conCON? white* conEnumerationList EOL
  / conCON? white* EOL

conCON
 = "CON"
 {
   return "Reset enumeration value here"
 }


conEnumerationList 
  = s:symbol white* o:conOffset? white* "," white* sd:conEnumerationList
  / s:symbol white* o:conOffset?

conOffset
  = "[" white* e:constantExpression white* "]"

constantExpression
  = d:[0-9]+
  {
    return parseInt(d.join(""));
  }

symbol
  = s:[a-zA-Z_]+
  {
    return s.join("");
  }

white
  = [ ]+

EOL
  = white* "\n"
