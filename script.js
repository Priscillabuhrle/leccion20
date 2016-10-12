// tu codigo va aca
//ejercicio uno
function callbackPromedio (a,b,c,callback){
	var numUno= a;
	var numDos= b;
	var numTres= c;

	function callback(){
       var promedio= (numUno+numDos+numTres)/3;
       return promedio;
	}
	return callback();
}
var final= callbackPromedio(2,4,6)
return final;

//ejercicio dos segundero

var cont = 1;
function contador(){
	document.getElementById("titulo").innerHTML = cont;
	cont++;
}
setInterval(contador,1000);
