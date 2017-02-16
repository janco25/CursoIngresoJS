function Mostrar()
{

	var contador=0,max,min,num;
	// declarar variables
	
	var respuesta=true

	while(respuesta==true)
	{
        num=parseInt(prompt("ingres numero"));
        if (contador==0)
        {
            max=num;
            min=num;
            contador++;
        }else
            {
                if(num>max)
                {
                    max=num;        
                }
                if(num<min)
                {
                    min=num;   
                }
            }
          respuesta=confirm("continuara ");
        }//fin de while
     
	   
	
    document.getElementById('maximo').value=max;
    document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN