const sum = (a,b) => {
    return a + b
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

const fromDollarToYen = (MontoEnDolares)=> {
    const valueinYen = MontoEnDolares * oneEuroIs.JPY
    return valueinYen
}
const fromEuroToDollar  = (MontoEnEuros)=> {
    const valueInDollar = MontoEnEuros * oneEuroIs.USD
    return valueInDollar
    
}
const fromYenToPound = (MontoEnLlenes)=> {
    const valueinPound = MontoEnLlenes * oneEuroIs.GBP
    return valueinPound
}

module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };