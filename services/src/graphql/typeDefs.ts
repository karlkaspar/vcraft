import { gql } from "apollo-server";
// THIS IS PRETTY MUCH LIKE AN INTERFACE, DATA SCHEMA
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User!]!
  }
`;
// type Query IS A QUERY WHICH GETS OUR USERS

export default typeDefs;
