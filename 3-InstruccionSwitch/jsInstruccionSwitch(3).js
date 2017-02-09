function Mostrar()
{
//tomo la edad  

//alert (mesDelAño);
	
	var mesa = document.getElementById('mes').value;
switch(mesa)
{
	
	
	case "Febrero":
	
		alert("este mes no tiene mas 29 dias");
	break;
	
	default:
	alert("este mes tien 30 dias o mas");
	break;
}


}//FIN DE LA FUNCIÓN