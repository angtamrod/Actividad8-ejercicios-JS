
//Aquí estamos declarando constantes

//La constante cuadro es el cuadro donde se muestra el resultado final
const cuadros = document.querySelectorAll(".cuadro");
//Aquí declaramos la constante controles y hacemos referencia a los input y a los resultados que nos ofrecen estos
const controles = document.querySelectorAll("input");
//Aquívemos la función resultante
const codigoColor = document.querySelector("p");

//Aquí estamos haciendo las funciones 
/**
 * Esta función mezclará dará el resultado del código hexadecimal
 * @param {string} r - Los dos primeros valores hacen referencia al rojo
 * @param {string} g - Los dos segundos hacen referencia al código de verde
 * @param {string} b - Los dos últimos hacen referencia a l código de azul codigo de azul
 * @returns codigo final de la mezcla de los 3 
 */
function hexadecimal(r,g,b){
    //aquí estamos declarando la variable que será el código resultante que tiene un arrays vacío
    let codigo = [];
    //estamos haciendo un bucle que dice la primera vez que se realice primero que i=0 y si i es menor que la totalidad de los argumentos i se icrementará en 1.
    //Arguments. es una variable interna de javascript que convierte en lista los parámetros en este caso r,g y b
    for(let i = 0; i < arguments.length; i++){
        //Esra añadiendo a la lista un argumento 
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
    }
    return `#${codigo.join("")}`;
}

//Aquí estamos modificando la constante controles que son inputs de tipo range que van desde un valor mínimo 0 hasta un valor máximo 255. Como controles hay más de un input con esa constante estan juntando los códigos que devuelven cada uno de esos inputs y modificando como se ven en cada caja y en la caja del resultado final 
//Para cada uno de mis inputs ejecutaré esta función a cada uno de esos controles (input) le llamaré control
controles.forEach(function(control,indice){
    //Añadimos un evetlistener para que cada vez que modifiquemos el input ejecute está función
    control.addEventListener("input",function(){
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);//al cuadro principal le cambiaremos el color de fondo con la función hexadecimal con el stríng resultante de los controles o (rojo), 1 (verde) y  2 (azul)
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0,indice == 1 ? control.value : 0,indice == 2 ? control.value : 0);
    });
});




