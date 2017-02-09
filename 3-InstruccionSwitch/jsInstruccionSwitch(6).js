function Mostrar()
{
//tomo la edad  
var laHora = parseInt(document.getElementById('hora').value) ;
switch(laHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("es de mañana");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		alert("es de tarde");
			break;
		default :
			alert("es de noche");
			break;	
	}


}//FIN DE LA FUNCIÓN