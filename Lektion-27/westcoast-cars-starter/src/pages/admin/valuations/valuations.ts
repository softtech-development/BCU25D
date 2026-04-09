import HttpClient from "../../../data/httpClient.js";
import { Valuation } from "../../../models/valuation.js";

const spinner = document.querySelector<HTMLDivElement>("#spinner")!;
const valuationDisplay = document.querySelector<HTMLDivElement>("#valuations")!;

const initApp = async () => {
    const valuations = await listValuations() as unknown;
    display(valuations as Valuation[]);
    spinner && spinner.classList.remove("loader");
    valuationDisplay.classList.add("show");
};

const listValuations = async () => {
    spinner && spinner.classList.add("loader");
    return await new HttpClient<Valuation>("valuations").listAll();
};

const display = (valuations: Valuation[]) => {
    while (valuationDisplay.firstChild) {
        valuationDisplay.removeChild(valuationDisplay.firstChild);
    }
    valuations.map((valuation: Valuation) => {
        const row = document.createElement("section");

        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(`${valuation.firstName} ${valuation.lastName}`));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(valuation.email.length > 30 ? valuation.email.substring(0, 25) + '...' : valuation.email));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(valuation.manufacturer));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(valuation.model));
        row.appendChild(document.createElement("div")).appendChild(document.createTextNode(valuation.modelYear + ''));

        valuationDisplay.appendChild(row);
    });
};

document.addEventListener("DOMContentLoaded", initApp);