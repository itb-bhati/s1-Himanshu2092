let name = "Himanshu";

function getUserName() {
  return `Hello ${name}`;
}

console.log(getUserName());

// ********* ABSTRACT TREE (Json Version) *******
/*

{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "name"
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 21,
            "value": "Himanshu",
            "raw": "'Himanshu'"
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 43,
        "name": "getUserName"
      },
      "expression": false,
      "generator": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 49,
            "end": 71,
            "argument": {
              "type": "TemplateLiteral",
              "start": 56,
              "end": 71,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "name": "name"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 57,
                  "end": 63,
                  "value": {
                    "raw": "Hello ",
                    "cooked": "Hello "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 70,
                  "end": 70,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 101,
        "callee": {
          "type": "MemberExpression",
          "start": 75,
          "end": 86,
          "object": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "name": "log"
          },
          "computed": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 87,
            "end": 100,
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "name": "getUserName"
            },
            "arguments": []
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}

*/
