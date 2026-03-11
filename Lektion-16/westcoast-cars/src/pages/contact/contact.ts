import HttpClient from '../../data/httpClient.js';
import { Post } from '../../models/post.js';

const form = document.querySelector('form');

const initApp = () => { };

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();
  const formData = new FormData(form!);

  const data = Object.fromEntries(formData.entries()) as Post;
  const result = await new HttpClient<Post>("posts").add(data);
  console.log(result);
};

document.addEventListener('DOMContentLoaded', initApp);
form!.addEventListener('submit', handleSubmit);
