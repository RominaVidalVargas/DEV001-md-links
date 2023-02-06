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
    const absoluteRoute = 'C:\\Users\\Laboratoria\\Desktop\\Romina\\Laboratoria\\Proyecto 4\\DEV001-md-links';
    const routeTrue = './exampleFiles/exampleFile.md';

    /* expect(typeof convertToAbsolute).toEqual('function'); */

    it('deberia retornar true si es absoluta', () => {

        expect(convertToAbsolute(absoluteRoute)).toBe(true);
    });
    it('deberia retornar false si no es absoluta', () => {
        expect(convertToAbsolute(routeTrue)).toBe(false);
    });
});
describe('es una funcion', () => {
    const absoluteRoute = 'C:\\Users\\Laboratoria\\Desktop\\Romina\\Laboratoria\\Proyecto 4\\DEV001-md-links';
    const routeTrue = '/romina/laboratoria/archivo.md';

    /* expect(typeof changefAbsoluteRoute).toBe('function'); */

    it('deberia retornar una ruta absoluta', () => {

        expect(changefAbsoluteRoute(routeTrue)).toBe(absoluteRoute);
    });

});