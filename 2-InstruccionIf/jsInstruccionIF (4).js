function Mostrar()
{
//tomo la edad  

var ed;
ed = parseInt(document.getElementById('edad').value);
if (ed>=13 && ed<=17){
    var s= prompt("ingrese algo");
	document.getElementById('resul').innerHTML="<h1>"+s+"</h1>";
}else{
	document.getElementById('resul').innerHTML = "<h1>menor o mayor</h1>";
}

}//FIN DE LA FUNCIÓN