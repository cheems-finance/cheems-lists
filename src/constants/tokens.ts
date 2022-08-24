import { ChainId } from '@cheemsfinance/sdk'
import { Token } from './types'

const tokens: Record<string, Token> = {
  // CHEEMS should always be first token for WOOF calculation
  banana: {
    symbol: 'CHEEMS',
    address: {
      // [ChainId.BSC]: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
      // [ChainId.MATIC]: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
      // [ChainId.MAINNET]: '0x92df60c51c710a1b1c20e42d85e221f3a1bfc7f2',
      // [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.DOGECHAIN]: '0x7d686b37CdCa9dE7c3CB75601E028383675153d2',
      [ChainId.DOGECHAIN_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  MockERC20: {
    symbol: 'MockERC20',
    address: {
      // [ChainId.BSC]: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
      // [ChainId.MATIC]: '',
      // [ChainId.MAINNET]: '',
      // [ChainId.BSC_TESTNET]: '0x68D24FA18c00B5Df32e91C1dDDfa6419083606F9',
      [ChainId.DOGECHAIN]: '',
      [ChainId.DOGECHAIN_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  gnana: {
    symbol: 'WOOF',
    address: {
      // [ChainId.BSC]: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      // [ChainId.MATIC]: '',
      // [ChainId.MAINNET]: '',
      // [ChainId.BSC_TESTNET]: '0xf693bDA9D3C56D5F9165c8633d9098e3C4Ae495A',
      [ChainId.DOGECHAIN]: '0xbcE7c14C1AB57847932739618b345EEE2c79400F',
      [ChainId.DOGECHAIN_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  wwdoge: {
    symbol: 'WDOGE',
    address: {
      // [ChainId.BSC]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      // [ChainId.MATIC]: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      // [ChainId.MAINNET]: '',
      // [ChainId.BSC_TESTNET]: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      [ChainId.DOGECHAIN]: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
      [ChainId.DOGECHAIN_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  wbnb: {
    symbol: 'BNB',
    address: {
      // [ChainId.BSC]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      // [ChainId.MATIC]: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      // [ChainId.MAINNET]: '',
      // [ChainId.BSC_TESTNET]: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      [ChainId.DOGECHAIN]: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      [ChainId.DOGECHAIN_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  /* wmatic: {
    symbol: 'MATIC',
    address: {
      [ChainId.BSC]: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
      [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  },
  busd: {
    symbol: 'BUSD',
    address: {
      [ChainId.BSC]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    },
    decimals: 18,
    active: true,
  },
  eth: {
    symbol: 'ETH',
    address: {
      [ChainId.BSC]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      [ChainId.MATIC]: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378',
    },
    decimals: 18,
    active: true,
  },
  btc: {
    symbol: 'BTC',
    address: {
      [ChainId.BSC]: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      [ChainId.MATIC]: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8',
    },
    decimals: 18,
    active: true,
  },
  usdc: {
    symbol: 'USDC',
    address: {
      [ChainId.BSC]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      [ChainId.MATIC]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
  }, */

  // LP Tokens
  /* bananaBnb: {
    symbol: 'BANANA-BNB',
    address: {
      [ChainId.BSC]: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '0x90Fc86A7570063a9eA971ec74f01F89569Ad6237',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  bananaBusd: {
    symbol: 'BANANA-BUSD',
    address: {
      [ChainId.BSC]: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  bnbBusd: {
    symbol: 'BUSD-BNB',
    address: {
      [ChainId.BSC]: '0x51e6D27FA57373d8d4C256231241053a70Cb1d93',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  bnbEth: {
    symbol: 'ETH-BNB',
    address: {
      [ChainId.BSC]: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  bnbMatic: {
    symbol: 'MATIC-BNB',
    address: {
      [ChainId.BSC]: '0x29A4A3D77c010CE100A45831BF7e798f0f0B325D',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  bnbBtc: {
    symbol: 'BTC-BNB',
    address: {
      [ChainId.BSC]: '0x1E1aFE9D9c5f290d8F6996dDB190bd111908A43D',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  bnbFtm: {
    symbol: 'FTM-BNB',
    address: {
      [ChainId.BSC]: '0x47A0B7bA18Bb80E4888ca2576c2d34BE290772a6',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  },
  usdcBusd: {
    symbol: 'BUSD-USDC',
    address: {
      [ChainId.BSC]: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E',
      [ChainId.MATIC]: '',
      [ChainId.MAINNET]: '',
      [ChainId.BSC_TESTNET]: '',
    },
    decimals: 18,
    active: true,
    lpToken: true,
  }, */
}

export default tokens
