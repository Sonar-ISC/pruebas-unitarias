const pond = require('./pond');

const test1 = {1:[2,4,6],2:[0.3,0.5,0.2]};
const test2 = {1:[2,4,6],2:[0.3,0.5]};
const test3 = {1:[2,"4",6],2:[0.3,0.5]};

test('El promedio ponderado de test1 debe ser 3.8', () => {
    expect(pond(test1[1],test1[2])).toBe(2*0.3 + 4*0.5 + 6*0.2);
});

test('Si nums y weights no tienen el mismo tamaño, el programa devuelve error', () => {
    expect(pond(test2[1],test2[2])).toBe("Error");
});

test('Si algun elemento de los arrays no es numerico, el programa devuelve error', () => {
    expect(pond(test3[1],test3[2])).toBe("Error");
});

