var ed,sel,op;

function Mostrar()
{
//tomo la edad  

    ed= parseInt(document.getElementById('edad').value);
	sel = document.getElementById('estadoCivil');
    op = sel.options[sel.selectedIndex].value;
    if (ed<18 && op != "Soltero")
        {
             alert("es muy pequeño para no ser soltero");
        }else{
            alert("joven y soltero");
        }
   

}//FIN DE LA FUNCIÓN