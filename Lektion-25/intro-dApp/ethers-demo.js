import { ethers, formatEther } from 'ethers';

const url = import.meta.env.VITE_BASE_URL;

const initApp = async () => {
  console.log(url);
  const provider = new ethers.JsonRpcProvider(url);

  console.log(('Provider:', provider));
  const balance = await provider.getBalance(
    '0x00000000219ab540356cBB839Cbe05303d7705Fa',
  );

  console.log('Balance in wei:', balance);
  console.log('Balance in ethers:', formatEther(balance));

  const currentBlock = await provider.getBlockNumber();
  console.log('CurrentBlock:', currentBlock);

  //   Hämta ett specielt block...
  const block = await provider.getBlock(currentBlock);
  console.log('Block info:', block);

  //   Hämta alla transaktioner...
  const transactions = block.transactions;
  console.log('Number of transactions:', transactions.length);
  const trx = await block.getTransaction(transactions[5]);
  console.log('Transaction number 6:', trx);
  console.log('From', trx.from);
  console.log('To', trx.to);
  console.log('Value', trx.value);

  for (let i = 0; i < 5; i++) {
    console.log(await block.getTransaction(transactions[i]));
  }
};

initApp();
