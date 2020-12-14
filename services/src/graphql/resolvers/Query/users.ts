import { User } from "../../../db/models";

const usersResolver = () => {
  return User.findAll();
}

export default usersResolver;
