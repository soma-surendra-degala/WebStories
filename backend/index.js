const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Story = require('./model/Story'); // Make sure this file exists

const app = express();
const PORT = 5000;

// ✅ MongoDB connection string with database name included
const connectionString = 'mongodb+srv://surendra:Suri1234@surendra.irg39h8.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Surendra';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
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

// Health check route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// Get all stories
app.get('/api/stories', async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/stories', async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get story by ID
app.get('/api/stories/:id', async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add a new story (returns just the ID)
app.post('/api/stories', async (req, res) => {
  try {
    const { title, quote, thumbnail, images, category } = req.body;

    const story = new Story({
      title,
      quote,
      thumbnail,
      images,      // ✅ array of image URLs
      category
    });

    const saved = await story.save(); // ✅ this saves to MongoDB
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

