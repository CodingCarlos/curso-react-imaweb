let miTexto = 'String 123';

// miTexto = 123;
// miTexto = null;
// miTexto = [];

function pimerasLetras(str) {
    if (typeof str !== 'string') {
        throw new Error('No es un string');
    }

    str.substring(0, 2);
}

try {
    pimerasLetras(miTexto);
} catch (e) {
    console.error('No podemos hacer esto', e.message)
}
