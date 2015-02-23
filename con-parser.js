module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = function() {
            return _output;
          },
        peg$c2 = "CON",
        peg$c3 = { type: "literal", value: "CON", description: "\"CON\"" },
        peg$c4 = function(c) {
            return true;
          },
        peg$c5 = peg$FAILED,
        peg$c6 = function(c) {
            _output.push({CON: c, ENUMERATIONS:null});
            _enumList = [ ];
          },
        peg$c7 = null,
        peg$c8 = ",",
        peg$c9 = { type: "literal", value: ",", description: "\",\"" },
        peg$c10 = "=",
        peg$c11 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c12 = function(c, ce) {
              _output.push({CON: c, ENUMERATIONS:ce});
              _enumList = [ ];
          },
        peg$c13 = "#",
        peg$c14 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c15 = function(ce, el) {
            return {HASH: ce, enums:el};
          },
        peg$c16 = function(ce) {
            return {HASH: ce};
          },
        peg$c17 = function(el) {
            return {enums:el};
          },
        peg$c18 = function(s, o) {
            _enumList.unshift({constant: s, offset: o});
            return _enumList
          },
        peg$c19 = function(s, o) {
            _enumList.unshift({symbol: s, offset: o});
            return _enumList
          },
        peg$c20 = "[",
        peg$c21 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c22 = "]",
        peg$c23 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c24 = function(e) {
            return (e);
          },
        peg$c25 = /^[0-9]/,
        peg$c26 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c27 = function(d) {
            return parseInt(d.join(""));
          },
        peg$c28 = /^[a-zA-Z_]/,
        peg$c29 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c30 = function(s) {
            return s.join("");
          },
        peg$c31 = /^[ ]/,
        peg$c32 = { type: "class", value: "[ ]", description: "[ ]" },
        peg$c33 = "\n",
        peg$c34 = { type: "literal", value: "\n", description: "\"\\n\"" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$cache = {},
        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0, s1, s2;

      var key    = peg$currPos * 15 + 0,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseCONBlank();
      if (s2 === peg$FAILED) {
        s2 = peg$parseCONAssignments();
        if (s2 === peg$FAILED) {
          s2 = peg$parseCONEnumerations();
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseCONBlank();
        if (s2 === peg$FAILED) {
          s2 = peg$parseCONAssignments();
          if (s2 === peg$FAILED) {
            s2 = peg$parseCONEnumerations();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c1();
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconCON() {
      var s0, s1;

      var key    = peg$currPos * 15 + 1,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c4(s1);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCONBlank() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 15 + 2,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseconCON();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseEOL();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c6(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCONAssignments() {
      var s0, s1, s2;

      var key    = peg$currPos * 15 + 3,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseconCON();
      if (s1 === peg$FAILED) {
        s1 = peg$c7;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseconAssignments();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconAssignments() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 15 + 4,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhite();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhite();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseconstantAssignment();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsewhite();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsewhite();
          }
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s4 = peg$c8;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c9); }
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parsewhite();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parsewhite();
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseconAssignmentList();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseEOL();
                  if (s7 !== peg$FAILED) {
                    s1 = [s1, s2, s3, s4, s5, s6, s7];
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c5;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c5;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsewhite();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsewhite();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseconstantAssignment();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseEOL();
            if (s3 !== peg$FAILED) {
              s1 = [s1, s2, s3];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = [];
          s2 = peg$parsewhite();
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsewhite();
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseEOL();
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconAssignmentList() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 15 + 5,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseconstantAssignment();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c8;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsewhite();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsewhite();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseconAssignmentList();
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseconstantAssignment();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconstantAssignment() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 15 + 6,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsesymbol();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsewhite();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsewhite();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseconstantExpression();
              if (s5 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseCONEnumerations() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 15 + 7,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$c7;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseconEnumerations();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c12(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconEnumerations() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      var key    = peg$currPos * 15 + 8,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c13;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c14); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseconstantExpression();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsewhite();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsewhite();
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c8;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c9); }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parsewhite();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parsewhite();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseconEnumerationList();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseEOL();
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c15(s3, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c5;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c5;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c5;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c13;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsewhite();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsewhite();
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseconstantExpression();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseEOL();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c16(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseconEnumerationList();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseEOL();
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c17(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconEnumerationList() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 15 + 9,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsesymbol();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseconOffset();
          if (s3 === peg$FAILED) {
            s3 = peg$c7;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsewhite();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsewhite();
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c8;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c9); }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parsewhite();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parsewhite();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseconEnumerationList();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c18(s1, s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c5;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c5;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsesymbol();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsewhite();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsewhite();
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseconOffset();
            if (s3 === peg$FAILED) {
              s3 = peg$c7;
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c19(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconOffset() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 15 + 10,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c20;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhite();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhite();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseconstantExpression();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsewhite();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsewhite();
            }
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c22;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c23); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c24(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseconstantExpression() {
      var s0, s1, s2;

      var key    = peg$currPos * 15 + 11,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      if (peg$c25.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c25.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c26); }
          }
        }
      } else {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c27(s1);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsesymbol() {
      var s0, s1, s2;

      var key    = peg$currPos * 15 + 12,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      if (peg$c28.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c28.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c29); }
          }
        }
      } else {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c30(s1);
      }
      s0 = s1;

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsewhite() {
      var s0, s1;

      var key    = peg$currPos * 15 + 13,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = [];
      if (peg$c31.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c31.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c32); }
          }
        }
      } else {
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseEOL() {
      var s0, s1, s2;

      var key    = peg$currPos * 15 + 14,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhite();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhite();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s2 = peg$c33;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c34); }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }


      _output = [];
      _enumList = [ ];


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
