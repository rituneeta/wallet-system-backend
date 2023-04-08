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
            "name": "first_name",
            "in": "formData",
            "description": "User's first Name",
            "required": false,
            "type": "string"
          },
          {
            "name": "last_name",
            "in": "formData",
            "description": "User's last Name",
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
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/wallet/add-money": {
      "post": {
        "tags": [
          "Wallet"
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
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/wallet/pay-money": {
      "post": {
        "tags": [
          "Wallet"
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
            "name": "receiver_account_number",
            "in": "formData",
            "description": "Enter receiver account number",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/wallet/passbook": {
      "get": {
        "tags": [
          "Wallet"
        ],
        "description": "get Passbook Lists",
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
        "parameters": [],
        "responses": {}
      }
    }
  }
}

export default swaggerDocument;