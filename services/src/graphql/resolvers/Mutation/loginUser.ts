import { User } from "../../../db/models";

const loginUser = async (variables: any, {email, password}: {email: string, password: string}) =>  {
  console.log(variables);
  try {
    const res = await User.findOne({ where: { email, password } });
    console.log(res);
    if (!res) {
      return null;
    }
    return {
      id: res!.id,
      email: res!.email,
      fistName: res!.firstName,
      lastName: res!.lastName
    }
  } catch (error) {
    return error
  }
};

export default loginUser;
