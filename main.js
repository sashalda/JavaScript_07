const librosGenerales = [
    {
        nombre: "el psicoanalista",
        autor:"John Katzenbach",
    },{
        nombre: "la biblia",
        autor: "la iglesia",
    }
];

const librosInfatiles = [
    {
        nombre: "los tres chanchitos",
        autor: "Los hermanos Grimm",
    },{
        nombre: "el principito",
        autor: "antoine de saint-exupéry"
    }, 
];

const libros = librosGenerales.concat(librosInfatiles);
console.log(libros);

const nombreLibro = prompt('ingrese el nombre de su libro');

for (let i = 0; i < libros.length; i++ ) {
    if (nombreLibro === libros[i].nombre) {
        alert("Has elegido "+ libros[i].nombre);
    }
}

const nombreAutor = prompt('ingrese el autor');

for (let i = 0; i < libros.length; i++ ) {
    if (nombreAutor === libros[i].autor) {
        alert("Has elegido "+ libros[i].autor);
    }
}

console.log("En nuestra base de datos podrás encontrar: ", libros.length + " libros");
 
function pedirPaginas() {
      return parseInt(prompt('Ingrese la cantidad de páginas'));
  }
 
let paginas = pedirPaginas();

const hora = 50;

class Libro {
     constructor(nombre, paginas, autor) {
         this.nombre = nombre;
         this.paginas = paginas;
         this.autor = autor;
     }

     obtenerDificultad() {
         let dificultad = 0;

         switch(this.nombre) {
             case "el principito":
                 dificultad = 1.0;
                 break;
             case "el psicoanalista":
                 dificultad = 1.8;
                 break;
             case "la biblia":
                 dificultad = 2.2;
                 break;
             case "los tres chanchitos":
                 dificultad = 1.2;
                 break;    
             default:
                 alert("ERROR");
         }

         let calculo = (this.paginas/hora)*dificultad;
         console.log("El tiempo de lectura es de "+ calculo + " horas");

     }
 }

 const libroX = new Libro(nombreLibro, paginas, nombreAutor) 
 console.log(libroX)
 libroX.obtenerDificultad();
 console.log(libroX);
