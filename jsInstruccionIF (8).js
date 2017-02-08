var ed,sel,op;

function Mostrar()
{
//tomo la edad  
 ed= parseInt(document.getElementById('edad').value);
	sel = document.getElementById('estadoCivil');
    op = sel.options[sel.selectedIndex].value;
	if (ed<18 && op != "Soltero")
        {
             alert("no hacer nada");
        }else if (ed>=18 && op=="Soltero"){
            alert("es soltero es no es menor edad ");
        }else{
            if (ed < 18)
                {
                    alert("menor de edad y soltero");
                }else if (ed>18)
                    {
                        alert("esta casado o divorsiado");
                    }
            
        }
            


}//FIN DE LA FUNCIÓN