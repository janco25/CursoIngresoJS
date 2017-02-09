function Mostrar()
{
//tomo la edad  

var mesa = document.getElementById('mes').value;
switch(mesa)
{
	
	
	case "Marzo":
	case "Abril":
	case "Junio":
		alert("falta poco para el invierno");
	break;
	case "Julio":
	case "Agosto":
		alert("abrigate que hace frio!!!!!!!");
	break;
	
	default:
	alert("ya paso el frio hace calor !!!!!!!!");
	break;
}



}//FIN DE LA FUNCIÓN