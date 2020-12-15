const Department= require('../model/departmentSchema').Department;

exports.createDep= (req, res) => {
    let newDep = new  Department({
     title: req.body.title,
      image: req.body.image,
      about: req.body.about
    })
    newDep.save((err, dep) => {
      if (err) return res.status(404).json({ error })
      res.status(201).json({ id: dep._id })
    })
  }
