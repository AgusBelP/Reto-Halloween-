nombres = [];
edades = [];
alturas = [];
sustos = ["\ud83c\udf83","\ud83d\udc7b","\ud83d\udc80", "\ud83d\udd77", "\ud83d\udd78","\ud83e\udd87" ]; 
//pumpkin, ghost, skull, spider, spiderweb, bat
dulces = ["\ud83c\udf70", "\ud83c\udf6c","\ud83c\udf6d", "\ud83c\udf6a", "\ud83c\udf6b", "\ud83c\udf66", "\ud83c\udf69"]
// cake, candy, lollipop, cookie, chocolate, ice cream, donut
letras = 0;
edad = 0;
altura = 0;
cantidad_sustos = 0;
cantidad_dulces = 0;

function genera_random (resultado, tipo){
    i = 0
    result = ""
    do{result += tipo[Math.floor(Math.random()*tipo.length)];
        i += 1;
      }
    while (i != resultado);
   return result;
}


document.getElementById("add").onclick = function(){
    nombres.push(document.getElementById("name").value);
    edades.push(document.getElementById("age").value);
    alturas.push(document.getElementById("altura").value);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("altura").value = "";     
}

document.getElementById("submit").onclick = function(){

    if(document.getElementById("trick").checked){        
        nombres.forEach(element => { 
            letra = Math.trunc(element.length/2);
            letras += letra  
            });
        
        cantidad_sustos += letras;
            

        edades.forEach(element =>{
            if (element % 2 == 0){
                edad =+2
            }})
        
        cantidad_sustos += edad;

        alturas.forEach(element =>{
            division = Math.floor(element / 100);
            altura += (division * 3)       
            })
        
        cantidad_sustos += altura;
            
        document.getElementById("resultado").innerHTML = genera_random(cantidad_sustos,sustos)
        
        }

    else if(document.getElementById("treat").checked){

        nombres.forEach(element => { 
            letra = element.length;
            letras += letra;  
            });
        
        cantidad_dulces += letras;

        edades.forEach(element =>{
            if(Math.trunc(element / 3)>3){
                edad = 3}
            else {edad = Math.trunc(element / 3)}
            })
        
        cantidad_dulces += edad ;

        alturas.forEach(element =>{
            if(element >= 150){
                altura = 6
            }
            else(altura = 2*(Math.trunc(element / 50)))                
            })
        
        cantidad_dulces += altura;

        document.getElementById("resultado").innerHTML = genera_random(cantidad_dulces,dulces);
    }
    
    else{console.log("Ha ocurrido un error, por favor inténtalo de nuevo");}
}
   
document.getElementById("end").onclick = function(){
    nombres = [];
    edades = [];
    alturas = [];
    letras = 0;
    edad = 0;
    altura = 0;
    cantidad_sustos = 0;
    cantidad_dulces = 0;
    document.getElementById("resultado").innerHTML = "Por favor ingresa los datos solicitados"
}

