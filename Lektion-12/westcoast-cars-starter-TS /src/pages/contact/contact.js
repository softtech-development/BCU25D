const form = document.querySelector('form');

const initApp = () => {};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(form);
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());
  console.log(JSON.stringify(data));
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
