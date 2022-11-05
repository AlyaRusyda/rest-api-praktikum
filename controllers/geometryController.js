async function kubusController(req, res) {
    let sisi = Number(req.body.sisi)
    let lp = 6 * sisi * sisi
    let volume = sisi * sisi * sisi

    let response = {
        sisi: sisi,
        luas_permukaan: lp,
        volume: volume
    };

    res.json({ response })
}

async function balokController(req, res) {
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
}

async function bolaController(req, res) {
    let r = Number(req.body.jari_jari)
    let lp = 4 * 3.14 * r *r
    let volume = 4/3 * 3.14 * r * r * r
    let response = {
        jari_jari: r,
        luas_permukaan: lp,
        volume: volume
    }
    res.json(response)
}

async function coneController(req, res) {
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
}

module.exports = {kubusController, balokController, bolaController, coneController}