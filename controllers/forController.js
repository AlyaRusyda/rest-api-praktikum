async function forController(req, res) {
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
}

module.exports = forController