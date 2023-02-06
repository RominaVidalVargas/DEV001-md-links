const fs = require('fs');
const path = require('path');

// ruta valida
const isValidRoute = (inputpath) => {
    if (fs.existsSync(inputpath)) {
        return true;
    } else {
        return false;
    }
};

//ruta es absoluta o no
const convertToAbsolute = (filePath) => {
    if (path.isAbsolute(filePath)) {
       return filePath;
    }else{
        const absolutePath= (path.join(process.cwd(), filePath));
        return absolutePath;
     }
     };
console.log('HOLA', convertToAbsolute('README.md'))
//validcar archivo md
const fileMd = (filePath) => {
    return (path.extname(filePath) === ".md");

 };


module.exports = {
    isValidRoute, convertToAbsolute, 
};