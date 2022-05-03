'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var acum = [1]
  var nro = num
  var i = 2
  while(nro !== 1){
    if (nro % i == 0) {acum.push(i) ; nro = nro / i; i = 1};
    i++
  }
  return acum
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  var a = 0
  var b = 0
  for (var i = 0; i < array.length; i++) {
         if(array[i] > array[i + 1]){b = array[i + 1]; a = array[i]; array[i] = b ; array [i + 1] = a}

  }
  for (var i = 0; i < array.length; i++) {
     if (array[i] > array[i + 1]) {bubbleSort(array)}
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var i = 1
  var a = 0
  var b = 0
  for (var i = 1; i < array.length; i++) {
      var j = i - 1
      while(j >= 0){
           if (array[i] < array[j]) {b = array[i] ; a = array[j]; array[i] = a ; array[j] = b; i--};
           j--
      }
    }
    return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   var a = 0
   var b = 0
    for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                    if (array[i] > array[j]) {a = array[i]; b = array[j]; array[i] = b; array[j] = a}
                    
            }
    }
      return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
