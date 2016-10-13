
// tu codigo va aca
//ejercicio uno
function callbackPromedio (a,b,c,callback){
	var suma = (a+b+c)/3;
	return callback(suma);
}
//ejercicio dos segundero

var cont = 1;
function contador(){
	document.getElementById("titulo").innerHTML = cont;
	cont++;
}
setInterval(contador,1000);
