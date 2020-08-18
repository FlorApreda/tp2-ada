// Datos disponibles

const vendedoras = ['Ada', 'Grace', 'Hedy', 'Sheryl'];

const ventas = [
	[
		100000000,
		4,
		2,
		2019,
		'Grace',
		'Centro',
		['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
	],
	[
		100000001,
		1,
		1,
		2019,
		'Ada',
		'Centro',
		['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
	],
	[
		100000002,
		2,
		1,
		2019,
		'Grace',
		'Caballito',
		['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'],
	],
	[
		100000003,
		10,
		1,
		2019,
		'Ada',
		'Centro',
		['Monitor ASC 543', 'Motherboard ASUS 1200'],
	],
	[
		100000004,
		12,
		1,
		2019,
		'Grace',
		'Caballito',
		['Monitor GPRS 3000', 'Motherboard ASUS 1200'],
	],
	[
		100000005,
		21,
		3,
		2019,
		'Hedy',
		'Caballito',
		['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'],
	],
];

const precios = [
    ['Monitor GPRS 3000', 200],
    ['Motherboard ASUS 1500', 120],
    ['Monitor ASC 543', 250],
    ['Motherboard ASUS 1200', 100],
    ['Motherboard MZI', 30],
    ['HDD Toyiva', 90],
    ['HDD Wezter Dishital', 75],
    ['RAM Quinston', 110],
    ['RAM Quinston Fury', 230]
];

const sucursales = ['Centro', 'Caballito'];


// Funcionalidades

// Validaciones ------------------------------
const validarVendedora = vendedora => {
    if(vendedoras.findIndex(nombre => nombre === vendedora) === -1) throw new Error('La vendedora no existe');
};

const validarSucursal = sucursal => {
    if(sucursales.findIndex(sucur => sucur == sucursal) === -1) throw new Error('Sucursal invalida');
};

const validarComponente = componente => {
    if(precios.findIndex(arrayComponente => arrayComponente[0] === componente) === -1) throw new Error('El componente no existe');
};



// Método 1 ------------------------------
const precioMaquina = componentes => {
	let precioVenta = 0
	componentes.forEach(nombre => {
	    precios.forEach(componente => {
			if(componente[0].toLowerCase() === nombre.toLowerCase()) {
				precioVenta += componente[1]
			};
		});
	});
	return precioVenta;
};



// Método 2 ------------------------------
const cantidadVentasComponente = componente => {
    validarComponente(componente);
    const ventasComponente = [];
    ventas.forEach(venta => {
        venta[6].findIndex(comp => {
            if(comp === componente) ventasComponente.push(1)
        });
    });
    return ventasComponente.reduce((acc, contador) => acc + contador, 0);
};



// Método 3 ------------------------------
const ventasVendedora = nombre => {
    validarVendedora(nombre);
    const ventasDeVendedora = [];
    ventas.filter(vendedora => {
        if(vendedora[4] === nombre) {
            ventasDeVendedora.push(vendedora);
        };
    });
    const preciosDeMaquinasVendidas = [];
    precios.forEach(precio => {
        ventasDeVendedora.forEach(ventas => {
            ventas[6].map(maquinasVendidas => {
                if(precio[0] === maquinasVendidas) {
                    preciosDeMaquinasVendidas.push(precio[1]);
                };
            });
        });
    });
    return preciosDeMaquinasVendidas.reduce((acc, precio) => acc + precio, 0);
};



// Método 4 ------------------------------
const componenteMasVendido = _ => {
    let mayorComponenteVendido = 0;
    let mostSoldComponente = "";
    precios.forEach(componente => {
        let vecesQueSeVendeElComponente = cantidadVentasComponente(componente[0]);
        if(mayorComponenteVendido < vecesQueSeVendeElComponente) {
            mayorComponenteVendido = vecesQueSeVendeElComponente;
            mostSoldComponente = componente[0];
        }
    });
    return mostSoldComponente;
};



// Método 5 ------------------------------
const ventasSucursal = sucursal => {
    validarSucursal(sucursal);
    let ventasSucursal = [];
    ventas.forEach(venta => {
        if(venta[5] === sucursal) {
           venta[6].map(componente => {
               ventasSucursal.push(componente);
           });
        };
    });
    let preciosSucursal = [];
    precios.forEach(componente => {
        ventasSucursal.forEach(componentesVendidosEnSucursal => {
            if(componentesVendidosEnSucursal === componente[0]) {
                preciosSucursal.push(componente[1]);
            }
        })
    })
    return preciosSucursal.reduce((acc, precio) => acc + precio, 0);
};



// Método 6 ------------------------------
const mejorVendedora = _ => {
    let mayorTotalDeVentas = 0;
    let bestVendedora;
    vendedoras.forEach((NombreVendedora, index) => {
        if(mayorTotalDeVentas < ventasVendedora(NombreVendedora)) {
            mayorTotalDeVentas = ventasVendedora(NombreVendedora);
            bestVendedora = NombreVendedora;
            index++;
        };
    });
    return bestVendedora;
};



// Método 7 ------------------------------
const ventaPromedio = _ => {
    const ganancia = [];
    ventas.forEach(venta => {
        venta[6].map(maquinasVendidas => {
            precios.filter(maquinaYPrecio => {
                if(maquinasVendidas === maquinaYPrecio[0])
                ganancia.push(maquinaYPrecio[1])                 
            });
        });
    });
    return Math.floor(ganancia.reduce((acc, precio) => acc + precio / ganancia.length, 0));
};



// Método 8 ------------------------------
const obtenerIdVenta = _ => {
    return Math.floor(100000000 + Math.random() * 999999999);
};



// Método 9 ------------------------------
const agregarVenta = (id, dia, mes, anio, vendedora, sucursal, componente) => {
    validarVendedora(vendedora);
    validarSucursal(sucursal);
    let nuevaVenta = [
        id, 
        dia, 
        mes, 
        anio, 
        vendedora, 
        sucursal, 
        componente
    ];
    ventas.push(nuevaVenta);
};



// Funciones y arrays para exportar al archivo .test.js ------------------------------
const functionsYArrays = {
    vendedoras,
    ventas,
    precios,
    sucursales,
    validarComponente,
    validarSucursal,
    validarVendedora,
    precioMaquina,
    cantidadVentasComponente,
    ventasVendedora,
    componenteMasVendido,
    ventasSucursal,
    mejorVendedora,
    ventaPromedio,
    obtenerIdVenta,
    agregarVenta
};
module.exports = functionsYArrays;