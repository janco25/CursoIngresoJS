/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var n,n2;
	n = parseInt(document.getElementById('n1').value);
	n2 = parseInt(document.getElementById('n2').value);
	alert(n % n2);
	
	alert("rsultados dos : "+ n2%n);
}
