import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const loggingModel = sequelize.define("logging", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    request:{
        type: DataTypes.JSON,
        allowNull:false,
    },
    response:{
        type: DataTypes.JSON,
        allowNull:false,
    }
}, { tableName: "logging" }
);
loggingModel.sync({ alter: true });