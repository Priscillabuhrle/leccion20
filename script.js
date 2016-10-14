
// tu codigo va aca
//ejercicio #1 "El menor de los numeros"
function buscando_al_menor(n1,n2,n3){
    var menor= Math.min(n1,n2,n3);
    return menor;
}
document.write(buscando_al_menor(5,27,1) + "<br>");

//ejercicio #2 "numero par o impar"
function par_o_impar(num){
	if(num%2==0){
		return num +" " + "es par" + "<br>";
	}else{
		return num + " " + "es impar" + "<br>";
	}
}
document.write(par_o_impar(8));

//ejercicio #3 "ordenando numeros"
function menor_a_mayor(n1,n2,n3){
	var ordenar= [n1,n2,n3].sort(n1-n2);
	return ordenar;
}
document.write(menor_a_mayor(23,65,54)+"<br>");

// ejercicio #4 "mayusculas o minusculas"
/* ejercicio #6 "operaciones matemáticas"
function operacion_matematica(num,colback)*/

//ejercicio #7 "cuadrado de la suma de dos numeros"
function cuadrado_de_la_suma(num1,num2){
	var calculo= (num1 + num2)*(num1 + num2);
	return calculo + "<br>";
}
document.write(cuadrado_de_la_suma(3,6));

//ejercicio #8 "numero primo"
function primo(num){
	if (num%1==0 && num%num==0){
		return num + " " + "es un numero primo";
	}else{
		return num + " " + "no es un numero primo";
	}
}
document.write(primo(5));

//ejercicio #9 "multiplos de un numero"




