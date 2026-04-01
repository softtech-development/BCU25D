import { Block, formatEther, Hash, PublicClient, Transaction } from 'viem';
import { createHttpClient } from '../helpers/network';

const transactionDetails = document.querySelector("#transactionDetails") as HTMLDivElement;
let client: PublicClient;

const initApp = () => {
    const hash = location.search.split('=')[1];
    client = createHttpClient();
    displayTransactionDetails(hash as Hash);
};

const displayTransactionDetails = async (hash: Hash) => {
    const block: Block = await client.getBlock({ blockHash: hash });

    generateBlockInfo(block);

    for (let trx of block.transactions) {
        const transaction: Transaction = await client.getTransaction({ hash: trx as Hash });
        generateTransactionInfo(transaction);
    }
};

const generateBlockInfo = (block: Block) => {
    let html = '';
    console.log(block.number, (block.number as unknown) as number);
    html = `
        <h2 id="blockNumber">BLOCK NUMBER ${block.number === 0n ? 'Genesis' : block.number}</h2>
        <article class="trx-details">
        <section>
            <span>Gas Used</span>
            <small>${block.gasUsed}</small>
        </section>
        <section>
            <span>Gas Limit</span>
            <small>${block.gasLimit}</small>
        </section>
        <section>
            <span>Mined On</span>
            <small>${new Date(
        parseInt(((block.timestamp * 1000n) as unknown) as string)
    ).toLocaleString()}</small>
        </section>
        <section>
            <span>Block Hash</span>
            <small>${block.hash}</small>
        </section>
        </article>`;

    transactionDetails.innerHTML = html;
};

const generateTransactionInfo = (transaction: Transaction) => {
    let html = '';

    html = `
    <h2 id="trxHash">TX Hash ${transaction.hash}</h2>
    <article class="trx-details">
        <section>
            <span>From</span>
            <small>${transaction.from}</small>
        </section>
        <section>
            <span>To</span>
            <small>${transaction.to}</small>
        </section>
        <section>
            <span>Gas Used</span>
            <small>${transaction.gas}</small>
        </section>
        <section>
            <span>Value</span>
            <small>${parseFloat(formatEther(transaction.value)).toFixed(2)} ETH</small>
        </section>
    </article>`;

    transactionDetails.insertAdjacentHTML('beforeend', html);
};

initApp();