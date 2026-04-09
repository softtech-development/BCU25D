import { it, expect, describe, vi } from 'vitest';
import { Window } from 'happy-dom';
import { createCard, createImage } from './dom';

// Skapa ett nytt Window objekt som representerar
// Window objektet i en webbläsaren...
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

// Dummy test...
it('test', () => {});

describe('DOM', () => {
  describe('createCard', () => {
    it('should return a html section with class = "card"', () => {
      // Arrange
      // Act
      const section = createCard();

      // Assert
      expect(section.nodeName).toBe('SECTION');
      expect(section.className).toBe('card');
    });
  });

  describe('createImage', () => {
    it('should return an image element', () => {
      // Arrange
      // Act
      const image = createImage(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
        1,
      );

      const id = image.getAttribute('id');
      const imageUrl = image.getAttribute('src');

      // Assert
      expect(image.nodeName).toBe('IMG');
      expect(id).toBe('1');
      expect(imageUrl).toBe(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
      );
      //   expect(section.className).toBe('card');
    });
  });
});
