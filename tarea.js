//No. 1) calcular número de caracteres

const contarCaracteres = () => {
  let cadena = document.getElementById("fname").value;

  if (!cadena) {
    //Si cadena es igual a false, undefined, null, 0, "", NaN
    alert("No ingresaste ninguna cadena");
  } else {
    alert(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    //length: es una propiedad de los string que nos devuelve el numero de caracteres que tiene la cadena.
  }
};

// var button = document.querySelector("button");

// button.onclick = function () {
//   var name = prompt("What is your name?");
//   alert("Hello " + name + ", nice to see you!");
// };

//--------------------------------------------------------------------------------------
//No. 2) Functión Recortar  caracteres

const RecortarCarecteres = () => {
  let texto = document.getElementById("fname2").value;
  let ini = document.getElementById("inicio").value;
  let fn = document.getElementById("fin").value;

  if (!texto) {
    //Si cadena es igual a false, undefined, null, 0, "", NaN

    alert("No ingresaste ninguna cadena");
  } else {
    alert(
      `La cadena ingresada: "${texto}", Texto recortado: "${(recortado =
        texto.slice(ini, fn))}"`
    );
    //slice: devuelve una copia de una parte del string empezando por inicio hasta fin.
  }
};

//RecortarCarecteres("Hola esto es una prueba", 0, 4);

//------------------------------------------------------------------------------------
//No. 3) Functión devolver carecteres separados en array

const dividirCadena = (texto = "", espacio, separador) => {
  if (!texto) {
    //Si cadena es igual a false, undefined, null, 0, "", NaN
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(
      `La cadena ingresada: "${texto}", Texto separado: "${(div = texto.split(
        espacio,
        separador
      ))}"`
    ); //split vide una cadena en un array de cadenas usando el separador especificado
    console.log(`El array tiene " ${div.length} " elementos: `); //imprimimos cantidad que tiene el array div

    for (let i = 0; i < div.length; i++) {
      console.log(`"posición" ${[i]} ${div[i]} "`); //con el for recorremos el array string e imprimos.
    }
  }

  //slice: devuelve una copia de una parte del string empezando por inicio hasta fin.
};

dividirCadena("Curso React prueba de cadena ", " ", 5); //invocamos la función

//------------------------------------------------------------------------------------------------
//No. 4) Functión calcule el precio de un producto aplicando un descuento

const calcularPrecio = () => {
  let n1 = parseFloat(document.getElementById("precio").value);
  let n2 = parseFloat(document.getElementById("descuento").value);

  if (!n1) {
    alert("No ingresaste el precio del producto");
  } else if (!n2) {
    alert("No ingresaste el descuento del producto");
  } else {
    let precioFinal = n1 - n1 * (n2 / 100); // 1000 - 200) = 800
    alert(
      `El  precio ${n1} con el descuento 0. ${n2} precio es final es de: Q${precioFinal}`
    );
  }
};

//No. 5) Functión calcule Calcular la edad

function calculateEdad(birthday) {
  let birthday_arr = birthday.split("/"); //separa la fecha ingresada por medio del metodo split

  let birthday_date = new Date(
    birthday_arr[2],
    birthday_arr[1] - 1,
    birthday_arr[0]
  ); //asigna  la fecha y hora estandar central GTM

  let ageDifMs = Date.now() - birthday_date.getTime(); //asigna el la fecha y hora acutal - los milisegundos

  let ageDate = new Date(ageDifMs); //fecha y hora estandar

  return Math.abs(ageDate.getUTCFullYear() - 1970); //retorna el vlor absoloto calculando el tiempo completo -1970
}

console.info(`La edad es: ${calculateEdad("30/04/1988")}`);

//#6  Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV
const conversion = () => {
  let numdecimal = parseFloat(document.getElementById("entero").value);
  const valoresRomanos = [
    { valor: 1000, romano: "M" },
    { valor: 900, romano: "CM" },
    { valor: 500, romano: "D" },
    { valor: 400, romano: "CD" },
    { valor: 100, romano: "C" },
    { valor: 90, romano: "XC" },
    { valor: 50, romano: "L" },
    { valor: 40, romano: "XL" },
    { valor: 10, romano: "X" },
    { valor: 9, romano: "IX" },
    { valor: 5, romano: "V" },
    { valor: 4, romano: "IV" },
    { valor: 1, romano: "I" },
  ];

  let resultRomano = "";

  for (const vRomano of valoresRomanos) {
    while (numdecimal >= vRomano.valor) {
      resultRomano += vRomano.romano;
      numdecimal -= vRomano.valor;
    }
  }
  return alert(`El número romano es:  ${resultRomano}  `);
};

//#7 programa convierte decimal a binario. ejemplo: 1000 = 1111101000.

function convertToBinary1() {
  let num = parseFloat(document.getElementById("decimal").value);
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return alert(`el número binario es:  ${binary}  `);
}

//#8 Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.
const contarVocales = () => {
  let palabra = document.getElementById("vocales").value;
  const vocales = "aáeéiíoóuú";
  let cantidadVocales = 0;
  for (const letra of palabra) {
    if (vocales.includes(letra.toLowerCase())) {
      cantidadVocales++;
    }
  }
  return alert(`La cantidad de vocales:  ${cantidadVocales}  `);
};

// const cadena = "Hola mundo";
// const vocales = contarVocales(cadena);

// console.log("La cadena '%s' tiene %d vocales", cadena, vocales);

//

//#9 Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.

const palindromo = () => {
  let str = document.getElementById("palin").value;

  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");

  return alert(
    `la palabra "${str}" es palíndromo? ${reverseStr === lowRegStr}`
  );
};

//#10 Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".

const removeSpacesFromString = () => {
  let cadena = document.getElementById("remover").value;
  let cadena2 = cadena.split(" ").join("");
  return alert(cadena2);

  //removerlosespaciosvaciosdeunacadena
};

//#11 Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE"
const primeraletra = () => {
  let cadena = document.getElementById("cad").value;

  (array = cadena.split(" ")), (total = array.length), (resultado = "");

  for (var i = 0; i < total; resultado += array[i][0], i++);
  return alert(resultado.toUpperCase()); //Imprime 'ppopl'
};

//#12 Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.
const CantidadPalabras = () => {
  let cadena = document.getElementById("cadd").value;

  textoAreaDividido = cadena.split(" ");
  numeroPalabras = textoAreaDividido.length;
  return alert(numeroPalabras); //Imprime '#palabras'
};

//#13  Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".
const palabraMayus = () => {
  let miOracion = document.getElementById("oracion").value;

  palabras = miOracion.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
  }

  palabras.join(" ");

  return alert(palabras);
};

