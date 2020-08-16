/* Con esta variable estamos importando las funciones
y arrays del archivo ventas.js (para no duplicar código) */
const functionsYArrays = require('./ventas');

//Test de validaciones
describe('Validando los errores', () => {
    test('Vendedora: Ingreso nombre incorrecto y tira error',() => {
        expect(()=>functionsYArrays.validarVendedora('Shakira')).toThrow("La vendedora no existe");
    });
    test('Sucursal: Ingreso sucursal incorrecta y tira error',() => {
        expect(()=>functionsYArrays.validarSucursal('Caribe')).toThrow('Sucursal invalida');
    });
    test('Componente: Ingreso componente incorrecto y tira error',() => {
        expect(()=>functionsYArrays.validarComponente('Tuerca')).toThrow("El componente no existe");
    });
});

// Test del método 2 ------------------------------

test('Test 2: Ingreso un componente y retorno la cantidad de unidades vendidas', () =>{
    expect(functionsYArrays.cantidadVentasComponente('HDD Toyiva')).toBe(1);
});

// Test del método 3 ------------------------------
test('Test 3: Ingreso el nombre de una vendedora y retorno el importe de ventas', () => {
    expect(functionsYArrays.ventasVendedora("Grace")).toBe(990);
});

// Test del método 5 ------------------------------
test('Test 5: Ingreso el nombre de una sucursal y retorno el importe de la misma', () => {
    expect(functionsYArrays.ventasSucursal("Centro")).toBe(990);
});

// Test del método 7 ------------------------------
test('Test 7: Promedio de ventas', () => {
    expect(functionsYArrays.ventaPromedio()).toBe(151);
});

// Test del metodo 9 ------------------------------

test('Test 9: Agregando nueva venta', () => {
    functionsYArrays.agregarVenta(functionsYArrays.obtenerIdVenta(),15,8,2020,'Ada','Centro',["Monitor GPRS 3000", "Motherboard ASUS 1500"]);
    expect(functionsYArrays.ventas.length).toBe(7);
});