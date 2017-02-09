function Mostrar()
{
//tomo la edad  

//alert (mesDelAño);
	var mesa = document.getElementById('mes').value;
switch(mesa)
{
	case "Febrero":
		alert("tiene 28 dias");
	break;
	
	case "Marzo":
	case "Abril":
	case "Junio":
		alert("tiene 30 dias");
	break;
	
	
	default:
	alert("tiene 31 dias");
	break;
}
	



}//FIN DE LA FUNCIÓN