async function arrayController(req, res) {
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
}

module.exports = arrayController