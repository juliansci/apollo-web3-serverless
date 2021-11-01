const Web3 = require('web3');
const Contract = require('web3-eth-contract');
const ERC20Abi = require('../contracts/abi/ERC20.json');

const PROVIDER_URL = process.env.WEB3_PROVIDER_URL;

export const getEthCurrentBlock = async () => {
  const web3 = new Web3(PROVIDER_URL);
  return await web3.eth.getBlockNumber();
};

export const getERC20TotalSupply = async (address: String) => {
  Contract.setProvider(PROVIDER_URL);
  const tokenContract = new Contract(ERC20Abi, address);
  return await tokenContract.methods.totalSupply().call({});
};

const resolvers = {
  Query: {
    getEthCurrentBlock,
    getERC20TotalSupply: (_: any, { address }: { address: String }) => getERC20TotalSupply(address.toString()),
  },
};

export default resolvers;
