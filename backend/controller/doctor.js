

const Doctor = require('../model/doctorSchema').Doctor;

// create doctor
exports.createDoc = (req, res) => {
  let newDoc = new Doctor({
    userID:req.body.userID,
    departmentID:req.body.departmentID,
    image: req.body.image,
    bloodTepe: req.body.bloodTepe,
    address: req.body.address
  })
  newDoc.save((err, doctor) => {
    if (err) return res.status(404).json({ error })
    res.status(201).json({ id: doctor._id })
  })
}

//find  doctors 
exports.FindAllDoc = (req, res) => {
    Doctor.find()
    .exec( (err, doctor) => {
      if(err) return res.status(401).success({success:false,err})
      res.status(200).json({ doctor })
    }) 
}

// //find  doctors by  dep id
// exports.getDoctors=(req, res) => {
//   Doctor.find({ departmentID: req.body.departmentID})
//   console.log("gggggggggg")
//     .populate('departmentID')
//     .exec((err, doctor) => {
//       if (err) return res.status(404).json({ success: false,err })
//       console.log("fffffffff")
//       res.json({doctor})
//     })
// }



