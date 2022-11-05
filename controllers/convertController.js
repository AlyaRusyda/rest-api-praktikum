async function desimalController(req, res) {
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
}

async function binerController(req, res) {
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
}

async function oktalController(req, res) {
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
}

async function hexadesimalController(req, res) {
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
}

module.exports = {desimalController, binerController, oktalController, hexadesimalController}