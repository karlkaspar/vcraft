"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const accessEnv_1 = require("../helpers/accessEnv");
const models_1 = require("./models");
const DB_URL = accessEnv_1.default("DB_URL");
const sequelize = new sequelize_typescript_1.Sequelize(DB_URL, {
    dialectOptions: {
        charset: "utf8mb4",
        multipleStatements: true
    },
    logging: false,
    models: models_1.default
}); // UGLY FIX, ERROR: "NO OVERLOAD MATCHES THIS CALL" REMOVE "as any" TO SEE IT
exports.default = sequelize;
