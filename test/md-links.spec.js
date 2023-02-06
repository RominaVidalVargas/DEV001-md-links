const { mdLinks } = require('../index.js');
const { convertToAbsolute } = require('../main.js');


describe('mdLinks', () => {

  it('Debe rechazar cuando el path no existe', (done) => {
    mdLinks('/romina/laboratoria/archivo.md').catch((error) => {
      expect(error).toBe('La ruta no es valida');
      done();
    })
  });
});

describe('convertToAbsolute', () => {

  const absPath = "C:\\Users\\Laboratoria\\Desktop\\Romina\\Laboratoria\\Proyecto 4\\DEV001-md-links";

  it('Debería ser una función', () => {
      expect(typeof convertToAbsolute).toBe('function');
  });

  it('Debería devolver una ruta absoluta', () => {
      expect(convertToAbsolute(absPath)).toBe(absPath);
  });
  it('Debería devolver una ruta absoluta desde una relativa', () => {
      const relativeSegment = ['hola', 'soyUnaRutaRelativa']
      const relativePath = './' + relativeSegment.join(path.sep);
      const expected = process.cwd() + path.sep + relativeSegment.join(path.sep);
      expect(convertToAbsolute(relativePath)).toBe(expected);
  });
}); 