import { it, test, expect, describe } from 'vitest';

import { add, multiply } from './math';

describe('Detta är en dummy test', () => {
  it('test', () => {});
});

describe('Enkla beräkningar', () => {
  it('should add two numbers', () => {
    // Arrange
    const x = 10;
    const y = 10;

    // Act
    const result = add(x, y);

    // Assert
    expect(result).toBe(20);
  });

  it('should multiply two number', () => {
    // Arrange
    const x = 2;
    const y = 4;

    // Act
    const result = multiply(x, y);

    // Assert
    expect(result).toBe(8);
  });
});
