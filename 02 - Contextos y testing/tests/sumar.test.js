const sumar = require('./sumar');

describe('Sumar', () => {
    test('1 + 2 = 3', () => {
        expect(sumar(1, 2)).toBe(3);
    });

    describe('Numeros grandes', () => {
        test('100000 + 100000 = 200000', () => {
            expect(sumar(100000, 100000)).toBe(200000);
        });
    });

    describe('Numeros negativos', () => {
        test('-1 + -2 = -3', () => {
            expect(sumar(-1, -2)).toBe(-3);
        });
    });
})
