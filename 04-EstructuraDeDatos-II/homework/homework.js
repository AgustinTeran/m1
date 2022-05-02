'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
	this.head = null
}

function Node(value){
	this.value = value
	this.next = null
}

LinkedList.prototype.add = function(valor){
	var a = new Node(valor)
	var señalador = this.head

	if (señalador == null) {this.head = a}
	else{
		while(señalador.next !== null){
			señalador = señalador.next
		}
		señalador.next = a
	}	
}

LinkedList.prototype.remove = function(){
	var señalador = this.head
	var a = ""
	var b = ""
	if (señalador == null) {return null}
	if (señalador.next == null) {a = señalador.value; this.head = null; return a}
	else{
		while(señalador.next.next !== null){
			señalador = señalador.next

		}
		b = señalador.next.value
		señalador.next = null
		return b
	}
}

LinkedList.prototype.search = function(algo){
	var señalador = this.head

	if (señalador == null) {return "nada que buscar"}
	
	else{
		while(señalador !== null){
			if (typeof algo == "function") {if(algo(señalador.value) == true){return señalador.value}}
			if (algo == señalador.value) {return señalador.value}
			señalador = señalador.next
		}
	} 
	return null
}
// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
	this.buckets = []
	this.numBuckets = 35

}
  HashTable.prototype.hash = function(key){
 	
 	var suma = 0
 	for (var i = 0; i < key.length; i++) {
 		  suma += key[i].charCodeAt()
 	}
 	return suma % this.numBuckets
 }
  HashTable.prototype.get = function(clave){
 	var indice = this.hash(clave)
 	if (this.buckets[indice][clave] !== undefined) {return this.buckets[indice][clave]}


 }
 HashTable.prototype.hasKey = function(clave){
 	var indice = this.hash(clave)
 	if ( this.buckets[indice].hasOwnProperty(clave) == true) {return true}{return false}
 }
 HashTable.prototype.set = function(clave,valor){
 	if (typeof clave !== "string") {throw TypeError ('Keys must be strings')}
 	var indice = this.hash(clave)
 	if (this.buckets[indice] == null) {this.buckets[indice] = {}}
 	this.buckets[indice][clave] = valor
 }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
