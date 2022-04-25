const Pet = require("../models/pet.model");

module.exports.index = ({ req, res }) => {
  res.json({
    message: "Pet Controller",
  });
};
module.exports.getPets = (req, res) => {
  Pet.find({}, (err, pets) => {
    if (err) {
      res.send(err);
    }
    res.json(pets);
  });
};
module.exports.getPet = (req, res) => {
  Pet.findById(req.params.id, (err, pet) => {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};
module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then((pet) => res.json(pet))
    .catch((err) => res.status(400).json(err));
};
module.exports.updatePet = (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body, (err, pet) => {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};
module.exports.deletePet = (req, res) => {
  Pet.findByIdAndDelete(req.params.id, (err, pet) => {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};
module.exports.getPetByType = (req, res) => {
  Pet.find({ type: req.params.type }, (err, pet) => {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};
