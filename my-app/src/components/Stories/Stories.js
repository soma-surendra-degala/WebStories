import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Stories.css';
import Spinner from '../Spinner/Spinner';

function Stories() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/stories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (!story || !story.slides || story.slides.length === 0) return <p>No story found</p>;

  const slide = story.slides[index];

  const next = () => setIndex((prev) => (prev + 1) % story.slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + story.slides.length) % story.slides.length);

  return (
    <div className="story-viewer">
      <div className="story-slide">
        <img src={slide.image} alt="story" className="story-image" />
        <div className="story-quote">{slide.quote}</div>
      </div>

      <div className="story-nav">
        <button onClick={prev}>❮</button>
        <button onClick={next}>❯</button>
      </div>
    </div>
  );
}

export default Stories;
