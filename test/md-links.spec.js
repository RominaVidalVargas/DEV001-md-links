const {mdLinks} = require('../index.js');


describe('mdLinks', () => {

it('rechazar la promesa si path no existe',() =>{
  return mdLinks('/romina/laboratoria/mdlinks.md').catch((error)=>{
    expect(error).toBe('La ruta no es valida');
  });
 
});
});