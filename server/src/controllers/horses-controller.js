const horsesService = require("../services/horses-service");
const axios = require('axios')
require('dotenv').config();

const horsesController = {
  getAllHorses: async (req, res) => {
    try {
      const horses = await horsesService.getAll();
      res.json(horses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getHorseById: async (req, res) => {
    try {
      const { id } = req.params;
      const horse = await horsesService.get(id);
      if (horse) {
        res.json(horse);
      } else {
        res.status(404).json({ error: "Horse not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createHorse: async (req, res) => {
    try {
      const newHorseData = ({
        name,
        age,
        breed,
        gender,
        color,
        owner,
        birthDate,
        lastCheckedDate,
        weight,
        height,
        status,
        pregnancyDate,
      } = req.body);
      try {
        const imgOffset = Math.floor(Math.random() * 200);
        const response = await axios.post(`http://api.depositphotos.com?dp_apikey=${process.env.DESPOSITPHOTOS_KEY}&dp_command=search&dp_search_query=horse+${newHorseData.color}&dp_search_limit=200&dp_search_vector=false&dp_search_offset=${imgOffset}&dp_search_height=400`);
        newHorseData.image = response?.data?.result[0]?.url_big;
      } catch (error) {
        console.error(`Horse image for ${newHorseData.name} failed with error: ${error.stack}`)
        newHorseData.image = "";
      }
      const newHorse = await horsesService.save(newHorseData);
      res.status(201).json(newHorse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateHorse: async (req, res) => {
    try {
      const { id } = req.params;
      const newHorseData = ({
        name,
        age,
        breed,
        gender,
        color,
        owner,
        birthDate,
        lastCheckedDate,
        weight,
        height,
        image,
        status,
        pregnancyDate,
      } = req.body);
      const updatedHorse = await horsesService.update(id, newHorseData);
      if (updatedHorse) {
        res.json(updatedHorse);
      } else {
        res.status(404).json({ error: "Horse not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteHorse: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedHorse = await horsesService.delete(id);
      if (deletedHorse) {
        res.send("Horse deleted successfully");
      } else {
        res.status(404).json({ error: "Horse not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = horsesController;
