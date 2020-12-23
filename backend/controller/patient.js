const Patient = require('../model/patientSchema').Patient;


// create patient
exports.createPat = (req, res) => {
  let newPat = new Patient({
    image: req.body.image,
    bloodTepe: req.body.bloodType,
    address: req.body.address,
    userID:req.body.userID
  })
  newPat.save((err, patient) => {
    if (err) return res.status(404).json({ error })
    res.status(201).json({ id: patient._id })
  })
}

exports.getpatients = (req, res) => {
  Patient.find().populate('userID')
    .exec((err, patients) => {
      if (err) return res.status(404).json({ success: false })
      res.json({success: true,patients})
    })
}