export const fetchDataByPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data < 0) {
        reject('Kan inte hantera negativa värden');
      } else {
        data *= 3;
        resolve(data);
      }
    }, 3000);
  });
};
