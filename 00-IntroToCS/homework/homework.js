'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0									//"110"
var a = String(num) 							//"011"
var b = ""
for (var i = a.length - 1; i >= 0; i--) {
	     b = b + a[i]
}


for (var j = 0 ; j < b.length; j++) {
		suma = suma + Number(b[j]) * 2 ** [j]
	}

	


return suma




}

function DecimalABinario(num) {
  // tu codigo aca
  var p = num
	var str = ""
	while(p > 0){
		if(p % 2 == 0) {str = str + "0"} 
		if(p % 2 !== 0){str = str + "1"} ;
	p = Math.floor(p / 2)
	}
	var resultado = ""
	for (var i = str.length - 1; i >= 0 ; i--) {
		resultado += str[i]
	}

	
	return resultado



}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}