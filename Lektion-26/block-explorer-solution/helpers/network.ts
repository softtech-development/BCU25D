import { createPublicClient, createWalletClient, http, PublicClient, WalletClient } from 'viem';
import { localhost, sepolia } from 'viem/chains';

export const createHttpClient = (): PublicClient => {
    return createPublicClient({
        chain: sepolia,
        transport: http(import.meta.env.VITE_RPC_URL)
    });
};

export const createWallet = (): WalletClient => {
    return createWalletClient({
        chain: localhost,
        transport: http(import.meta.env.VITE_RPC_URL)
    });
};