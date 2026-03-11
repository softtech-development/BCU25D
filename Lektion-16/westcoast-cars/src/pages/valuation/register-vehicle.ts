import HttpClient from '../../data/httpClient.js';
import { Valuation } from '../../models/valuation.js';

const form = document.querySelector<HTMLFormElement>("form");

const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(form!);
    const data = Object.fromEntries(formData.entries()) as Valuation;
    console.log(data);
    const result = await new HttpClient<Valuation>("valuations").add(data);
    console.log(result);
};


form!.addEventListener("submit", handleSubmit);