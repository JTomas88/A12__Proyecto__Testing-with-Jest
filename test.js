// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// 1 dolar $ = 156.86 yen
// 1 dolar $ = 156.86 yen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.86; //yen
    return valueInYen
}

test ("1$ debe ser 156.86yens", function(){
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen (2);
    const expected = 2 * 156.86;
    expect(fromDollarToYen(2)).toBe(313.72);
})

// 1yen = 0.0050pounds
test ("1yen deben ser 0.0050 pounds", function(){
    const {fromYenToPound} = require('./app.js');
    const yens = fromYenToPound(2);
    const expected = 2 * 0.0050;
    expect(fromYenToPound(2)).toBe(0.01);
})