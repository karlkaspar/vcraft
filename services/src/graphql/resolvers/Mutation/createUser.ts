import { User } from "../../../db/models";

const createUserResolver = (variables: any, { email, firstName, lastName, password }: { email: string, firstName: string, lastName: string, password: string }) => {
  console.log(variables);
  return User.create({ email: email, firstName: firstName, lastName: lastName, password: password });
};

export default createUserResolver;
