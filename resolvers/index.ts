import Web3 from 'web3';
import ERC20Abi from '../contracts/abi/ERC20.json';
import { AbiItem } from 'web3-utils';
const PROVIDER_URL = process.env.WEB3_PROVIDER_URL;

const web3 = new Web3(PROVIDER_URL || '');

export const getEthCurrentBlock = async () => {
  return await web3.eth.getBlockNumber();
};

export const getERC20TotalSupply = async (address: string) => {
  const tokenContract = new web3.eth.Contract(ERC20Abi as AbiItem[], address);
  return await tokenContract.methods.totalSupply().call({});
};

const resolvers = {
  Query: {
    getEthCurrentBlock,
    getERC20TotalSupply: (_: any, { address }: { address: string }): Promise<string> => getERC20TotalSupply(address.toString()),
  },
};

export default resolvers;
