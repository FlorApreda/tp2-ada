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
//--------------- VALIDACIONES -------------------//
const validarVendedora = vendedora =>{
    if(vendedoras.findIndex(nombre => nombre===vendedora) == -1) throw new Error("La vendedora no existe");
}

const validarSucursal = sucursal =>{
    if((sucursales.findIndex(sucur => sucur == sucursal))=== -1) throw new Error ('Sucursal invalida');
}

const validarComponente = componente =>{
    if(precios.findIndex(elem => elem[0]===componente) == -1) throw new Error("El componente no existe");
}

// Método 1 ------------------------------
const precioMaquina = componentes => {
};
precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]); 
// 320 ($200 del monitor + $120 del motherboard)



// Método 2 ------------------------------
const cantidadVentasComponente = componente => {
    validarComponente(componente);
    const ventasComponente = [];
    ventas.forEach(venta =>{
        venta[6].findIndex(comp => {
            if(comp === componente) ventasComponente.push(1)
        });
    });
    return ventasComponente.reduce((acc,contador)=> acc + contador, 0);
};

cantidadVentasComponente("Monitor ASC 543"); // 3

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
    let lista=[]; //[componente, 20]
    ventas.forEach(venta => {
        venta[6].forEach(componente =>{         
            if((lista.findIndex(comp=> comp[0]=== componente) === -1)){
                lista.push([componente, cantidadVentasComponente(componente)]);
                //lista.push(cantidadVentasComponente(componente));
            }
        })
    })
    let suma = lista[0][1];
    for(let i=0; i<lista.length; i++ ){
        if(suma<lista[i+1][1]){
            suma = lista[i+1][1];
        }else if(suma>lista[i+1][1]){
            lista[i+1][1]=suma
        }else{
            console.log(suma);
        }
    }
    // let suma = lista[0][1];
    // let comp=0;
    
    // for(let i=0; i<lista.length; i++ ){
    //     if(suma<lista[i++][1]){
    //         suma = lista[i++][1];
    //         comp = lista[i++][0];
    //     }else if(suma>lista[i++][1]){
    //         lista[i++][1]=suma;
    //         lista[i++][0]=comp;
    //     }else{
    //         console.log(suma,comp);
    //     }
    // }
    //let lista2 = lista.forEach(comp => comp[1])
    //console.log(Math.max(lista2));
    //console.log(Math.max(lista));
    //console.log(lista);
    //return lista.reduce((acc,comp)=>acc+comp[1],0)
};
componenteMasVendido(); // 'Monitor GPRS 3000'



// Método 5 ------------------------------
const ventasSucursal = sucursal => {
    validarSucursal(sucursal);
    let ventasSucursal = [];
    ventas.forEach(venta => {
        if(venta[5] === sucursal){
           venta[6].map(componente =>{
               ventasSucursal.push(componente);
           });
        };
    });
    let preciosSucursal = [];
    precios.forEach(componente =>{
        ventasSucursal.forEach(elem => {
            if(elem === componente[0]){
                preciosSucursal.push(componente);
            }
        })
    })
    return preciosSucursal.reduce((acc, precio)=> acc + precio[1], 0);
};
ventasSucursal("Centro");

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
// Verificar - preguntar!

// Método 8 ------------------------------
//Tiene que retornar un número aleatorio entre 100000000 y 999999999`

const obtenerIdVenta = _ => {
    return Math.floor(100000000 + Math.random()*999999999)
};
//console.log(obtenerIdVenta())

// Método 9 ------------------------------
const agregarVenta = (id, dia, mes, anio, vendedora, sucursal, componentes) => {
    validarVendedora(vendedora);
    ventasSucursal(sucursal);
    let nuevaVenta = [id, dia, mes, anio, vendedora, sucursal, componentes];
    ventas.push(nuevaVenta);
};
//agregarVenta(obtenerIdVenta(),15,08,2020,'Ada','Centro',["Monitor GPRS 3000", "Motherboard ASUS 1500"]);



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
    agregarVenta,
    validarComponente,
    validarSucursal,
    validarVendedora
};
module.exports = functionsYArrays; 
