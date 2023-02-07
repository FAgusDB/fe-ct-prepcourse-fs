/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var tamaño = array.length
   return array[tamaño-1]   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var tamaño = array.length
   return tamaño
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(var i=0;i<array.length;i++){
      array[i] = array[i] + 1;
   }
   return array
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras[0]
   for(i=1;i<palabras.length;i++){
      frase = frase +' '+ palabras[i]
   } 
   return frase
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (i=0;i<array.length;i++){
      if(array[i] == elemento){
         return true
      }
   }
   return false
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = arrayOfNums.reduce(function(acumulador, elemento){
    return acumulador + elemento
   },0)
   return suma
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0
   for(i=0;i<resultadosTest.length;i++){
      promedio = promedio + resultadosTest[i]
   }
   promedio = promedio / resultadosTest.length
   return promedio
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var x = 0
   for(i=0;i<arrayOfNums.length;i++){
      if (x<arrayOfNums[i]){
         x = arrayOfNums[i]
      }
   }
   return x
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length == 0){
      return 0
   }else if(arguments.length == 1){
      return arguments[0]
   }else if(arguments.length > 1){
      var producto = 1
      for(i=0;i<arguments.length;i++){
         producto = producto * arguments[i]
      }
      return producto
   }   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantElementosMás18 = 0
   for(i=0;i<array.length;i++){
      if(array[i]>18){
         cantElementosMás18 = cantElementosMás18 + 1
      }
   }
   return cantElementosMás18
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia == 1 || numeroDeDia == 7){
      return "Es fin de semana"
   }else return "Es dia laboral"      
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var texto = num.toString();
   var primerValor = texto.charAt(0);
   if(primerValor === '9'){
      return true;
   }
   else return false;   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var valor = array[0]
   var igual = 1
   for(i=1;i<array.length;i++){
      if (valor == array[i]){
         igual = igual + 1
      }
   }
   if(igual == array.length){
      return true
   }else return false
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var array2 = []
   var Enero = false
   var Marzo = false
   var Noviembre = false
   for(i=0;i<array.length;i++){
      if(array[i] == "Enero"){
         array2.push("Enero")
         Enero = true
      }else if (array[i] == "Marzo"){
         array2.push("Marzo")
         Marzo = true
      }else if(array[i] == "Noviembre"){
         array2.push("Noviembre")
         Noviembre = true
      }      
   }   
   if(Enero == false || Marzo == false || Noviembre == false){
      return "No se encontraron los meses pedidos"
   }else return array2
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla6 = [0,1,2,3,4,5,6,7,8,9,10]
   for(i=0;i<tabla6.length;i++){
      tabla6[i] = tabla6[i] * 6
   }
   return tabla6
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresCien = []
   for(i=0;i<array.length;i++){
      if(array[i]>100){
         mayoresCien.push(array[i])
      }
   }
   return mayoresCien
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = []
   var vuelta = 0
   do{
      num = num + 2
      if(num == vuelta){
         break         
      }else
      array.push(num)
      vuelta = vuelta + 1
   }while(vuelta < 10)   
   if(num == vuelta){
      return "Se interrumpió la ejecución"
   }else
   return array
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = []
   var vuelta = 0
   do{
      if(vuelta == 5){
         vuelta = vuelta + 1   
         continue  
      }else{
         num = num + 2      
         array.push(num)
         vuelta = vuelta + 1         
      }      
   }while(vuelta < 10)   
   
   return array
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
