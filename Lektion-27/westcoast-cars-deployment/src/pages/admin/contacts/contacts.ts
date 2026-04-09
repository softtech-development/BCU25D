import HttpClient from "../../../data/httpClient.js";
import { Post } from '../../../models/post.js';

const spinner = document.querySelector<HTMLDivElement>("#spinner")!;
const postsDisplay = document.querySelector<HTMLDivElement>("#posts")!;

const initApp = async () => {
    const posts = await listPosts() as unknown;
    display(posts as Post[]);
    spinner && spinner.classList.remove("loader");
    postsDisplay.classList.add("show");
};

const listPosts = async () => {
    spinner && spinner.classList.add("loader");
    return await new HttpClient<Post>("posts").listAll();
};

const display = (posts: Post[]) => {
    while (postsDisplay.firstChild) {
        postsDisplay.removeChild(postsDisplay.firstChild);
    }
    posts.map((post: Post) => {
        const row = document.createElement("section");

        const icon = document.createElement("i");
        icon.classList.add("fa-light");
        icon.classList.add("fa-envelope");

        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(`${post.firstName} ${post.lastName}`));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(post.email.length > 30 ? post.email.substring(0, 25) + '...' : post.email));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(post.message));
        row.appendChild(icon);
        postsDisplay.appendChild(row);
    });
};

document.addEventListener("DOMContentLoaded", initApp);