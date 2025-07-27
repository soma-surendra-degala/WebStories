import React, { useEffect, useState } from 'react';
import './StoryGrid.css';

function StoryGrid({ onSelectStory, filterCategory }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stories')
      .then((res) => res.json())
      .then((data) => {
        const filtered = filterCategory
          ? data.filter((story) =>
              story.category?.toLowerCase() === filterCategory.toLowerCase()
            )
          : data;

        setStories(filtered);
      })
      .catch((err) => console.error('Error fetching stories:', err));
  }, [filterCategory]);

  return (
    <div className="story-grid">
      {stories.length === 0 ? (
        <p>No stories found.</p>
      ) : (
        stories.map((story) => (
          <div
            key={story._id}
            className="story-card"
            onClick={() => onSelectStory(story._id)}
          >
            <img src={story.thumbnail} alt={story.title} className="story-full-img" />
          </div>
        ))
      )}
    </div>
  );
}

export default StoryGrid;
