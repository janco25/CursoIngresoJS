function Mostrar()
{
//tomo la edad  
var ed;
ed = parseInt(document.getElementById('edad').value);
if (ed>=18)
    {
     alert("es mayor de edad");   
    }
    else if (ed>=13 && ed<=17){
        alert("es adolecente");
    }else if ( ed >=1 && ed<13){
        alert("es un niño");
    }else 
        {
            alert("es un bebe");
        }




}//FIN DE LA FUNCIÓN