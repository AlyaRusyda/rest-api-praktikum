async function bilanganController(req, res) {
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
}

module.exports = bilanganController