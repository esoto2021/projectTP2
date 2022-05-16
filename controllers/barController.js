const barController = () => {
    return [{
        name: "Juan",
        apellido: "Campagna",
    },
    {
        name: "Fernando",
        apellido: "Valls"
    }]
}

const validarNombre = (miembros, param) => {
    return miembros.filter((item) => {
       return item.name == param
    })
}

module.exports = { barController, validarNombre }