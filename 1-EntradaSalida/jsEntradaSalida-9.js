/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var n,re;
	n= parseInt(document.getElementById('sueldo').value);
		re= n*10/100;
		document.getElementById('resultado').value=re;
	
}
