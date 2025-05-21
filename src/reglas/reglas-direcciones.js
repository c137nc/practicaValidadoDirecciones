const reglas = [
    {
        nombre: "Longitud",
        value: (direccion) => {
            const cantCaracteres = direccion.length
            if (cantCaracteres >= 20 && cantCaracteres <= 60) {
                return true
            }
            else {
                return false
            }

        }
    },
    {
        nombre:"Formato" ,
        value: (direccion) => {
            const palabras = direccion.split(" ")
            return palabras.some(palabra => !isNaN(palabra))

        }
    },
    {
        nombre: "Caracteres prohibidos",
        value: (direccion) => {
            const caracteresProhibidos = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
            return !caracteresProhibidos.some(c => direccion.includes(c))

        }
    },
    {
        nombre: "Palabras requeridas",
        value: (direccion) => {
            const palabras = ["Calle", "Avenida", "Bulevar", "Pasaje"]
            return palabras.some( p => direccion.includes(p))
        }
    },
    {
        nombre: "Consistencia",
        value: (direccion) => {
            const arrayDir = direccion.split(" ")
            const ultimo = arrayDir[arrayDir.length - 1]
            if (ultimo.length <= 6 && !isNaN(ultimo)) {
                return true
            }
            else {
                return false
            }
        }
    },
    {
        nombre: "Sin abreviaturas",
        value: (direccion) => {
            const abreviaturas =[ "Av", "Av", "Au", "AU"]
            return !abreviaturas.some(elem => direccion.includes(elem))

        }
    },
    {
        nombre: "Mayusculas",
        value: (direccion) => {
            const arrayPalabras = direccion.split(" ")
            return arrayPalabras.every((palabra) => {
                const primerLetra = palabra[0]
                return primerLetra == primerLetra.toUpperCase()
            })
        }
    }
]

const direccionesValidas = (direccion) => {
    return reglas.every((regla) => regla.value(direccion))
}

module.exports = direccionesValidas