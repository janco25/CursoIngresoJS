function Mostrar()
{
//tomo la edad  
var mesa = document.getElementById('mes').value;
switch(mesa)
{
	case "Enero":
	alert("que comienze bien el año");
	break;
	case "Marzo":
	alert("a clases");
	break;
	case "Julio":
	alert("se vienen las vacaciones");
	break;
	case "Diciembre":
	alert("felices vacaciones");
	break;
	default:
	alert("en clases");
	break;
}



}//FIN DE LA FUNCIÓN