import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isSlideshowActive) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isSlideshowActive, images.length]);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsSlideshowActive(false);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsSlideshowActive(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setIsSlideshowActive(false);
  };

  const handleSlideshowToggle = () => {
    setIsSlideshowActive((prevState) => !prevState);
  };

  return (
    <div>
      <div className="carousel-image-container">
        <img src={images[currentImageIndex].url} alt={images[currentImageIndex].alt} />
        <div className="image-details">{images[currentImageIndex].details}</div>
      </div>
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={image.alt}
            className={index === currentImageIndex ? 'active' : 'inactive'}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleSlideshowToggle}>
          {isSlideshowActive ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
