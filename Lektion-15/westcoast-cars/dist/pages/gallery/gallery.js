import HttpClient from '../../data/httpClient.js';
import { createCard, createImage, createSpan, addImageNavigateClickHandler, } from '../../scripts/dom.js';
const gallery = document.querySelector('#vehicles-gallery');
const initApp = async () => {
    try {
        displayVehicles(await new HttpClient('vehicles').listAll());
    }
    catch (error) {
        console.error(error);
    }
};
const displayVehicles = (vehicles) => {
    vehicles.map((vehicle) => {
        const card = createCard();
        const image = createImage(vehicle.imageUrl, vehicle.id.toString());
        const info = createSpan(`${vehicle.manufacturer} ${vehicle.model}`, 'image-info');
        card.appendChild(image);
        card.appendChild(info);
        if (gallery) {
            gallery.appendChild(card);
            const images = [...document.querySelectorAll('.card img')];
            // const images: HTMLImageElement[] = Array.from(document.querySelectorAll('.card img'));
            addImageNavigateClickHandler(images, '../vehicle/vehicle-details.html');
        }
    });
};
document.addEventListener('DOMContentLoaded', initApp);
//# sourceMappingURL=gallery.js.map