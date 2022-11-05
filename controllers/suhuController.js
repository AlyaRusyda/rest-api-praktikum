async function celciusController(req, res) {
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
}

async function reamurController(req, res) {
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
}

async function fahrenheitController(req, res) {
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
}

async function kelvinController(req, res) {
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
}

module.exports = {celciusController, reamurController, fahrenheitController, kelvinController}