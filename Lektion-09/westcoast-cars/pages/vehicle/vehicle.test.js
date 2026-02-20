import { it, expect, describe, vi, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';
import { getVehicle } from '../../data/vehicle-data';
import { createHeader, createDetailsView } from '../../scripts/dom';

// Skapa en sökväg till vår vehicle-details.html
const docPath = path.join(process.cwd(), 'pages/vehicle/vehicle-details.html');
const docContent = fs.readFileSync(docPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(docContent);
});

describe('Vehicle Details', () => {
  it('should display correct title for vehicle 1', () => {
    // Arrange
    const vehicle = getVehicle(1);
    const pageHeader = createHeader(
      `${vehicle.manufacturer} ${vehicle.model}`,
      'h1',
      'page-title center-text mt-3',
    );

    document.querySelector('main').prepend(pageHeader);
    // Act
    const title = document.querySelector('h1');
    // Assert
    expect(title.innerText).toBe('Chevrolet Corvette');
  });

  it('should render correct info for choosen vehicle', () => {
    // Arrange
    const vehicle = getVehicle(1);
    const html = createDetailsView(vehicle);

    document.querySelector('#details-area').innerHTML = html;
    console.log(document.body.innerHTML);

    // Act
    const image = document.querySelector('.card img');

    // Assert
    expect(image.getAttribute('src')).toBe(
      'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
    );
  });
});
