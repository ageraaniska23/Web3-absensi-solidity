import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: '8c6b76f6cc9d3c1c0675f53f629e2bfc',
  chains: [
    mainnet,
    polygon,
    {
      id: 97,
      name: 'Binance Smart Chain Testnet',
      network: 'bsc-testnet',
      nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
      },
      rpcUrls: {
        default: { http: ['https://bsc-testnet.publicnode.com'] },
        public: { http: ['https://bsc-testnet.publicnode.com'] },
      },
      blockExplorers: {
        etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
        default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
      },
      contracts: {
        multicall3: {
          address: 'ce6c5fd275e88f43717a1915977715deeb40047188b20700a0d59adbf90a5769',
          blockCreated: 17422483,
        },
      },
      testnet: true,
    }
  ],
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config} >
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
