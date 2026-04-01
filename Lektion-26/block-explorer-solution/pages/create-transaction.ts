import { WalletClient, Hash, parseEther } from 'viem';
import { createWallet } from '../helpers/network';

const form = document.querySelector('#transaction-form') as HTMLFormElement;
const fromInput = document.querySelector('#from') as HTMLInputElement;
const toInput = document.querySelector('#to') as HTMLInputElement;
const valueInput = document.querySelector('#value') as HTMLInputElement;

let client: WalletClient;

const initApp = () => {
    client = createWallet();
};

const createTransaction = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
        await client.sendTransaction({
            account: fromInput.value as Hash,
            to: toInput.value as Hash,
            value: parseEther(valueInput.value),
            chain: undefined
        });
        location.href = './blocks.html';
    } catch (error) {
        console.error(error);
    }
};

initApp();

form.addEventListener("submit", createTransaction);