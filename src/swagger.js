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
    }
}

export default swaggerDocument;