async function bmiController(req, res) {
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
}

module.exports = bmiController