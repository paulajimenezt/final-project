const { Horse } = require("../db/");

class HorsesService {
  // Save a horse
  async save(horseData) {
    try {
      const savedHorse = await Horse.create(horseData);
      return savedHorse;
    } catch (error) {
      console.error("Failed to create horse:", error);
      throw new Error("Failed to save horse");
    }
  }

  // Get a horse by ID
  async get(horseId) {
    try {
      const horse = await Horse.findByPk(horseId);
      return horse;
    } catch (error) {
      console.error("Failed to get horse:", error);
      throw new Error("Failed to get horse");
    }
  }

  // Get all horses
  async getAll() {
    try {
      const horses = await Horse.findAll();
      return horses;
    } catch (error) {
      console.error("Failed to get horses:", error);
      throw new Error("Failed to get horses");
    }
  }

  // Update a horse by ID
  async update(horseId, horseData) {
    try {
      const horse = await Horse.findByPk(horseId);
      if (horse) {
        await horse.update(horseData);
        return horse;
      }
    } catch (error) {
      console.error("Failed to update horse:", error);
      throw new Error("Failed to update horse");
    }
  }

  // Delete a horse by ID
  async delete(horseId, horseData) {
    try {
      const horse = await Horse.findByPk(horseId);
      if (horse) {
        await horse.destroy(horseData);
        return horse;
      } else {
        throw new Error("Horse not found");
      }
    } catch (error) {
      console.error("Failed to delete horse:", error);
      throw new Error("Failed to delete horse");
    }
  }
}

module.exports = new HorsesService();
