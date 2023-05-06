const suma = require('./sum_arr');

const test1 = [1, 2, 3, 4, 5], test2 = [-1, 0, 1], test3 = 5, test4 = [1, 2, 3, 4, "5"];

test('La suma de los elementos del array test1 debe dar en total 15', () => {
    expect(suma(test1)).toBe(15);
});

test('La suma de los elementos del array test2 debe dar en total 0', () => {
    expect(suma(test2)).toBe(0);
});

test('Si no se ingresa un array, devolverá error', () => {
    expect(suma(test3)).toBe("Error");
});

test('Si uno de los elementos del array es no numérico, arrojará error', () => {
    expect(suma(test4)).toBe("Error");
});


