const petController = require("../controllers/pet.controller");
const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("/api/v1", petController.index);
  app.get("/api/v1/pets", PetController.getPets);
  app.get("/api/v1/pets/:id", PetController.getPet);
  app.post("/api/v1/pets", PetController.createPet);
  app.put("/api/v1/pets/:id", PetController.updatePet);
  app.delete("/api/v1/pets/:id", PetController.deletePet);
};
