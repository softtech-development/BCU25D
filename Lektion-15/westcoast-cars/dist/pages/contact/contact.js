import HttpClient from '../../data/httpClient.js';
const form = document.querySelector('form');
const initApp = () => { };
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const result = await new HttpClient("posts").add(data);
};
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
//# sourceMappingURL=contact.js.map