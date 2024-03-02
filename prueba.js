import assert from 'assert'

// Define los dos objetos JSON que quieres comparar
const objeto1 = { a: 1, b: { c: 2 } };
const objeto2 = { a: 1, b: { c: 2 } };
const objeto3 = { a: 1, b: { c: 3 } };

// Compara los objetos usando deepStrictEqual()
assert.deepStrictEqual(objeto1, objeto2); // Esto debería pasar ya que los objetos son iguales


console.log('Los objetos son iguales');
