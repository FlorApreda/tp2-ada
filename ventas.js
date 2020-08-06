// Datos disponibles

const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
    [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000',
        'Motherboard ASUS 1500']],
    [100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000',
        'Motherboard ASUS 1500']],
    [100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543',
        'Motherboard MZI', 'HDD Toyiva']],
    [100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543',
        'Motherboard ASUS 1200']],
    [100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000',
        'Motherboard ASUS 1200']],
    [100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543',
        'Motherboard ASUS 1200', 'RAM Quinston']]
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


// Funcionalidades!

// Método 1 ------------------------------
const precioMaquina = componentes => {
};
precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]); 
// 320 ($200 del monitor + $120 del motherboard)



// Método 2 ------------------------------
const cantidadVentasComponente = componente => {
};
cantidadVentasComponente("Monitor ASC 543"); // 3



// Método 3 ------------------------------
const ventasVendedora = nombre => {
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
};
componenteMasVendido(); // Monitor GPRS 3000



// Método 5 ------------------------------
const ventasSucursal = sucursal => {
};
ventasSucursal("Centro"); // 4195



// Método 6 ------------------------------
const mejorVendedora = _ => {
};
mejorVendedora(); // Grace



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
// Verificar. Por venta o ventas totales? Esta hecho por ventas totales.



// Método 8 ------------------------------
const obtenerIdVenta = _ => {
};
obtenerIdVenta();



// Método 9 ------------------------------
const agregarVenta = (id, dia, mes, anio, vendedora, sucursal, componentes) => {
};
agregarVenta('...datos...');



// Funciones y arrays para exportar al archivo .test.js ------------------------------
const functionsYArrays = {
    vendedoras,
    ventas,
    precios,
    sucursales,
    precioMaquina,
    cantidadVentasComponente,
    ventasVendedora,
    componenteMasVendido,
    ventasSucursal,
    ventaPromedio,
    obtenerIdVenta,
    agregarVenta
};
module.exports = functionsYArrays; 
