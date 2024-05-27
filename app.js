// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// 1 dolar $ = 156.86 yen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.86; //yen
    return valueInYen
}

// 1yen = 0.0050pounds
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0050; //pounds
    return valueInPound;
}





module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}