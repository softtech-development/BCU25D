import { it, expect, describe, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';
import { getVehicle } from '../../data/vehicle-data';
import { createHeader } from '../../scripts/dom';

// Skapa en sökväg till vår vehicle-details.html
const docPath = path.join(process.cwd(), 'pages/vehicle/vehicle-details.html');
const docContent = fs.readFileSync(docPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

describe('Vehicle Details', () => {
  it('should display correct title for vehicle 1', () => {
    // Arrange
    // Act
    // Assert
  });
});
