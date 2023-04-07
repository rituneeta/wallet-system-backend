import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const transactionModel = sequelize.define("transaction", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    senderUserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    senderPhoneNumber:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    receiverPhoneNumber:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    receiverUserId:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    // operationType:{
    //     type: DataTypes.STRING,
    //     allowNull:true,
    //     enum: ['add', 'debit','credit']
    // },
}, { tableName: "transaction" }
);
transactionModel.sync({ alter: true });