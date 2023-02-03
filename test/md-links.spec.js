const { mdLinks } = require('.index.js');
const { getAbsoluteRoute } = require('.main.js');


describe('mdLinks', () => {

  it('rechazar la promesa si path no existe', () => {
    return mdLinks('/romina/laboratoria/mdlinks.md').catch((error) => {
      expect(error).toBe('La ruta no es valida');
    });

  });
});

describe('convertToAbsolute', () => {

  const absPath = "C:\Users\Laboratoria\Desktop\Romina\Laboratoria\Proyecto 4\DEV001-md-links/README.md";
  it('Debería ser una función', () => {
    expect(typeof convertToAbsolute).toEqual('function');
  });

  it('Debería devolver una ruta absoluta', () => {
    expect(convertToAbsolute(absPath)).toBe(absPath);
  });

  it('Debería devolver ruta absoluta desde relativa', () => {
    const relativeSegment = ['ruta', 'rutaRelativa']
    const relativePath = './' + relativeSegment.join(path.sep);
    const expected = process.cwd() + path.sep + relativeSegment.join(path.sep);
    expect(convertToAbsolute(relativePath)).toBe(expected);
  });
})