const main = require('../main.js');
const path = require('path');

describe('isValidRoute', () => {

    const routeTrue = './exampleFiles/exampleFile.md';
    const routeFalse = './thisPath/doesNotExist';

    it('should be a function', () => {
        expect(typeof isValidRoute).toBe('function');
    });

    it('deberia retornar true si existe la ruta', () => {
        expect(isValidRoute(routeTrue)).toBe(true);
    });

    it('deberia retornar false si no existe la ruta', () => {
        expect(isValidRoute(routeFalse)).toBe(false);
    });
});

describe('es una funcion', () => {
    const absoluteRoute = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\exampleFiles\\exampleFile.md';
    const routeTrue = './exampleFiles/exampleFile.md';

    expect(typeof getAbsoluteRoute).toBe('function');

    it('deberia retornar true si es absoluta', () => {

        expect(getAbsoluteRoute(absoluteRoute)).toBe(true);
    });
    it('deberia retornar false si no es absoluta', () => {
        expect(getAbsoluteRoute(routeTrue)).toBe(false);
    });
});
describe('es una funcion', () => {
    const absoluteRoute = 'C:\\Users\\TecnoBot Academia\\Desktop\\md-links\\DEV001-md-links-1\\exampleFiles\\exampleFile.md';
    const routeTrue = './exampleFiles/exampleFile.md';

    expect(typeof changefAbsoluteRoute).toBe('function');

    it('deberia retornar una ruta absoluta', () => {

        expect(changefAbsoluteRoute(routeTrue)).toBe(absoluteRoute);
    });

});