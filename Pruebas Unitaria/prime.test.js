const isPrime = require('./prime');

const test1 = 7, test2 = 10, test3 = 5.5, test4 = -7, test5 = '6';

test('El número 7 es primo', () => {
    expect(isPrime(test1)).toBe(true);
});

test('El número 10 no es primo', () => {
    expect(isPrime(test2)).toBe(false);
});

test('un número decimal arroja TypeError', () => {
    expect(isPrime(test3)).toBe("TypeError");
});

test('un número negativo arroja ValueError', () => {
    expect(isPrime(test4)).toBe("ValueError");
});

test('si el dato ingresado no es un numero arroja TypeError', () => {
    expect(isPrime(test5)).toBe("TypeError");
});


