const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const geometryRoutes = require('./routes/geometry')
const suhuRoutes = require('./routes/suhu')
const convertRoutes = require('./routes/convert')
const bmiRoutes = require('./routes/bmi')
const bilanganRoutes = require('./routes/bilangan')

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
app.get("/kalkulator/:nilai1/:nilai2", (req,res)=> {
    let nilai1= Number (req.params.nilai1)
    let nilai2= Number (req.params.nilai2)
    let tambah=nilai1+nilai2
    let kurang=nilai1-nilai2
    let kali=nilai1*nilai2
    let bagi=nilai1/nilai2

    let response={
        nilaisatu : nilai1,
        nilaidua : nilai2,
        Penjumlahan : tambah,
        Pengurangan : kurang,
        Perkalian : kali,
        Pembagian : bagi
    }
    res.json(response)
})
 

//2. kelipatan 
app.post("/perulanganFor", (req,res)=>{
    let awal=Number(req.body.awal)
    let akhir=Number(req.body.akhir)
    let kelipatan=Number(req.body.kelipatan)
    let i
    let tampung= new Array()
    let total=0;

    for (i=awal;i<=akhir;i+=kelipatan){
        tampung.push(i)
        total += i
    }
    let response={
        tampung,
        total : total
    }
    res.json(response)
})


//3. array
app.post("/penjumlahanarray", (req, res) => {
    let MatriksA= [
        [1, 2],
        [3, 4]
    ];

    let MatriksB= [
        [5, 6],
        [7, 8]
    ];

    let hasil=new Array()
    let i
    let j
    for (i=0; i< 2;i++){
        for (j=0; j<2;j++){
    hasil.push(MatriksA[i][j]+MatriksB[i][j])
    }
}
    let response= {
        MatriksA: MatriksA,
        MatriksB: MatriksB,
        penjumlahan: hasil
    }
res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
