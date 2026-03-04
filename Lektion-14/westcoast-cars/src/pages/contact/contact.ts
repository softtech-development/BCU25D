import HttpClient from '../../data/httpClient.js';
import { Post } from '../../models/post.js';

const form = document.querySelector('form');

const initApp = () => { };

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
  const formData = new FormData(form!);

  const data = Object.fromEntries(formData.entries()) as Post;
  console.log(JSON.stringify(data));
  // Lagra meddelandet i vår json fil(vehicles.json)
  const http = await new HttpClient("posts").addPost(data);
};

document.addEventListener('DOMContentLoaded', initApp);
form!.addEventListener('submit', handleSubmit);
