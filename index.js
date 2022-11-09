const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const geometryRoutes = require('./routes/geometry')
const suhuRoutes = require('./routes/suhu')
const convertRoutes = require('./routes/convert')
const bmiRoutes = require('./routes/bmi')
const bilanganRoutes = require('./routes/bilangan')
const kalkulatorRoutes = require('./routes/kalkulator')
const forRoutes = require('./routes/for')
const arrayRoutes = require('./routes/array')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// Nomor 1
app.use('/geometry', geometryRoutes)

// Nomor 2
app.use('/suhu', suhuRoutes)

// Nomor 3
app.use('/convert', convertRoutes)

// Nomor 4
app.use('/bmi', bmiRoutes)

// Nomor 5
app.use('/bilangan', bilanganRoutes)

//1. kalkulator penjumlahan pengurangan pembagian perkalian
app.use('/kalkulator', kalkulatorRoutes)

//2. kelipatan 
app.use('/for', forRoutes)

//3. array
app.use('/array', arrayRoutes)

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
