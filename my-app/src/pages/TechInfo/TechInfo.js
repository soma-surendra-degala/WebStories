import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryGrid from '../../components/StoryGrid/StoryGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function TechInfo() {
  const navigate = useNavigate();

  const handleSelectStory = (id) => {
    navigate(`/story/${id}`); // ✅ Route to the story page
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{ textAlign: 'center' }} className="m-4">Tech Info Stories</h2>
        <StoryGrid filterCategory="techinfo" onSelectStory={handleSelectStory} />
      </div>
      <Footer />
    </>
  );
}

export default TechInfo;
