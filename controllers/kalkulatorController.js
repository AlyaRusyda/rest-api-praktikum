async function kalkulatorController(req, res) {
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
}

module.exports = kalkulatorController