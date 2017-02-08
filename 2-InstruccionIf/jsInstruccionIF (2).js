function Mostrar()
{
//tomo la edad  
var ed;
ed = parseInt(document.getElementById('edad').value);
if (ed>18){
	document.getElementById('resul').value=("mayor de edad");
}else{
	document.getElementById('resul').value=("menor de edad");
}


}//FIN DE LA FUNCIÓN