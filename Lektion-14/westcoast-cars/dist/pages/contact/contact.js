import HttpClient from '../../data/httpClient.js';
const form = document.querySelector('form');
const initApp = () => { };
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(data));
    // Lagra meddelandet i vår json fil(vehicles.json)
    const http = await new HttpClient("posts").addPost(data);
};
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
//# sourceMappingURL=contact.js.map