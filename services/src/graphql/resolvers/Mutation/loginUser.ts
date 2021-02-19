import { User } from "../../../db/models";
import { LoginCredentials } from "../../../_domain/user.interface";

// INTERFACE LoginCredentials HERE CAN PROBABLY BE USED BETTER
const loginUser = async (variables: string, {email, password}: LoginCredentials) =>  {
  try {
    const res = await User.findOne({ where: { email, password } });
    if (!res) {
      return null;
    }
    return {
      id: res!.id,
      email: res!.email,
      firstName: res!.firstName,
      lastName: res!.lastName,
      password: res!.password
      // IN A PRODUCTION ENVIRONMENT, I WOULD HASH THE PASSWORD
      // IN THIS FUNCTION I AM RETURNING THE PASSWORD, THIS IS NOT SOMETHING THAT SHOULD BE DONE IN A PRODUCTION ENVIRONMENT
      // INSTEAD I WOULD NEED AN IF CLAUSE HERE, TO DISCERN WETHER TO RETURN THE PASSWORD AS WELL OR NOT TO AT ALL(if mode === 'testing' etc).
      // OR SOME OTHER PRACTICE
    }
  } catch (error) {
    return error
  }
};

export default loginUser;
