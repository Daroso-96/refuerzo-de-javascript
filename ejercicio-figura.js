let figure = prompt('Introduce la figura geómetrica de la que quieres calcular el area:triangle,circle,ractangle');
let base;
let height;
let radius;

switch (figure) {
    case 'triangle':
        base = parseInt(prompt('¿Cuál es la base del triangulo?'));
        height = parseInt(prompt('¿Cuál es la base del triangulo?')) ;
        console.log(`El area del triangulo es ${(base*height)/2}`);
        break;

    default:
        break;
}