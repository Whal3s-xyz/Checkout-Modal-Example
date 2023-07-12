"use client"
import React from 'react';
import {createConfig, useAccount, WagmiConfig} from "wagmi";
import {mainnet} from "wagmi/chains";

import {ConnectKitProvider, getDefaultConfig} from "connectkit"

import {Whal3sModalProvider} from "@whal3s/react"
import {WagmiProvider} from "@whal3s/wagmiprovider";
import {watchAccount} from "@wagmi/core";

const chains = [ mainnet];


const config = createConfig(
    getDefaultConfig({
        // Required API Keys
        alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
        walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID ?? '',

        chains: chains,
        // Required
        appName: "Your app name",

        // Optional
        appDescription: "Your app description",
        appUrl: "https://www.whal3s.xyz", // your app's url
        appIcon: "https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/Whal3s_black.png", // your app's icon, no bigger than 256x256px (max. 512KB)
    }),
);


interface ProviderProps {
    utilityId?: string
    modalImage?: string
    children: React.ReactNode
}
const ConfiguredWhal3sDemoProvider = ({children, utilityId, modalImage}:ProviderProps) => {
    const account = useAccount();
    const wagmiProvider = new WagmiProvider(account)

    const unwatch = watchAccount((account) => {
        wagmiProvider.setAccount(account)
    })


    return (<Whal3sModalProvider utilityId={utilityId ?? 'fallback utility id'}
                                 modalImage={modalImage ?? 'https://picsum.photos/482/560'}
                                 provider={wagmiProvider}>{children}</Whal3sModalProvider>)
}

const Providers = ({children, utilityId, modalImage}:ProviderProps) => {
    return (
        <WagmiConfig config={config}>
            <ConnectKitProvider>
                <ConfiguredWhal3sDemoProvider utilityId={utilityId} modalImage={modalImage}>
                    {children}
                </ConfiguredWhal3sDemoProvider>
            </ConnectKitProvider>
        </WagmiConfig>
    );
};

export default Providers;

export {config as HomepageWagmiConfig};
