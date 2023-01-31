const fs = require('fs');
const path = require('path');
//const marked = require('marked');

// ruta valida
const isValidRoute = (inputpath) => {
    if (fs.existsSync(inputpath)) {
        return true;
    } else {
        return false;
    }
};

//ruta es absoluta o no
const getAbsoluteRoute = (inputpath) => {
    if (path.isAbsolute(inputpath)) {
        return inputpath;
    } else {
//convertir en absoluta
        return path.resolve(inputpath);
    }
};

/* 
const pathIsDirectory = (inputpath) => {
    return fs.lstatSync(inputpath).isDirectory()
} */

//es archivo
const pathIsFile = function (inputpath) {
    return fs.statSync(inputpath).isFile()
}


module.exports = {
    isValidRoute,
    getAbsoluteRoute,
};