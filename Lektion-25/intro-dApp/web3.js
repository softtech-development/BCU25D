import web3 from 'web3';

const url = import.meta.env.VITE_BASE_URL;

const initApp = async () => {
  console.log('App is running');
  console.log('URL', url);
  const w3 = new web3(url);
  const blockNumber = await w3.eth.getBlockNumber();
  console.log(blockNumber);
  const balance = await w3.eth.getBalance(
    '0x00000000219ab540356cBB839Cbe05303d7705Fa',
  );

  console.log(balance);
  console.log('Balance in eth:', w3.utils.fromWei(balance, 'ether'));
  const accounts = await w3.eth.getAccounts();

  console.log(accounts.length);
  accounts.forEach((account) => {
    console.log('Account:', account);
  });
};

document.addEventListener('DOMContentLoaded', initApp);
