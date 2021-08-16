import { MenuEntry } from '@sunswap/sunswap-finance-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    href: 'https://exchange.sunswapfinance.com/#/swap',
    icon: 'ExchangeIcon',
  },
  {
    label: 'Liquidity',
    href: 'https://exchange.sunswapfinance.com/#/pool',
    icon: 'LiquidityIcon',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Oceans',
  //   icon: 'WaveIcon',
  //   href: '/oceans',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Launchpad (IDOs)',
  //   icon: 'IdoIcon',
  //   href: '/ido',
  // },
  // {
  //   label: 'Audited By Certik ✅',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/saltswap',
  // },
  // // {
  // //   label: 'NFT',
  // //   icon: 'NftIcon',
  // //   href: '/nft',
  // // },
  // {
  //   label: 'Price Graph',
  //   icon: 'GraphIcon',
  //   href: '/graph',
  // },
  // {
  //   label: 'Listings',
  //   icon: 'ListingIcon',
  //   items: [
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/saltswap-finance',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/saltswap',
  //     },
  //     {
  //       label: 'DappRadar',
  //       href: 'https://dappradar.com/binance-smart-chain/defi/saltswap',
  //     },
  //   ],
  // },
  // {
    {
      label: "More",
      icon: "MoreIcon",
      items: [
        {
          label: "Github",
          href: "https://github.com/sunswap-finance",
          icon: "GithubIcon",
        },
        {
          label: "Docs",
          href: "https://docs.sunswapfinance.com",
          icon: "GitbookIcon",
        },
        {
          label: "Blog",
          href: "https://medium.com/@SunSwap.Finance",
          icon: "MediumIcon",
        },
      ],
    },
]

export default config
