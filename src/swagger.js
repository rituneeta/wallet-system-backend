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
                        "name": "firstName",
                        "in": "formData",
                        "description": "FirstName",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "lastName",
                        "in": "formData",
                        "description": "LastName",
                        "required": true,
                        "type": "string"
                    },
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
                        "name": "Authorization",
                        "in": "header",
                        "description": "Enter jwt token for authentication",
                        "required": true,
                        "type": "string"
                      },
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
                  "type": "string"
                }
              ],
              "responses": {}
            }
          },
    }
}

export default swaggerDocument;