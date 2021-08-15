import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 2,
    lpSymbol: 'SUN-BNB SUN-LP',
    lpAddresses: {
      97: '0xc3de862fb1db94d8fe3d2f56b8e6732edec0600c',
      56: '0xc3de862fb1db94d8fe3d2f56b8e6732edec0600c',
    },
    tokenSymbol: 'SUN',
    tokenAddresses: {
      97: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
      56: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isMasterChef: true,
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'SUN-BUSD SUN-LP',
    lpAddresses: {
      97: '0xe5d2A6b132Cf96d58B1342A3eB7b743f8b9843c9',
      56: '0xe5d2A6b132Cf96d58B1342A3eB7b743f8b9843c9',
    },
    tokenSymbol: 'SUN',
    tokenAddresses: {
      97: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
      56: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isMasterChef: true,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SUN',
    lpAddresses: {
      97: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
      56: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
    },
    tokenSymbol: 'SUN',
    tokenAddresses: {
      97: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
      56: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isMasterChef: true,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'SUN-BNB CAKE-LP',
    lpAddresses: {
      97: '0x5da54cd63a1527bee4fee107b95962ff58d2a383',
      56: '0x5da54cd63a1527bee4fee107b95962ff58d2a383',
    },
    tokenSymbol: 'SUN',
    tokenAddresses: {
      97: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
      56: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isMasterChef: true,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'SUN-BUSD CAKE-LP',
    lpAddresses: {
      97: '0xceebdc8363dcd273a1ff82079739e1881356552b',
      56: '0xceebdc8363dcd273a1ff82079739e1881356552b',
    },
    tokenSymbol: 'SUN',
    tokenAddresses: {
      97: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
      56: '0x443eF8083f1b3C882C10C3A1A21645c2aE720c94',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isMasterChef: true,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'BNB-BUSD SUN-LP',
    lpAddresses: {
      97: '0xd13C9F31F93C2f31C66e893E70Ff24E52De4CDB8',
      56: '0xd13C9F31F93C2f31C66e893E70Ff24E52De4CDB8',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isMasterChef: true,
  },
  {
    pid: 6,
    risk: 2,
    lpSymbol: 'BNB-ETH SUN-LP',
    lpAddresses: {
      97: '0x25382ed1859b10703b5309b4a32f83603C63ffb0',
      56: '0x25382ed1859b10703b5309b4a32f83603C63ffb0',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    isMasterChef: true,
  },
  {
    pid: 7,
    risk: 2,
    lpSymbol: 'BUSD-USDT SUN-LP',
    lpAddresses: {
      97: '0xabb59b76d1accb20526ffe6af0eb18f71ed6633c',
      56: '0xabb59b76d1accb20526ffe6af0eb18f71ed6633c',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x55d398326f99059ff775485246999027b3197955',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isMasterChef: true,
  },
  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isMasterChef: true,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isMasterChef: true,
  },
  {
    pid: 10,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isMasterChef: true,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '0x55d398326f99059ff775485246999027b3197955',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x55d398326f99059ff775485246999027b3197955',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isMasterChef: true,
  },
].filter((f) => f.lpAddresses[CHAIN_ID])

export default farms
