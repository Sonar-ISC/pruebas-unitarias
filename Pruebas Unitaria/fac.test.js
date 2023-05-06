const fac = require('./fac');

const test1 = 5, test2 = 0, test3 = '2', test4 = -1;

test('factorial de 5 debe ser 120', () => {
    expect(fac(test1)).toBe(120);
});

test('factorial de 0 debe ser 1', () => {
    expect(fac(test2)).toBe(1);
});

test('Si se ingresa un char, debe arrojar error', () => {
    expect(fac(test3)).toBe("Error");
});

test('Si se ingresa un numero negativo, debe arrojar error', () => {
    expect(fac(test4)).toBe("Error");
});

test('Expected_Test', () => {
    expect().toBe();
});
