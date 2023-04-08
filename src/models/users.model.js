import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const userModel = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    passcode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    account_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "users" });

userModel.sync({ alter: true });