//#14 Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".

const invertirCadena = () => {
  let cad = document.getElementById("invertir").value;
  // Paso 1. Crear una cadena vacía que almacenará la nueva cadena creada
  var nuevaCadena = "";

  // Paso 2. Crear el bucle FOR

  for (var i = cad.length - 1; i >= 0; i--) {
    nuevaCadena += cad[i]; // o nuevaCadena = nuevaCadena + cad[i];
  }

  // Paso 3. Devolver la cadena invertida
  return alert(nuevaCadena); // "aloh"
};

//#15) Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".

//#16) Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".

const arreglo = (parametro) => {
  var min = Math.min.apply(null, parametro);
  var max = Math.max.apply(null, parametro);

  return alert([min, max]);
};

console.log(arreglo([["10"], ["80"], ["50"]]));

//#17) programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".

const notas = () => {
  let nota = document.getElementById("nts").value;

  let msj;

  if (nota <= 5) {
    msj = "pésimo";
  } else {
    if (nota >= 6 && nota <= 7) {
      msj = "regular";
    } else {
      if (nota >= 8 && nota <= 9) {
        msj = "Bueno";
      } else {
        if (nota === 10);
        {
          msj = "excelente";
        }
      }
    }
  }
  return alert(msj);
};

//#18) programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.

function contardigitos() {
  let numero = document.getElementById("digitos").value;

  alert(`el numero ${numero} tiene ${numero.toString().length} digitos`);
}

//#19) programa que muestre los numeros primos de 1 a 1000.

const Primo = (numero) => {
  for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
    if (numero % i === 0) return false;
  return numero > 1;
};
for (let x = 0; x <= 9; x++) {
  if (Primo(x)) console.info(x);
}

console.log(Primo(10));
//#20) Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".

const juego = (respuesta) => {
  if (respuesta.substring(0, 2) === "ti") {
    console.log("¡Perdiste! La piedra le ganó a la tijera.");
  } else if (respuesta.substring(0, 2) === "pa") {
    console.log("¡Perdiste! La tijera le ganó al papel.");
  } else {
    HTMLFormControlsCollection.log("¡Ganaste! La piedra le gana a todo ;)");
  }
  return respuesta;
};

//#21) Programa con temporizador que muestre un mensaje cada cierto tiempo. Ejemplo: "Hola Mundo" cada 3 segundos.

setTimeout(function () {
  console.log("Hola Mundo");
}, 2000);

console.log(" esperando 3 2 1 ");

//#21)

function saludos(nombre, rol) {
  console.log(`Hola, mi nombre es ${nombre}`);
  console.log(`Yo soy ${rol}`);
}

setTimeout(saludos, 3000, "Sergio", "Programador");
