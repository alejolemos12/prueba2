// funciones
function prueba(){
    return "hola"
     
   }
   
   console.log(prueba()) // aca imprimimos la funcion
   alert(prueba()) // la llamamos en una alerta


const a=20;
const p= 50;

function suma(num1, num2)
{
 return num1 + num2 
}

console.log(suma(a, p))


const x=20;
const y= 50;
function operadores (action){
    if (action== "suma"){
   return suma(x,y)
  
}else if(action== "resta"){
  return resta(x, y)
}

 function suma(num1, num2){
    return num1 + num2 
   
 }
 function resta(num1,num2){
     return num1 - num2 
   
 }
}
console.log(operadores(`suma`))
console.log(operadores(`resta`))