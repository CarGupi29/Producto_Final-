//Que son?? y como se definen??

//listas, arrays o vectores
//Ejemplo de como se definen
const datos=[1, "Hola", true, undefined, null];
const datos2 =new Array (1, "Hola", true, undefined, null);
const datos3 =new Array (3)
datos3[1]= "Hola Mundo";
const datos4 =[datos, datos2, datos3];

//Ejemplo de impresión
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//Objetos 
//son entidades a las cuales les podemos dar atributos, atributos todas las caracteristicas
//Ejemplo de un objeto 
const alumno  /* <--- Objeto */  = {  //Ejemplo de atributos
    nombre: "Pedro",
    edad: 15,
    isBlack: false,
    amistades:["confi", "confi2","confi3"]
        const ing = {
            matricula: 1232200650,
            carrera: "Sistemas"
        }
}

//Imprimir Objetos
console.log(alumno); 

//Imprimir mas especifico 
console.log(alumno.isBlack);