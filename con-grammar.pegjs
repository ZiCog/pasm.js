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
{
  _output = [];
  _enumList = [ ];
}


start
  = (CONAssignments / CONEnumerations)*
  {
    return _output;
  }

conCON
  = c:"CON"
  {
    return true;
  }

CONAssignments
  = c:conCON? conAssignments

conAssignments
  = white* constantAssignment white* "," white* conAssignmentList EOL 
  / white* constantAssignment EOL
  / white* EOL

conAssignmentList
  = constantAssignment white* "," white* conAssignmentList
  / constantAssignment

constantAssignment
  = symbol white* "=" white* constantExpression

CONEnumerations
  = c:"CON"? white* ce:conEnumerations
  {
      _output.push({CON: c, ENUMERATIONS:ce});
      _enumList = [ ];
  }

conEnumerations
  = "#" white* ce:constantExpression white* "," white* el:conEnumerationList EOL
  {
    return {HASH: ce, enums:el};
  }
  / "#" white* ce:constantExpression EOL
  {
    return {HASH: ce};
  }
  / el:conEnumerationList EOL
  {
    return {enums:el};
  }
  / EOL


conEnumerationList 
  = s:symbol white* o:conOffset? white* "," white* conEnumerationList
  {
    _enumList.unshift({constant: s, offset: o});
  }
  / s:symbol white* o:conOffset?
  {
    _enumList.unshift({symbol: s, offset: o});
    return _enumList
  }

conOffset
  = "[" white* e:constantExpression white* "]"
  {
    return (e);
  }

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
