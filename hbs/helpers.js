const hbs = require('hbs');

// Helpers
//hbs para renderizar el index
//este método es para que el año se actualice autmáticamente en la página
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//este método es para poner en letras mayúsculas el nombre
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});