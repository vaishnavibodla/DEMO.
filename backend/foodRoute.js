const express = require('express');
const Food = require('../models/food');
const router = express.Router();

// Add Food Listing
router.post('/add', async (req, res) => {
  const { restaurantId, foodName, quantity, expiryDate } = req.body;
  try {
    const food = new Food({ restaurantId, foodName, quantity, expiryDate });
    await food.save();
    res.status(201).json({ message: "Food added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Available Food
router.get('/', async (req, res) => {
  try {
    const food = await Food.find({ status: 'available' });
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Claim Food
router.post('/claim', async (req, res) => {
  const { foodId, userId } = req.body;
  try {
    const food = await Food.findById(foodId);
    if (!food) return res.status(404).json({ error: "Food not found" });

    food.status = 'claimed';
    food.claimedBy = userId;
    await food.save();
    res.json({ message: "Food claimed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
