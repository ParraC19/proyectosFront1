let basico = 10000
let ejecutivo = 15000
let premium = 20000
let descuento = 0.15
let bebpequeña = 0
let bebmediana = 2000
let bebgrande = 3500
let dobleporcion = 5000
let postrext = 4000
let preciobruto = 0
let preciofinal = 0
let propina = (preciobruto * 10 / 100)



menu = Number(prompt('1 - Menu Basico ($10,000): Solo plato principal.\n2 - Menu Ejecutivo ($15,000): Plato principal + Bebida.\n3 - Menu Premium ($20,000): Plato principal + Bebida + Postre'))
switch (menu){
    case 1:
        rpta = Number(prompt('Desea ingresar propina? Si: 1 / No: 2'))
        if (rpta===1) {
            preciobruto = basico
            Number(preciofinal = basico + propina)
            console.log('-----FACTURA------')
            console.log('Menu Basico.............'+ basico+'\nPropina.............10%\nTotal.............'+preciofinal)
        } else if (rpta===2){
            preciofinal = basico
            console.log('---------FACTURA----------')
            console.log('Menu Basico.............'+ basico+'\nTotal.............'+preciofinal)
        }
    break
    
    case 2:
        bebida = Number(prompt('1 - Bebida pequeña (incluida en el menu).\n2 - Bebida mediana (+ $2,000).\n3 - Bebida grande (+ $3,500)'))
        switch (bebida) {
            case 1:
                rpta = Number(prompt('Desea ingresar propina? Si: 1 / No: 2'))
        if (rpta===1) {
            preciofinal = ejecutivo + (preciofinal * propina)
            console.log('-----FACTURA------')
            console.log('Menu Basico.............'+ basico+'\nPropina.............10%\nTotal.............'+preciofinal)
        } else if (rpta===2){
            preciofinal = basico
            console.log('---------FACTURA----------')
            console.log('Menu Basico.............'+ basico+'\nTotal.............'+preciofinal)
        }
                break;
            

            case 2:
                
        
            default:
                break;
        }

    

    break

    case 3:
    console.log('- Menu Basico ($10,000): Solo plato principal.\nMenu Ejecutivo ($15,000): Plato principal + Bebida.\nMenu Premium ($20,000): Plato principal + Bebida + Postre')

    break
}