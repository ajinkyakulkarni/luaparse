describe('operators', function() {
  it('a = -10', function() {
    expect(parser.parse('a = -10')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -"foo"', function() {
    expect(parser.parse('a = -"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": "foo"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -a', function() {
    expect(parser.parse('a = -a')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -nil', function() {
    expect(parser.parse('a = -nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -true', function() {
    expect(parser.parse('a = -true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": true
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -{}', function() {
    expect(parser.parse('a = -{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -function() end', function() {
    expect(parser.parse('a = -function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -a()', function() {
    expect(parser.parse('a = -a()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "arguments": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -(a)', function() {
    expect(parser.parse('a = -(a)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -                                   -- FAIL', function() {
    expect(parser.parse('a = -', {wait:true}).end).throws("[1:5] <expression> expected near '<eof>'");
  });
  it('a = not 10', function() {
    expect(parser.parse('a = not 10')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": 10
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not "foo"', function() {
    expect(parser.parse('a = not "foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": "foo"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not a', function() {
    expect(parser.parse('a = not a')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not nil', function() {
    expect(parser.parse('a = not nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not true', function() {
    expect(parser.parse('a = not true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": true
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not {}', function() {
    expect(parser.parse('a = not {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not function() end', function() {
    expect(parser.parse('a = not function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not a()', function() {
    expect(parser.parse('a = not a()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "arguments": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not (a)', function() {
    expect(parser.parse('a = not (a)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not                                 -- FAIL', function() {
    expect(parser.parse('a = not', {wait:true}).end).throws("[1:7] <expression> expected near '<eof>'");
  });
  it('a = 1 + 2; a = 1 - 2', function() {
    expect(parser.parse('a = 1 + 2; a = 1 - 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 * 2; a = 1 / 2', function() {
    expect(parser.parse('a = 1 * 2; a = 1 / 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 ^ 2; a = 1 .. 2', function() {
    expect(parser.parse('a = 1 ^ 2; a = 1 .. 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 +                                 -- FAIL', function() {
    expect(parser.parse('a = 1 +', {wait:true}).end).throws("[1:7] <expression> expected near '<eof>'");
  });
  it('a = 1 ..                                -- FAIL', function() {
    expect(parser.parse('a = 1 ..', {wait:true}).end).throws("[1:8] <expression> expected near '<eof>'");
  });
  it('a = 1 * /                               -- FAIL', function() {
    expect(parser.parse('a = 1 * /', {wait:true}).end).throws("[1:8] <expression> expected near '/'");
  });
  it('a = 1 + -2; a = 1 - -2', function() {
    expect(parser.parse('a = 1 + -2; a = 1 - -2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 * -                               -- FAIL', function() {
    expect(parser.parse('a = 1 * -', {wait:true}).end).throws("[1:9] <expression> expected near '<eof>'");
  });
  it('a = 1 * not 2; a = 1 / not 2', function() {
    expect(parser.parse('a = 1 * not 2; a = 1 / not 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 / not                             -- FAIL', function() {
    expect(parser.parse('a = 1 / not', {wait:true}).end).throws("[1:11] <expression> expected near '<eof>'");
  });
  it('a = 1 + 2 - 3 * 4 / 5 ^ 6', function() {
    expect(parser.parse('a = 1 + 2 - 3 * 4 / 5 ^ 6')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Literal",
                    "value": 5
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ((1 + 2) - 3) * (4 / (5 ^ 6))', function() {
    expect(parser.parse('a = ((1 + 2) - 3) * (4 / (5 ^ 6))')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 3
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "Literal",
                  "value": 4
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Literal",
                    "value": 5
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (1 + (2 - (3 * (4 / (5 ^ ((6)))))))', function() {
    expect(parser.parse('a = (1 + (2 - (3 * (4 / (5 ^ ((6)))))))')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Literal",
                  "value": 2
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 3
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 4
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "Literal",
                        "value": 5
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ((1                                 -- FAIL', function() {
    expect(parser.parse('a = ((1', {wait:true}).end).throws("[1:7] ')' expected near '<eof>'");
  });
  it('a = ((1 + 2)                            -- FAIL', function() {
    expect(parser.parse('a = ((1 + 2)', {wait:true}).end).throws("[1:12] ')' expected near '<eof>'");
  });
  it('a = 1)                                  -- FAIL', function() {
    expect(parser.parse('a = 1)', {wait:true}).end).throws("[1:5] Unexpected symbol ')' near ')'");
  });
  it('a = a + b - c', function() {
    expect(parser.parse('a = a + b - c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "a"
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" + "bar"', function() {
    expect(parser.parse('a = "foo" + "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo".."bar".."baz"', function() {
    expect(parser.parse('a = "foo".."bar".."baz"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "Literal",
                  "value": "bar"
                },
                "right": {
                  "type": "Literal",
                  "value": "baz"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true + false - nil', function() {
    expect(parser.parse('a = true + false - nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "value": true
                },
                "right": {
                  "type": "Literal",
                  "value": false
                }
              },
              "right": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {} * {}', function() {
    expect(parser.parse('a = {} * {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "TableConstructorExpression",
                "fields": []
              },
              "right": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end / function() end', function() {
    expect(parser.parse('a = function() end / function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a() ^ b()', function() {
    expect(parser.parse('a = a() ^ b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "arguments": []
              },
              "right": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "b"
                },
                "arguments": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  // @TODO Logical?
  it('a = 1 == 2; a = 1 ~= 2', function() {
    expect(parser.parse('a = 1 == 2; a = 1 ~= 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "~=",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 < 2; a = 1 <= 2', function() {
    expect(parser.parse('a = 1 < 2; a = 1 <= 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "<=",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 > 2; a = 1 >= 2', function() {
    expect(parser.parse('a = 1 > 2; a = 1 >= 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 < 2 < 3', function() {
    expect(parser.parse('a = 1 < 2 < 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 >= 2 >= 3', function() {
    expect(parser.parse('a = 1 >= 2 >= 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "BinaryExpression",
                "operator": ">=",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 ==                                -- FAIL', function() {
    expect(parser.parse('a = 1 ==', {wait:true}).end).throws("[1:8] <expression> expected near '<eof>'");
  });
  it('a = `                                   -- FAIL', function() {
    expect(parser.parse('a = `', {wait:true}).end).throws("[1:5] Unexpected symbol '`' near '='");
  });
  it('a = ~                                   -- FAIL', function() {
    expect(parser.parse('a = ~', {wait:true}).end).throws("[1:5] '=' expected near '~'");
  });
  // @TODO near is wrong
  it('a = ~= 2                                -- FAIL', function() {
    expect(parser.parse('a = ~= 2', {wait:true}).end).throws("[1:8] <expression> expected near '<eof>'");
  });
  it('a = "foo" == "bar"', function() {
    expect(parser.parse('a = "foo" == "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" > "bar"', function() {
    expect(parser.parse('a = "foo" > "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a ~= b', function() {
    expect(parser.parse('a = a ~= b')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "~=",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true == false', function() {
    expect(parser.parse('a = true == false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": true
              },
              "right": {
                "type": "Literal",
                "value": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and 2; a = 1 or 2', function() {
    expect(parser.parse('a = 1 and 2; a = 1 or 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and                               -- FAIL', function() {
    expect(parser.parse('a = 1 and', {wait:true}).end).throws("[1:9] <expression> expected near '<eof>'");
  });
  // @TODO near
  it('a = or 1                                -- FAIL', function() {
    expect(parser.parse('a = or 1', {wait:true}).end).throws("[1:8] <expression> expected near '<eof>'");
  });
  it('a = 1 and 2 and 3', function() {
    expect(parser.parse('a = 1 and 2 and 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 or 2 or 3', function() {
    expect(parser.parse('a = 1 or 2 or 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and 2 or 3', function() {
    expect(parser.parse('a = 1 and 2 or 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a and b or c', function() {
    expect(parser.parse('a = a and b or c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Identifier",
                  "name": "a"
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a() and (b)() or c.d', function() {
    expect(parser.parse('a = a() and (b)() or c.d')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "arguments": []
                },
                "right": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "arguments": []
                }
              },
              "right": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d"
                },
                "base": {
                  "type": "Identifier",
                  "name": "c"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" and "bar"', function() {
    expect(parser.parse('a = "foo" and "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true or false', function() {
    expect(parser.parse('a = true or false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "Literal",
                "value": true
              },
              "right": {
                "type": "Literal",
                "value": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {} and {} or {}', function() {
    expect(parser.parse('a = {} and {} or {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "TableConstructorExpression",
                  "fields": []
                },
                "right": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              },
              "right": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (1) and ("foo") or (nil)', function() {
    expect(parser.parse('a = (1) and ("foo") or (nil)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": "foo"
                }
              },
              "right": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end == function() end', function() {
    expect(parser.parse('a = function() end == function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end or function() end', function() {
    expect(parser.parse('a = function() end or function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (((1 or false) and true) or false) == true', function() {
    expect(parser.parse('a = (((1 or false) and true) or false) == true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "Literal",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "value": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": true
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": false
                }
              },
              "right": {
                "type": "Literal",
                "value": true
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (((nil and true) or false) and true) == false', function() {
    expect(parser.parse('a = (((nil and true) or false) and true) == false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "and",
                    "left": {
                      "type": "Literal",
                      "value": null
                    },
                    "right": {
                      "type": "Literal",
                      "value": true
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": true
                }
              },
              "right": {
                "type": "Literal",
                "value": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not ((true or false) and nil)', function() {
    expect(parser.parse('a = not ((true or false) and nil)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "Literal",
                    "value": true
                  },
                  "right": {
                    "type": "Literal",
                    "value": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": null
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true or false  and nil', function() {
    expect(parser.parse('a = true or false  and nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "Literal",
                "value": true
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": false
                },
                "right": {
                  "type": "Literal",
                  "value": null
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 2^-2 == 1/4 and -2^- -2 == - - -4', function() {
    expect(parser.parse('a = 2^-2 == 1/4 and -2^- -2 == - - -4')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Literal",
                    "value": 2
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 2
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 2
                        }
                      }
                    }
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 4
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -3-1-5 == 0+0-9', function() {
    expect(parser.parse('a = -3-1-5 == 0+0-9')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 3
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 5
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": 0
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 9
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -2^2 == -4 and (-2)^2 == 4 and 2*2-3-1 == 0', function() {
    expect(parser.parse('a = -2^2 == -4 and (-2)^2 == 4 and 2*2-3-1 == 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "Literal",
                        "value": 2
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2
                      }
                    }
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 4
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Literal",
                        "value": 2
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 2*1+3/3 == 3 and 1+2 .. 3*1 == "33"', function() {
    expect(parser.parse('a = 2*1+3/3 == 3 and 1+2 .. 3*1 == "33"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 3
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "..",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "33"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not nil and 2 and not(2>3 or 3<2)', function() {
    expect(parser.parse('a = not nil and 2 and not(2>3 or 3<2)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "Literal",
                    "value": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not(2+1 > 3*1) and "a".."b" > "a"', function() {
    expect(parser.parse('a = not(2+1 > 3*1) and "a".."b" > "a"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "..",
                  "left": {
                    "type": "Literal",
                    "value": "a"
                  },
                  "right": {
                    "type": "Literal",
                    "value": "b"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "a"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
});

