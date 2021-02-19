import { Sequelize } from "sequelize-typescript";
const mysql = require('mysql');
import models, { User } from "../db/models";

import "dotenv/config";

import accessEnv from "../helpers/accessEnv";
import loginUser from '../graphql/resolvers/Mutation/loginUser';

// TEST LIFECYCLE
// BEFORE ANYTHING WE CREATE DB, SYNC IT, TEST login AND register COMPONENTS THEN CLOSE CONNECTION

// GET TEST DB URL, FROM .env FILE
const TEST_DB_URL = accessEnv("TEST_DB_URL");

const email = 'testmail@test.com'; // TO SIMPLIFY TESTING, I MADE email AND password VARIABLES
const password = 'limonaad'; // MOVING THESE VARIABLES TO AN ANOTHER FILE LIKE "assertations.ts" MIGHT BE A GOOD IDEA
const userData = { // SINCE THERE IS NOT A LOT OF CODE TO TEST I LEFT THESE VARIABLES IN HERE FOR EASE OF ACCESS
  id: 1,
  firstName: 'Jimmy',
  lastName: 'Hendrix',
  email: email,
  password: password
};

// INIT SEQUELIZE OBJECT
const sequelize = new Sequelize(TEST_DB_URL, {
  dialectOptions: {
    charset: 'utf8mb4',
    multipleStatements: true
  },
  define: {
    timestamps: false
  },
  logging: false,
  models
});

// THIS FUNCTION CREATES THE mysql CONNECTION
const createConnection = async () =>  {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3307
  });

  await connection.connect((err: any) => {
    if (err) throw err;
    console.log('MYSQL CONNECTION MADE');
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS test_vcraft', () => {
    console.log("DB CREATION SUCCESSFUL");
    console.log('ATTEMPTING DB SYNC');
  });

}

beforeAll(async () => {
  await createConnection();
  // !!! ERROR, SEQUELIZE SYNC IS NOT WAITED FOR
  await sequelize.sync({force: true, logging: false}).then(() => {
    console.log('DB SYNCED AFTER MODEL');
  });
  // CREATE TABLES AFTER MODELS

  // SAVE A NEW USER INTO DB
  const newUser = new User(userData);
  await newUser.save();
  console.log('NEW USER ADDED');
});

test("USER CREATION, USER LOGIN", async (done) => {
  // TEST IF USER EXISTS
  const loginUserResponse = await loginUser('variables', {
    email: email,
    password: password
  });

  expect(loginUserResponse).toEqual(userData);
  // THIS TESTS USER CREATION AS WELL
  // THOUGH SHOULD AND WILL BE REPLACED WITH USER REGISTER COMPONENT
  console.log('afterAll');
  // DROP DB AND CLOSE CONNECTION
  await sequelize.drop();
  await sequelize.close();
  done();
});
