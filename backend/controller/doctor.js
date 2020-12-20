const Doctor = require('../model/doctorSchema').Doctor;

// create doctor
exports.createDoc = (req, res) => {
  let newDoc = new Doctor({
    image: req.body.image,
    bloodType: req.body.bloodType,
    address: req.body.address
  })
  newDoc.save((err, doctor) => {
    if (err) return res.status(404).json({ error })
    res.status(201).json({ id: doctor._id })
  })
}

//find  doctors by  dep id
exports.FindAllDocById = (req, res) => {
  Doctor.find().populate('userID')
    .exec((err, doctors) => {
      if (err) return res.status(404).json({ success: false })
      res.json({success: true,doctors})
    })
}

