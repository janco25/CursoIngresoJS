function Mostrar()
{
//tomo la edad  
var ed;
ed = parseInt(document.getElementById('edad').value);
if (ed>=18){
	document.getElementById('resul').innerHTML="<h1>mayor de edad</h1>";
}else{
	document.getElementById('resul').innerHTML = "<h1>menor de edad</h1>";
}


}//FIN DE LA FUNCIÓN