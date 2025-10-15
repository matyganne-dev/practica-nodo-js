/*El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en 
STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta  
y el precio de los mismos es el siguiente: 

1) Amarok V6 (Oferta: 65.000.000) 
2) TAOS 53.000.000 
3) Polo Nuevo 47.000.000 

El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)

1ro) Selecciona el Vehículo de interés 
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el 
dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo. 
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a 
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será 

financiada de la siguiente forma: 
12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL 
36 cuotas - 33 % ANUAL 
*/

//variables para salidas y seleccion de switch
let opcion = 0;
let salida = 0;
let cuota = 0;

//variables para calculo principal
let dineroDisponible = 0;
let valorVehiculo = 0;
let diferenciaPagar = 0;
//variables para calculos de cuotas
let cuotaElegida = 0;
let tasaAnual = 0;
let interesTotal = 0;
let totalFinanciar = 0;
let cuotaMensual = 0;

do {
    opcion = Number(prompt("Selecciona tu proximo vehículo de interes 0 km que tenemos en stock:\n1) Amarok V6 (Oferta: 65.000.000)\n2) TAOS 53.000.000 \n3) Polo Nuevo 47.000.000 "));

    switch (opcion) {
        case 1:
            valorVehiculo = 65000000;
            console.log("vehiculo seleccionado: Amarok V6");

            do {
                dineroDisponible = Number(prompt(`Ingrese monto de entrega. \nEl monto debe ser mayor a $${valorVehiculo * 0.3} para poder hacer la entrega del vehiculo`));

                if (dineroDisponible > valorVehiculo) {
                    console.log(`el monto ingresado $${dineroDisponible} supera al valor del vehiculo por: $ ${dineroDisponible - valorVehiculo}\npara evitar errores vuelva a cargar el valor`);
                }
                else if (dineroDisponible < (valorVehiculo * 0.3)) {
                    console.log(`el monto ingresado $${dineroDisponible} es inferior al 30% del vehiculo, intente cargar nuevamente`);
                }
                else {
                    console.log(`Monto válido: $${dineroDisponible}`);
                }
            } while (dineroDisponible < (valorVehiculo * 0.3) || dineroDisponible > valorVehiculo);

            diferenciaPagar = valorVehiculo - dineroDisponible;
            console.log(`diferencia a pagar $${diferenciaPagar}`);

            do {
                cuota = Number(prompt("Selecciona la cuota mas comoda para tu bolsillo\n1) 12 cuotas - 9.9 % ANUAL \n2) 24 cuotas - 22 % ANUAL \n3) 36 cuotas - 33 % ANUAL "));
                switch (cuota) {
                    case 1:
                        tasaAnual = 0.099;
                        cuotaElegida = 12;
                        break;
                    case 2:
                        tasaAnual = 0.22;
                        cuotaElegida = 24;
                        break;
                    case 3:
                        tasaAnual = 0.33;
                        cuotaElegida = 36;
                        break;
                    default:
                        console.log(`El valor ingresado "${cuota}" no es correcto\n por favor elige una valor dispuesto en el listado`);
                        break;
                }
            } while (cuota < 1 || cuota > 3);

            interesTotal = diferenciaPagar * tasaAnual;
            totalFinanciar = diferenciaPagar + interesTotal;
            cuotaMensual = totalFinanciar / cuotaElegida;

            console.log(`📊 RESUMEN DE FINANCIACIÓN:
                        • Valor vehículo: $${valorVehiculo}
                        • Entrada pagada: $${dineroDisponible}
                        • Saldo a financiar: $${diferenciaPagar}
                        • Cuotas elegidas: ${cuotaElegida} meses
                        • Tasa anual: ${tasaAnual * 100}%
                        • Interés total: $${interesTotal}
                        • Total a pagar en cuotas: $${totalFinanciar}
                        • Cuota mensual: $${cuotaMensual.toFixed(2)}
                        `);
            break;

        case 2:
            valorVehiculo = 53000000;
            console.log("vehiculo seleccionado: TAOS");

            do {
                dineroDisponible = Number(prompt(`Ingrese monto de entrega. \nEl monto debe ser mayor a $${valorVehiculo * 0.3} para poder hacer la entrega del vehiculo`));

                if (dineroDisponible > valorVehiculo) {
                    console.log(`el monto ingresado $${dineroDisponible} supera al valor del vehiculo por: $ ${dineroDisponible - valorVehiculo}\npara evitar errores vuelva a cargar el valor`);
                }
                else if (dineroDisponible < (valorVehiculo * 0.3)) {
                    console.log(`el monto ingresado $${dineroDisponible} es inferior al 30% del vehiculo, intente cargar nuevamente`);
                }
                else {
                    console.log(`Monto válido: $${dineroDisponible}`);
                }
            } while (dineroDisponible < (valorVehiculo * 0.3) || dineroDisponible > valorVehiculo);

            diferenciaPagar = valorVehiculo - dineroDisponible;
            console.log(`diferencia a pagar $${diferenciaPagar}`);

            do {
                cuota = Number(prompt("Selecciona la cuota mas comoda para tu bolsillo\n1) 12 cuotas - 9.9 % ANUAL \n2) 24 cuotas - 22 % ANUAL \n3) 36 cuotas - 33 % ANUAL "));
                switch (cuota) {
                    case 1:
                        tasaAnual = 0.099;
                        cuotaElegida = 12;
                        break;
                    case 2:
                        tasaAnual = 0.22;
                        cuotaElegida = 24;
                        break;
                    case 3:
                        tasaAnual = 0.33;
                        cuotaElegida = 36;
                        break;
                    default:
                        console.log(`El valor ingresado "${cuota}" no es correcto\n por favor elige una valor dispuesto en el listado`);
                        break;
                }
            } while (cuota < 1 || cuota > 3);

            interesTotal = diferenciaPagar * tasaAnual;
            totalFinanciar = diferenciaPagar + interesTotal;
            cuotaMensual = totalFinanciar / cuotaElegida;

            console.log(`📊 RESUMEN DE FINANCIACIÓN:
                        • Valor vehículo: $${valorVehiculo}
                        • Entrada pagada: $${dineroDisponible}
                        • Saldo a financiar: $${diferenciaPagar}
                        • Cuotas elegidas: ${cuotaElegida} meses
                        • Tasa anual: ${tasaAnual * 100}%
                        • Interés total: $${interesTotal}
                        • Total a pagar en cuotas: $${totalFinanciar}
                        • Cuota mensual: $${cuotaMensual.toFixed(2)}
                        `);
            break;

        case 3:
            valorVehiculo = 47000000;
            console.log("vehiculo seleccionado: Polo Nuevo");

            do {
                dineroDisponible = Number(prompt(`Ingrese monto de entrega. \nEl monto debe ser mayor a $${valorVehiculo * 0.3} para poder hacer la entrega del vehiculo`));

                if (dineroDisponible > valorVehiculo) {
                    console.log(`el monto ingresado $${dineroDisponible} supera al valor del vehiculo por: $ ${dineroDisponible - valorVehiculo}\npara evitar errores vuelva a cargar el valor`);
                }
                else if (dineroDisponible < (valorVehiculo * 0.3)) {
                    console.log(`el monto ingresado $${dineroDisponible} es inferior al 30% del vehiculo, intente cargar nuevamente`);
                }
                else {
                    console.log(`Monto válido: $${dineroDisponible}`);
                }
            } while (dineroDisponible < (valorVehiculo * 0.3) || dineroDisponible > valorVehiculo);

            diferenciaPagar = valorVehiculo - dineroDisponible;
            console.log(`diferencia a pagar $${diferenciaPagar}`);

            do {
                cuota = Number(prompt("Selecciona la cuota mas comoda para tu bolsillo\n1) 12 cuotas - 9.9 % ANUAL \n2) 24 cuotas - 22 % ANUAL \n3) 36 cuotas - 33 % ANUAL "));
                switch (cuota) {
                    case 1:
                        tasaAnual = 0.099;
                        cuotaElegida = 12;
                        break;
                    case 2:
                        tasaAnual = 0.22;
                        cuotaElegida = 24;
                        break;
                    case 3:
                        tasaAnual = 0.33;
                        cuotaElegida = 36;
                        break;
                    default:
                        console.log(`El valor ingresado "${cuota}" no es correcto\n por favor elige una valor dispuesto en el listado`);
                        break;
                }
            } while (cuota < 1 || cuota > 3);

            interesTotal = diferenciaPagar * tasaAnual;
            totalFinanciar = diferenciaPagar + interesTotal;
            cuotaMensual = totalFinanciar / cuotaElegida;

            console.log(`📊 RESUMEN DE FINANCIACIÓN:
                        • Valor vehículo: $${valorVehiculo}
                        • Entrada pagada: $${dineroDisponible}
                        • Saldo a financiar: $${diferenciaPagar}
                        • Cuotas elegidas: ${cuotaElegida} meses
                        • Tasa anual: ${tasaAnual * 100}%
                        • Interés total: $${interesTotal}
                        • Total a pagar en cuotas: $${totalFinanciar}
                        • Cuota mensual: $${cuotaMensual.toFixed(2)}
                        `);
            break;

        default:
            console.log(`El valor ingresado "${opcion}" no es correcto`);
            break;
    }

    salida = Number(prompt("¿Desea seguir ingresando? 0-NO | 1-Si "));

} while (salida !== 0);

