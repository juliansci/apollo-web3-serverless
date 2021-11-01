import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    getEthCurrentBlock: String
    getERC20TotalSupply(address: String!): String
  }
`;

export default typeDefs;
