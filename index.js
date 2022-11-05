const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { request } = require("express")
const app = express()

// penggunaan body-parser untuk ekstrak data berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended:true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/coba", (req,res) => {
    // req = request
    // res = response

    let response = {
        message: "Ini end-point",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})

app.get("/profil/:name/:age", (req,res) => {
    let name = req.params.name
    let age = req.params.age
    let response = {
        nama: name,
        umur:age
    }
    res.json(response)
})

app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang +lebar)
    let response = {
        panjang: panjang,
        lebar: lebar,
        keliling: keliling,
        luas: luas
    }
    res.json(response)
})

// Nomor 1
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)
    let lp = 6 * sisi * sisi
    let volume = sisi * sisi * sisi
    let response = {
        sisi: sisi,
        luas_permukaan: lp,
        volume: volume
    }
    res.json(response)
})

app.post("/balok", (req,res) => {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)
    let lp = 2 * (p*l + l*t + p*t)
    let volume = p * l * t
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        luas_permukaan: lp,
        volume: volume
    }
    res.json(response)
})

app.post("/balok", (req,res) => {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)
    let lp = 2 * (p*l + l*t + p*t)
    let volume = p * l * t
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        luas_permukaan: lp,
        volume: volume
    }
    res.json(response)
})

app.post("/bola", (req,res) => {
    let r = Number(req.body.jari_jari)
    let lp = 4 * 3.14 * r *r
    let volume = 4/3 * 3.14 * r * r * r
    let response = {
        jari_jari: r,
        luas_permukaan: lp,
        volume: volume
    }
    res.json(response)
})

app.post("/kerucut", (req,res) => {
    let r = Number(req.body.jari_jari)
    let S = Number(req.body.sisi_miring)
    let t = Number(req.body.tinggi)
    let lp = 3.14 * r * (r + S)
    let volume = 1/3 * 3.14 * r * r * t
    let response = {
        jari_jari: r,
        sisi_miring: S,
        tinggi: t,
        luas_permukaan: lp,
        volume: volume
    }
    res.json(response)
})

// Nomor 2
app.get("/convert/celcius/:c", (req,res) => {
    let c = Number(req.params.c)
    let r = 4/5 * c
    let f = 9/5 * c + 32
    let k = c + 273
    let response = {
        celcius: c,
        result: {
            reamur: r,
            fahrenheit: f,
            kelvin: k
        }
    }
    res.json(response)
})

app.get("/convert/reamur/:r", (req,res) => {
    let r = Number(req.params.r)
    let c = 5/4 * r
    let f = 9/4 * r + 32
    let k = 5/4 * r + 273
    let response = {
        reamur: r,
        result: {
            celcius: c,
            fahrenheit: f,
            kelvin: k
        }
    }
    res.json(response)
})

app.get("/convert/fahrenheit/:f", (req,res) => {
    let f = Number(req.params.f)
    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273
    let response = {
        fahrenheit: f,
        result: {
            celcius: c,
            reamur: r,
            kelvin: k
        }
    }
    res.json(response)
})

app.get("/convert/kelvin/:k", (req,res) => {
    let k = Number(req.params.k)
    let c = k - 273
    let r = (k - 273) * 4/5
    let f = 9/5 * (k - 273) + 32
    let response = {
        kelvin: k,
        result: {
            celcius: c,
            reamur: r,
            fahrenheit: f
        }
    }
    res.json(response)
})

// Nomor 3
app.post("/desimal", (req,res) => {
    let d = Number(req.body.angka)
    let b = d.toString(2)
    let o = d.toString(8)
    let h = d.toString(16).toUpperCase()
    let response = {
        desimal: d,
        result: {
            biner: b,
            oktal: o,
            hexadesimal: h
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) => {
    let biner = Number(req.body.angka)
    let d = parseInt(biner, 2)
    let o = parseInt(biner, 2).toString(8)
    let h = parseInt(biner, 2).toString(16).toUpperCase()
    let response = {
        biner: biner,
        result: {
            desimal: d,
            oktal: o,
            hexadesimal: h
        }
    }
    res.json(response)
})

app.post("/oktal", (req,res) => {
    let octal = Number(req.body.angka)
    let d = parseInt(octal, 8).toString(10)
    let b = parseInt(octal, 8).toString(2)
    let h = parseInt(octal, 8).toString(16).toUpperCase()
    let response = {
        oktal: octal,
        result: {
            desimal: d,
            biner: b,
            hexadesimal: h
        }
    }
    res.json(response)
})

app.post("/hexadesimal", (req,res) => {
    let hexadecimal = req.body.angka
    let d = parseInt(hexadecimal, 16).toString(10)
    let b = parseInt(hexadecimal, 16).toString(2)
    let o = parseInt(hexadecimal, 16).toString(8)
    let response = {
        hexadesimal: hexadecimal,
        result: {
            desimal: d,
            biner: b,
            oktal: o
        }
    }
    res.json(response)
})

// Nomor 4
app.post("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / (tinggi * tinggi)
    let status= ""
    if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Ideal)"
    } else if (bmi >= 25 && bmi <= 29.9) {
        status ="Kelebihan berat badan"
    } else {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }
    res.json(response)
})

// Nomor 5
app.post("/bilangan", (req,res) => {
    let nilai = Number(req.body.nilai)
    let status = ''
    if (nilai%2==0) {
        status= "genap"
    } else if(nilai%2==1){
        status= "ganjil"
    } 
    let response = {
        nilai:nilai,
        status:status 
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})