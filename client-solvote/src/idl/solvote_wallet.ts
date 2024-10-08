"use client";
// export type SolvoteWallet = {
//   "version": "0.1.0",
//   "name": "solvote_wallet",
//   "instructions": [
//     {
//       "name": "createPoll",
//       "accounts": [
//         {
//           "name": "poll",
//           "isMut": true,
//           "isSigner": true
//         },
//         {
//           "name": "user",
//           "isMut": true,
//           "isSigner": true
//         },
//         {
//           "name": "systemProgram",
//           "isMut": false,
//           "isSigner": false
//         }
//       ],
//       "args": [
//         {
//           "name": "question",
//           "type": "string"
//         },
//         {
//           "name": "options",
//           "type": {
//             "vec": "string"
//           }
//         }
//       ]
//     },
//     {
//       "name": "vote",
//       "accounts": [
//         {
//           "name": "poll",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "user",
//           "isMut": true,
//           "isSigner": true
//         }
//       ],
//       "args": [
//         {
//           "name": "optionIndex",
//           "type": "u8"
//         }
//       ]
//     }
//   ],
//   "accounts": [
//     {
//       "name": "poll",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "question",
//             "type": "string"
//           },
//           {
//             "name": "options",
//             "type": {
//               "vec": "string"
//             }
//           },
//           {
//             "name": "votes",
//             "type": {
//               "vec": "u64"
//             }
//           }
//         ]
//       }
//     }
//   ],
//   "errors": [
//     {
//       "code": 6000,
//       "name": "QuestionTooLong",
//       "msg": "The provided question is too long."
//     },
//     {
//       "code": 6001,
//       "name": "OptionsTooMany",
//       "msg": "Too many options provided."
//     },
//     {
//       "code": 6002,
//       "name": "VotesInitializationFailed",
//       "msg": "Failed to initialize votes."
//     },
//     {
//       "code": 6003,
//       "name": "InvalidOptionIndex",
//       "msg": "The selected option index is invalid."
//     }
//   ]

//   // "metadata": {
//   //   "address": "BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu"
//   // },
//   // "address": "BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu"
// };

export const IDL = {                  //export const IDL: SolvoteWallet = {

  "version": "0.1.0",
  "name": "solvote_wallet",
  "instructions": [
    {
      "name": "createPoll",
      "accounts": [
        {
          "name": "poll",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "question",
          "type": "string"
        },
        {
          "name": "options",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "poll",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "optionIndex",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "poll",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "question",
            "type": "string"
          },
          {
            "name": "options",
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "votes",
            "type": {
              "vec": "u64"
            }
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "QuestionTooLong",
      "msg": "The provided question is too long."
    },
    {
      "code": 6001,
      "name": "OptionsTooMany",
      "msg": "Too many options provided."
    },
    {
      "code": 6002,
      "name": "VotesInitializationFailed",
      "msg": "Failed to initialize votes."
    },
    {
      "code": 6003,
      "name": "InvalidOptionIndex",
      "msg": "The selected option index is invalid."
    }
  ],
  metadata: {
    name: 'solvote_wallet',
    version: '1.0.0',
    spec: 'spl_governance',
    address: 'BK5UCcfueEnGzvWf7tnQ7izAGupynCNn8bLXHpR128vu',
  },
};



