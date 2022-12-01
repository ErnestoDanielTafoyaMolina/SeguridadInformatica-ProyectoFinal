//añade aqui la informacion isabel
//la definicion de lo que se pide 
// y al menos 3 ejemplos
export const concepts = [
    {   
        id:1,
        name:"Encriptacion asimetrica",
        definition:`Dos llaves distintas, una publica para codificar y otra para decodificar mensajes. Con este método cada persona o entidad mantiene dos llaves, una publica que puede ser divulgada libremente y otra privada que debe ser mantenida en secreto por su dueño.
        Los mensajes codificados con solo pueden ser descodificados privada correspondiente`,
        examples:[
            "RSA, ",
            "DSA, ",
            "Goldwasser-Micali.",
        ]
    },
    {
        id:2,
        name:"Encriptacion simetrica",
        definition:`Una llave única usa la misma llave tanto para codificar como para decodificar mensajes. Este método es bastante eficiente en relación al tiempo de procesamiento o sea, el tiempo que utiliza para codificar y decodificar, pero tiene una desventaja.
        Esta es la necesidad de utilización de un medio seguro para que la llave pueda ser compartida entre personas o entidades que deseen intercambian información encriptada.`,
        examples:[
            "3DES, ",
            "AES, ",
            "Blowfish.",
        ]
    }

]