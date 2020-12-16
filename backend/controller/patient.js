const Patient = require('../model/patientSchema').Patient;


// create patient
exports.createPat = (req, res) => {
  let newPat = new Patient({
    image: req.body.image,
    bloodType: req.body.bloodType,
    address: req.body.address
  })
  newPat.save((err, patient) => {
    if (err) return res.status(404).json({ error })
    res.status(201).json({ id: patient._id })
  })
}

