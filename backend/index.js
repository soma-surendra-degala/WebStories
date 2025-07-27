const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Story = require('./model/Story'); // Ensure this file exists

const app = express();
const PORT = 5000;

// ✅ MongoDB connection string
const connectionString = 'mongodb+srv://surendra:Suri1234@surendra.irg39h8.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Surendra';

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true
})
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// ✅ Get all stories
app.get('/api/stories', async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get story by ID (fixed)
app.get('/api/stories/:id', async (req, res) => {
  try {
    const objectId = new mongoose.Types.ObjectId(req.params.id);
    const story = await Story.findById(objectId);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json(story);
  } catch (err) {
    res.status(500).json({ error: 'Invalid ID format or server error' });
  }
});

// ✅ Add a new story
app.post('/api/stories', async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
