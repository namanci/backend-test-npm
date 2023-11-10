const moment = require('moment')

// Obtenemos la fecha actual.
const todayDate = moment()

// Ingresamos la fecha de nacimiento.
const birthDate = moment('1984-07-18')

// Validamos si la fecha de nacimiento es válida.
if (birthDate.isValid()) {
    // Calculamos la diferencia en días entre la fecha actual y la fecha de nacimiento.
    const diffDays = todayDate.diff(birthDate, 'days')

    // Mostramos por consola el resultado.
    console.log(`Pasaron ${diffDays} días desde tu nacimiento hasta hoy.`)
} else {
    console.log('Fecha de nacimiento no válida.')
}