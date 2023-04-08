import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const transactionModel = sequelize.define("transactions", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    account_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    transaction_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    source:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    transaction_type:{
        type: DataTypes.STRING,
        allowNull:false,
        enum: ['add', 'debit','credit']
    },
}, { tableName: "transactions" }
);
transactionModel.sync({ alter: true });