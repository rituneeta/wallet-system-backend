const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "User Wallet System Apis"
  },
  "basePath": "/api",
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json",
    "application/x-www-form-urlencoded",
    "multipart/form-data"
  ],
  "produces": [
    "application/json"
  ],
  "tags": [
    {
      "name": "User",
      "description": "User related api's"
    }
  ],
  "paths": {
    "/user/signup": {
      "post": {
        "tags": [
          "User"
        ],
        "description": "signUp API",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "first_name",
            "in": "formData",
            "description": "Enter the first name",
            "required": true,
            "type": "string"
          },
          {
            "name": "last_name",
            "in": "formData",
            "description": "Enter the last name",
            "required": true,
            "type": "string"
          },
          {
            "name": "email",
            "in": "formData",
            "description": "Enter the email",
            "required": true,
            "type": "string"
          },
          {
            "name": "account_number",
            "in": "formData",
            "description": "Enter the account Number",
            "required": true,
            "type": "string"
          },
          {
            "name": "password",
            "in": "formData",
            "description": "Enter the password",
            "required": true,
            "type": "string"
          },
          {
            "name": "passcode",
            "in": "formData",
            "description": "Enter the passcode",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/user/login": {
      "post": {
        "tags": [
          "User"
        ],
        "description": "Login API",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "email",
            "in": "formData",
            "description": "email",
            "required": true,
            "type": "string"
          },
          {
            "name": "password",
            "in": "formData",
            "description": "password",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/user/profile": {
      "get": {
        "tags": [
          "User"
        ],
        "description": "get User profile",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "description": "Enter jwt token for authentication",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/user/update-profile": {
      "patch": {
        "tags": [
          "User"
        ],
        "description": "User api",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "description": "Enter jwt token for authentication",
            "required": true,
            "type": "string"
          },
          {
            "name": "firstName",
            "in": "formData",
            "description": "User's firstName",
            "required": false,
            "type": "string"
          },
          {
            "name": "lastName",
            "in": "formData",
            "description": "User's lastName",
            "required": false,
            "type": "string"
          },
          {
            "name": "email",
            "in": "formData",
            "description": "Enter your email",
            "required": false,
            "type": "string"
          },
          {
            "name": "passcode",
            "in": "formData",
            "description": "User's passcode",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {}
      }
    },
    "/user/wallet-add": {
      "post": {
        "tags": [
          "User"
        ],
        "description": "Add money to wallet",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "description": "Enter jwt token for authentication",
            "required": true,
            "type": "string"
          },
          {
            "name": "amount",
            "in": "formData",
            "description": "amount",
            "required": true,
            "type": "integer"
          },
          {
            "name": "passcode",
            "in": "formData",
            "description": "passcode",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {}
      }
    },
    "/user/wallet-send": {
      "post": {
        "tags": [
          "User"
        ],
        "description": "send money to wallet",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "description": "Enter jwt token for authentication",
            "required": true,
            "type": "string"
          },
          {
            "name": "passcode",
            "in": "formData",
            "description": "passcode",
            "required": true,
            "type": "string"
          },
          {
            "name": "amount",
            "in": "formData",
            "description": "amount",
            "required": true,
            "type": "integer"
          },
          {
            "name": "destinationAccountNumber",
            "in": "formData",
            "description": "destinationAccountNumber",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {}
      }
    },
    "/user/passbook": {
      "get": {
        "tags": [
          "User"
        ],
        "description": "get User Passbook Lists",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "description": "Enter jwt token for authentication",
            "required": true,
            "type": "string"
          },
          {
            "name": "sourceAccountNumber",
            "in": "query",
            "description": "get the list on the basis of receiver user Id",
            "required": false,
            "type": "integer"
          },
          {
            "name": "destinationAccountNumber",
            "in": "query",
            "description": "get the list on the basis of receiver user Id",
            "required": false,
            "type": "integer"
          },
        ],
        "responses": {}
      }
    },
    "/user/logging": {
      "get": {
        "tags": [
          "User"
        ],
        "description": "get api logging list",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "description": "Enter jwt token for authentication",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/admin/users": {
      "get": {
        "tags": [
          "Admin"
        ],
        "description": "get User Lists",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "description": "get the list on the basis of user Id",
            "required": false,
            "type": "integer"
          },
        ],
        "responses": {}
      }
    },
    "/admin/users-wallet": {
      "get": {
        "tags": [
          "Admin"
        ],
        "description": "get User Wallet Lists",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "description": "get the list on the basis of user Id",
            "required": false,
            "type": "integer"
          },
        ],
        "responses": {}
      }
    },
    "/admin/users-transaction": {
      "get": {
        "tags": [
          "Admin"
        ],
        "description": "get User transaction Lists",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "sourceAccountNumber",
            "in": "query",
            "description": "get the list on the basis of senderUserId",
            "required": false,
            "type": "integer"
          },
          {
            "name": "destinationAccountNumber",
            "in": "query",
            "description": "get the list on the basis of receiverUserId",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {}
      }
    }
  }
}

export default swaggerDocument;