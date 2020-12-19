const Department = require('../model/departmentSchema').Department;

// create department
exports.createDep = (req, res) => {
  let newDep = new Department({
    name: req.body.name,
    image: req.body.image,
    about: req.body.about
  })
  newDep.save((err, department) => {
    if (err) return res.status(404).json({ error })
    res.status(201).json({ id: department._id })
  })
}


// get depaertments
exports.getDepartments = (req, res) => {
  Department.find()
    .exec((err, departments) => {
      if (err) return res.status(404).json({ success: false })
      res.status(200).json({ success: true, departments })
    })
}