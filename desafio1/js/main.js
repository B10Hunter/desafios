const respuesta = (numero1, numero2) => numero1 + numero2

let numero1 , numero2 , alerta

do {
    alerta = alert ("sumador de numero")
    numero1 =  parseFloat(prompt("ingrese un numero"))
    numero2 = parseFloat(prompt("ingrese otro numero"))
    
    if (isNaN (numero1) || isNaN (numero2) ){
        alert ("Por favor no ingrese letras, solo numeros")
    }
    if (numero2) { alert 
        (respuesta (numero1, numero2) ) 
    
    }

    
    
} while (isNaN(numero1) || isNaN (numero2))   
