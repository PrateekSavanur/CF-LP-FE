import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet(),
    // walletConnect({ projectId: "7ed975826af460eba1103fb3719f68b2" }),
  ],
  transports: {
    [mainnet.id]: http(
      `https://eth-mainnet.g.alchemy.com/v2/${import.meta.env.VITE_PUBLIC_ALCHEMY_ID}`
    ),
    [sepolia.id]: http(
      `https://eth-sepolia.g.alchemy.com/v2/${import.meta.env.VITE_PUBLIC_ALCHEMY_ID}`
    ),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
