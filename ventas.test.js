const functionsYArrays = require('./ventas')

// Test de validaciones ------------------------------
describe('Validando los errores', () => {
    test('Vendedora: Ingreso nombre incorrecto y tira error', () => {
        expect(() => functionsYArrays.validarVendedora('Shakira')).toThrow('La vendedora no existe');
    });
    test('Sucursal: Ingreso sucursal incorrecta y tira error', () => {
        expect(() => functionsYArrays.validarSucursal('Caribe')).toThrow('Sucursal invalida');
    });
    test('Componente 1.1: Ingreso componente incorrecto y tira error', () => {
        expect(() => functionsYArrays.validarComponente('Tuerca')).toThrow('El componente no existe');
    });
    test('Componente 1.2: Si el componente no viene en un array y tira error', () => {
        expect(() => functionsYArrays.validarComponenteArray('Tuerca')).toThrow('El o los componentes deben venir en un array');
    });
    test('Dia 1.1: Ingreso un día incorrecto y tira error', () => {
        expect(() => functionsYArrays.agregarVenta(32, 8, 2020, 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toThrow('Número de día inválido');
    });
    test('Dia 1.2: Ingreso algo distinto a un número y tira error', () => {
        expect(() => functionsYArrays.agregarVenta('hola', 8, 2020, 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toThrow('Deber ser de tipo número');
    });
    test('Mes 1.1: Ingreso un mes incorrecto y tira error', () => {
        expect(() => functionsYArrays.agregarVenta(15, 13, 2020, 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toThrow('Número de mes inválido');
    });
    test('Mes 1.2: Ingreso algo distinto a un número y tira error', () => {
        expect(() => functionsYArrays.agregarVenta(15, 'hola', 2020, 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toThrow('Deber ser de tipo número');
    });
    test('Anio 1.1: Ingreso un anio incorrecto y tira error', () => {
        expect(() => functionsYArrays.agregarVenta(15, 8, 2021, 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toThrow('Número de anio inválido');
    });
    test('Anio 1.2: Ingreso algo distinto a un número y tira error', () => {
        expect(() => functionsYArrays.agregarVenta(15, 8, 'hola', 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'])).toThrow('Deber ser de tipo número');
    });
});


// Test del método 1 ------------------------------
describe('Validando el método 1', () => {
    test('Test 1.1: No ingreso ningún componente, por lo que, debería retornar 0', () => {
	    expect(functionsYArrays.precioMaquina([])).toEqual(0)
    });
    test('Test 1.2: Ingreso un componente y debería retornar su precio', () => {
	    expect(functionsYArrays.precioMaquina(['Motherboard ASUS 1200'])).toEqual(100)
    });
    test('Test 1.3: Ingreso varios componentes, y me debería retornar el valor de su suma', () => {
	    expect(functionsYArrays.precioMaquina([
		    'Motherboard ASUS 1200',
			'HDD Toyiva',
			'RAM Quinston Fury',
			'Monitor ASC 543',
		])).toEqual(670)
    });
});


// Test del método 2 ------------------------------
test('Test 2: Ingreso un componente y retorno la cantidad de unidades vendidas', () => {
    expect(functionsYArrays.cantidadVentasComponente('HDD Toyiva')).toBe(1);
});


// Test del método 3 ------------------------------
test('Test 3: Ingreso el nombre de una vendedora y retorno el importe de ventas', () => {
    expect(functionsYArrays.ventasVendedora('Grace')).toBe(990);
});


// Test del método 4 ------------------------------
test('Test 4: Saber cuál es el componente más vendido', () => {
    expect(functionsYArrays.componenteMasVendido()).toBe('Monitor GPRS 3000');
});


// Test del método 5 ------------------------------
test('Test 5: Ingreso el nombre de una sucursal y retorno el importe de la misma', () => {
    expect(functionsYArrays.ventasSucursal('Centro')).toBe(990);
});


// Test del método 6 ------------------------------
test('Test 6: Saber quién es la mejor vendedora', () => {
    expect(functionsYArrays.mejorVendedora()).toBe('Grace');
});


// Test del método 7 ------------------------------
test('Test 7: Promedio de ventas', () => {
    expect(functionsYArrays.ventaPromedio()).toBe(151);
});


// Test del método 8 ------------------------------
describe('Validando el número random', () => {
    test('Test 8: Creando ID para nuevas ventas', () => {
        expect(functionsYArrays.obtenerIdVenta()).toBeGreaterThan(100000000);
    });
    test('Test 8: Creando ID para nuevas ventas', () => {
        expect(functionsYArrays.obtenerIdVenta()).toBeLessThanOrEqual(999999999);
    });
});


// Test del metodo 9 ------------------------------
test('Test 9: Agregando una nueva venta', () => {
    functionsYArrays.agregarVenta(15, 8, 2020, 'Sheryl', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']);
    expect(functionsYArrays.ventas.length).toBe(7);
});