import { fetchDataByCallback } from './callback.js';
import { fetchDataByPromise } from './promise.js';

const btn = document.querySelector('#get-data');

const displayResult = (result) => {
  console.log('Callback result:', result);
};

// const findData = () => {
//   //   fetchDataByCallback(4, displayResult);
//   fetchDataByPromise(-2)
//     .then((result) => console.log('Promise result:', result))
//     .catch((err) => console.error(err))
//     .finally(console.log('Äntligen färdig!🤪'));

//   console.log('Hämtar data...');
// };

const findDataAsync = async () => {
  try {
    const result = await fetchDataByPromise(4);
    console.log('Hämtar data...');
    console.log('Async fetch:', result);
  } catch (error) {
    console.error('Inuti catch delen i try:', error);
  }
};
btn.addEventListener('click', findDataAsync);
// btn.addEventListener('click', findData);
