const router = require("express").Router();
const { Plant } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.json(plants);
    } catch (error) {
        console.error("Error fetching and rendering plants:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;