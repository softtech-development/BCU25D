/* CALLBACK EXEMPEL */
export const fetchDataByCallback = (data, callbackFn) => {
  setTimeout(() => {
    data *= 2;
    callbackFn(data);
  }, 3000);
};
