import { Sequelize } from "sequelize-typescript";
import accessEnv from "../helpers/accessEnv";

import models from "./models";

const DB_URL = accessEnv("DB_URL");
const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: "utf8mb4",
    multipleStatements: true
  },
  define: {
        timestamps: false
    },
  logging: false,
  models
});

export default sequelize;
