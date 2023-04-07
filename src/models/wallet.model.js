import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const walletModel = sequelize.define("wallet", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    accountNumber:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
}, { tableName: "wallet" }
);
walletModel.sync({ alter: true });