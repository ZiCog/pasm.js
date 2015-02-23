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
  _assignmentList = [];
}

start
  = (CONBlank / CONAssignments / CONEnumerations  / (white* EOL))*
  {
    return _output;
  }

conCON
  = c:"CON"
  {
    return true;
  }

CONBlank
 = c:conCON white* EOL
  {
    _output.push({CON: c, ENUMERATIONS:null});
    _enumList = [ ];
  }

CONAssignments
  = c:conCON? white* al:conAssignmentList EOL
  {
    _output.push({CON:c, ASSIGMENTS: _assignmentList});
   _assignmentList = [];
  }

conAssignmentList
  = constantAssignment white* "," white* conAssignmentList 
  / constantAssignment

constantAssignment
  = s:symbol white* "=" white* ce:constantExpression
  {
    _assignmentList.push({symbol: s, expression:ce});
  }

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

conEnumerationList 
  = s:symbol white* o:conOffset? white* "," white* conEnumerationList
  {
    _enumList.unshift({constant: s, offset: o});
    return _enumList
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