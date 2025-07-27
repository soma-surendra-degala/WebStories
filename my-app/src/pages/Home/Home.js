import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryGrid from '../../components/StoryGrid/StoryGrid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {
  const navigate = useNavigate();

  const handleSelectStory = (id) => {
    navigate(`/story/${id}`);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{ textAlign: 'center' }} className="m-4">Latest Stories</h2>
        <StoryGrid onSelectStory={handleSelectStory} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
