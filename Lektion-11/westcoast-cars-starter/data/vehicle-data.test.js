import { it, describe, expect } from 'vitest';
import { getVehicle, listAllVehicles } from './vehicle-data';

describe('Vehicle data', () => {
  describe('ListAllVehicles', () => {
    it('should return an array', () => {
      // Arrange
      // Act
      const result = listAllVehicles();
      // Assert
      expect(result).toBeInstanceOf(Array);
    });

    it('should return an array of 10 vehicles', () => {
      // Arrange
      // Act
      const result = listAllVehicles();

      // Assert
      expect(result).toHaveLength(10);
    });

    it('should have the correct properties', () => {
      // Arrange
      // Act
      const result = listAllVehicles();
      const vehicle = result[0];

      // Assert
      expect(vehicle).toHaveProperty('id');
      expect(vehicle).toHaveProperty('registrationNumber');
      expect(vehicle).toHaveProperty('manufacturer');
      expect(vehicle).toHaveProperty('model');
      expect(vehicle).toHaveProperty('modelYear');
      expect(vehicle).toHaveProperty('mileage');
      expect(vehicle).toHaveProperty('imageUrl');
      expect(vehicle).toHaveProperty('description');
      expect(vehicle).toHaveProperty('value');
    });
  });

  describe('Get vehicle', () => {
    it('should return a vehicle by id', () => {
      // Arrange
      // Act
      const vehicle = getVehicle(1);

      // Assert
      expect(vehicle).not.toBeNull();
    });

    it('should return a Chevrolet Corvette with id = 1', () => {
      // Arrange
      // Act
      const vehicle = getVehicle(1);

      // Assert
      expect(vehicle).not.toBeNull();
      expect(vehicle.manufacturer).toBe('Chevrolet');
      expect(vehicle.model).toBe('Corvette');
    });
  });
});
