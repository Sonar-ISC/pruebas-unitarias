const sorter = require('./sorter');

const test1 = [5, 1, 3, 4, 2], test2 = [1, 2, 3, 4, 5], test3 = 4, test4 = [1, 2, 3, 4, "5"];

test('El array test1 debe ordenarse correctamente', () => {
    expect(sorter(test1)).toStrictEqual([1, 2, 3, 4, 5])
});

test('El array test2 debe ordenarse correctamente', () => {
    expect(sorter(test2)).toStrictEqual([1, 2, 3, 4, 5])
});

test('El array test3 genera un error porque el dato de entrada no es un array', () => {
    expect(sorter(test3)).toStrictEqual("Error")
});

test('El array test4 genera un error porque el array contiene un no numero', () => {
    expect(sorter(test4)).toStrictEqual("Error")
});

