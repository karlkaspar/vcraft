import { User } from "../../../db/models";
import { RegisterCredentials } from "src/_domain/user.interface";

// INTERFACE RegisterCredentials HERE CAN PROBABLY BE USED BETTER
const createUserResolver = (variables: string, { email, firstName, lastName, password }: RegisterCredentials) => {
  return User.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password
  });
};

export default createUserResolver;
