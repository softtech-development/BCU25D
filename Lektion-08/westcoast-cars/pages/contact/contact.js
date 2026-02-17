const form = document.querySelector('form');

const initApp = () => {};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  // http://127.0.0.1:5500/pages/contact/contact.html?firstName=Michael&lastName=Gustavsson&email=&message=
  /* const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(message); */

  // 1. Konvertera formuläret till läsbar info, iteration...

  /* const data = {};

    // data = {
    //     firstName: "Michael",
    //     lastName: "Gustavsson",
    //     email: "michael.gustavsson@softtech-dev.se",
    //     message: ""
    // }


  formData.forEach((value, key) => (data[key] = value));
  console.log(data);

  console.log(JSON.stringify(data));

  //   formData.forEach((value, key) => {
  //     console.log(key, value);
  //     // console.log(value);
  //   });
 
 */

  //   2. Använd Object.fromEntries()
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  console.log(JSON.stringify(data));

  //   Skicka skiten någonstans...
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
