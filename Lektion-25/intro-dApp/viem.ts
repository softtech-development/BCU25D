import { createPublicClient, http, formatEther } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

const url = import.meta.env.VITE_BASE_URL;

console.log(url);
const initApp = async () => {
    const client = createPublicClient({
        chain: sepolia,
        transport: http(url)
    });

    const currentBlock = await client.getBlockNumber();
    console.log("Current Block:", currentBlock);

    // Hämta saldo/balansen...
    const balance = await client.getBalance({ address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' });
    console.log("Saldo i wei:", balance);
    console.log("Saldo i ether:", formatEther(balance));

    const blockNumber = await client.getBlockNumber();
    console.log("Block nummer", blockNumber);

    const block = await client.getBlock();
    console.log("Block", block);

    const transactions = block.transactions;
    console.log("Antal transaktioner:", transactions.length);
    // console.log(transactions);
    const trx = transactions[4];
    console.log("Transaktion 5:", trx);
    const transaction = await client.getTransaction({ hash: trx });
    console.log("Transaktionen", transaction);

    for (let i = 0; i < 5; i++) {
        const t = await client.getTransaction({ hash: transactions[i] });
        console.log("Info från:", t.from);
        console.log("Info till:", t.to);
    }
};

initApp();