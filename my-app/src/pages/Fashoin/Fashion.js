// src/pages/Fashion.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryGrid from '../../components/StoryGrid/StoryGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Fashion() {
  const navigate = useNavigate();

  const handleSelectStory = (id) => {
    navigate(`/story/${id}`); // 🔁 navigate to route
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{ textAlign: 'center' }} className="m-4">Fashion Stories</h2>
        <StoryGrid filterCategory="fashion" onSelectStory={handleSelectStory} />
      </div>
      <Footer />
    </>
  );
}

export default Fashion;
