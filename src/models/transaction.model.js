import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const transactionModel = sequelize.define("transaction", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sourceAccountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    destinationAccountNumber:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    operationType:{
        type: DataTypes.STRING,
        allowNull:false,
        enum: ['add', 'debit','credit']
    },
}, { tableName: "transaction" }
);
transactionModel.sync({ alter: true });