/* Con esta variable estamos importando las funciones
y arrays del archivo ventas.js (para no duplicar código) */
const functionsYArrays = require('./ventas')

// Test del método 1 ------------------------------

test('Test 1: No ingreso ningún componente, y me debería retornar 0', () => {
	expect(functionsYArrays.precioMaquina([])).toEqual(0)
})

test('Test 2: Ingreso un componente, y me debería retornar su valor', () => {
	expect(functionsYArrays.precioMaquina(['Motherboard ASUS 1200'])).toEqual(100)
})

test('Test 3: Ingreso varios componentes, y me debería retornar el valor de su suma', () => {
	expect(
		functionsYArrays.precioMaquina([
			'Motherboard ASUS 1200',
			'HDD Toyiva',
			'RAM Quinston Fury',
			'Monitor ASC 543',
		])
	).toEqual(670)
})

// Test del método 3 ------------------------------
test('Test 3: Ingreso el nombre de una vendedora y retorno el importe de ventas', () => {
	expect(functionsYArrays.ventasVendedora('Grace')).toBe(990)
})
