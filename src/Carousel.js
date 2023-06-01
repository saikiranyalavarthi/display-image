import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulated image data
  useEffect(() => {
    
    const imageData = [
      {
        id: 1,
        src: 'https://wallup.net/wp-content/uploads/2016/01/206531-animals-nature-birds.jpg',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    
      {
        id: 2,
        src: 'https://wallup.net/wp-content/uploads/2016/01/200493-animals-nature-birds.jpg',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        
      },
      {
        id: 3,
        src: 'https://wallpaperaccess.com/full/775987.jpg',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 4,
        src: 'https://wallpapercave.com/wp/wp2599594.jpg',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 5,
        src: 'https://th.bing.com/th/id/OIP.DpcLyyRCeTWoiiMNdCTXxQAAAA?pid=ImgDet&rs=1',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ];
  
    setImages(imageData);
  }, []);

  useEffect(() => {
    if (isPlaying && images.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPlaying, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  if (images.length === 0) {
    return <div>No images found.</div>;
  }

  return (
    <div className="image-carousel">
      <div className="image-container"> <div className="details">{images[currentIndex].details}</div>
        <img src={images[currentIndex].src} alt="Carousel" />
       
      </div>
      <div className="controls">
        <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
<div className="thumbnails">
        <button onClick={handlePrev}>Left</button> 
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Thumbnail ${index}`}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
        <button onClick={handleNext}>Right</button></div>
    </div>
  );
};

export default Carousel;
