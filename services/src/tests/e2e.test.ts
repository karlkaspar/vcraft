import { Sequelize } from "sequelize-typescript";
import models, { User } from "../db/models";
import "dotenv/config";
import accessEnv from "../helpers/accessEnv";
// GET TEST DB URL, FROM .env FILE
const TEST_DB_URL = accessEnv("TEST_DB_URL");

const email = 'testmail@test.com'; // TO SIMPLIFY TESTING, I MADE email AND password VARIABLES
const password = 'limonaad';
const userData = { id: 1, firstName: 'Jimmy',lastName: 'Hendrix' , email: email, password: password };
// TODO: CREATE DB IF NOT EXISTS
const loginUser = async ({email, password}: {email: string, password: string}) =>  {
    console.log('ATTEMPTING TO LOGIN USER');
    try {
    const res = await User.findOne({ where: { email, password } });
    console.log('USER LOGIN SUCCESS');
    return res;
  } catch (error) {
    return error
  }
};

try {
  test("USER CREATION, USER LOGIN", async () => {
    // INIT SEQUELIZE
    const sequelize = await new Sequelize(TEST_DB_URL, {
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
    // CREATE TABLES AFTER MODELS
    sequelize.sync().then(result => {
      console.log('SEQUELIZE INITIATED')
    }).catch(err => console.log(err));
    // SAVE A NEW USER INTO DB
    const newUser = new User(userData);
    await newUser.save();

    // TEST LOGIN
    const loginUserResponse = await loginUser({
      email: email,
      password: password
    });
    expect(loginUserResponse.dataValues).toEqual(userData);  // THIS TESTS USER CREATION AS WELL
    // EMPTY DB
    sequelize.drop();
  });
} catch (error) {
  console.log('SEQUELIZE INIT ERROR', error);
}
