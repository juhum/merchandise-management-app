const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Mock database for simplicity
const inventory = [];

// Helper function to find an item by ID
const findItemById = (id) => inventory.find((item) => item.id === id);
//
// API endpoints

// Get all items
app.get('/api/items', (req, res) => {
  res.json(inventory);
});

// Add a new item (state defaults to 'free')
app.post('/api/items', (req, res) => {
  const { name, notes } = req.body;
  const newItem = {
    id: inventory.length + 1,
    name,
    notes: notes || '',
    state: 'free',
  };
  inventory.push(newItem);
  res.status(201).json(newItem);
});

// Edit notes for non-free items
app.put('/api/items/:id/notes', (req, res) => {
  const { id } = req.params;
  const { notes } = req.body;
  const item = findItemById(parseInt(id, 10));

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (item.state === 'free') {
    return res.status(400).json({ error: 'Cannot edit notes for items in free state' });
  }

  item.notes = notes;
  res.json(item);
});

// Set server to listen
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});