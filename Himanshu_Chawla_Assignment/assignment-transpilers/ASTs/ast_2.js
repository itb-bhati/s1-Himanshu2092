function getUserName(a, b) {
  return a + b;
}

console.log(getUserName(10, 20));

// ********* ABSTRACT TREE (Json Version) *******

/*

{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "getUserName"
      },
      "expression": false,
      "generator": false,
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "name": "a"
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 45,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 30,
            "end": 43,
            "argument": {
              "type": "BinaryExpression",
              "start": 38,
              "end": 43,
              "left": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "name": "b"
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 78,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 78,
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 58,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "name": "log"
          },
          "computed": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 59,
            "end": 77,
            "callee": {
              "type": "Identifier",
              "start": 59,
              "end": 70,
              "name": "getUserName"
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 71,
                "end": 73,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "value": 20,
                "raw": "20"
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}

*/
