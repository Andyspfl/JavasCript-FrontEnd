/* Haciendountriánguloconbucles
 Escribe un bucle que realice siete llamadas a console.log para mostrar el
 siguiente triángulo:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 
 Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo
 .length después de ella.
 let abc = "abc";
 console.log(abc.length);
 // → 3
*/
console.log("Ejercicio 1");

for(let i=0; i<=7 ; i++){
    line = "";
    for(let j=1; j<=i; j++){
        line += "#";
    }
    console.log(line);
}