/* Con esta variable estamos importando las funciones
y arrays del archivo ventas.js (para no duplicar código) */
const functionsYArrays = require('./ventas');

// Test del método 3 ------------------------------
test('Test 3: Ingreso el nombre de una vendedora y retorno el importe de ventas', () => {
    expect(functionsYArrays.ventasVendedora("Grace")).toBe(990);
});