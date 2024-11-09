/*Tablero deajedrez
 Escribe un programa que cree una cadena que represente un tablero de 8x8,
 usando caracteres de salto de línea para separar las líneas. En cada posición
 del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
 formar un tablero de ajedrez.
 Al pasar esta cadena a console.log debería mostrar algo como esto:
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 Cuando tengas un programa que genere este patrón, define una variable size
 = 8 y cambia el programa para que funcione para cualquier size, generando
 un tablero con el ancho y alto dados*/

console.log("Ejercicio 3");
size = 8;
for(let i=0; i<=size; i++){
    line = "";
    
    for(let j=0;j<+size;j++){
        if(i%2==0){
            if(j%2==0){
                line += "#";
            }else{
                line += " ";
            }
        }
        else{
            if(j%2==0){
                line += " ";
            }else{
                line += "#";
            }
        }
    }
    console.log(line);
}