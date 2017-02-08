function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var r ;
    r= Math.floor(Math.random()*10) +1;
    alert(r);
    
    if(r==9 || r== 10){
        muestra("excelente nota : ",r);
    }else if (r>=4 && r<=8)
        {
            muestra("aprobo!!! nota : ",r);
        }
    else 
        {
            muestra("vamos esfuerzate para la proxima  nota: ",r);
        }
    

}//FIN DE LA FUNCIÓN

function muestra(n,a)
{
    return document.getElementById('resul').innerHTML = "<h1>"+n + a+"</h1>";
}
