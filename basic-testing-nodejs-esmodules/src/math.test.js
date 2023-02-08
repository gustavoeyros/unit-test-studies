import { expect, it } from "vitest";
import { add } from "./math";

//colocamos uma "descrição", ou seja, o que deve acontecer
it("should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2, 3];
  //invocamos a função do math
  //Act
  const result = add(numbers);

  //inserimos o valor que deve ser retornado corretamente
  //Assert
  const expectedResult = numbers.reduce((prev, current) => prev + current, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string value is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce((prev, current) => +prev + +current);

  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
});
