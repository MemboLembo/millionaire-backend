define({ "api": [
  {
    "type": "get",
    "url": "/api/questions",
    "title": "Get millionaire questions",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/questions"
      }
    ],
    "name": "GetQuestions",
    "group": "Questions",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "defaultValue": "12",
            "description": "<p>amount of questions to retreive</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n success: true,\n data: [{\n\n     \"question\": \"How many Suns do we have?\",\n     \"answers\": [\n         { \"label\": \"1\", \"isCorrect\": true },\n         { \"label\": \"4\", \"isCorrect\": false },\n         { \"label\": \"3\", \"isCorrect\": false },\n         { \"label\": \"2\", \"isCorrect\": false }\n      ]\n  },\n  {\n      \"question\": \"Who is Klichko?\",\n      \"answers\": [\n         { \"label\": \"actor\", \"isCorrect\": false },\n         { \"label\": \"president\", \"isCorrect\": false },\n         { \"label\": \"mayor of Kyiv\", \"isCorrect\": true },\n         { \"label\": \"tommorrow not everyone can look\", \"isCorrect\": true }\n      ]\n  }],\n error: \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Questions"
  },
  {
    "type": "get",
    "url": "/api/rewards",
    "title": "Get millionaire rewards",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:3000/api/rewards"
      }
    ],
    "name": "GetRewards",
    "group": "Rewards",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n success: true,\n data: [\n      1000000,\n      500000,\n      250000,\n      125000,\n      64000,\n      32000,\n      16000,\n      8000,\n      4000,\n      2000,\n      1000,\n      500\n    ],\n error: \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Rewards"
  }
] });
