import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const walletModel = sequelize.define("wallets", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    account_number:{
        type: DataTypes.STRING,
        allowNull:false,
    }
}, { tableName: "wallets" }
);
walletModel.sync({ alter: true });