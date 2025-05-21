const express = require ('express')
const app = express()
app.use(express.json())
const PORT = 3000

const direccionesValidas = require ('./reglas/reglas-direcciones')
const clientes = require('./data/clientes.json')

app.get('/direcciones-validas', (req,res) => {
    const pasan = clientes.filter((c) => direccionesValidas(c.direccion))
    const arrayRta = pasan.map(cliente => ({nombre: cliente.nombre, email: cliente.email}))
    res.status(200).json(arrayRta)
})

app.get('/direcciones-invalidas', (req,res) => {
    const noPasan = clientes.filter((c) => !direccionesValidas(c.direccion))
    const arrayRta = noPasan.map(cliente => ({nombre: cliente.nombre, email: cliente.email}))
    res.status(200).json(arrayRta)
})

app.listen(PORT, () => {
    console.log(`La aplicacion inicio en el puerto ${PORT}`)
})