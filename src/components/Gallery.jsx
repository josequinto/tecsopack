import React, { useState, useRef } from "react";

const Gallery = ({fotos}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const galleryRef = useRef(null);

  const handleScroll = (direction) => {
    const gallery = galleryRef.current;

    if (gallery) {
      const itemWidth = gallery.offsetWidth / 4; // Considerando 4 imágenes por fila
      const newPosition =
        direction === "next"
          ? scrollPosition + itemWidth
          : scrollPosition - itemWidth;

      gallery.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div id="scroll-gallery">
      <svg
        id="control-prev"
        viewBox="0 0 448 512"
        onClick={() => handleScroll("prev")}
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
      </svg>
      <div className="image-container" ref={galleryRef}>
        {fotos.map( (foto, index) => <img src={foto} key={"image-container" + index} /> )}
        
      </div>
      <svg
        id="control-next"
        viewBox="0 0 448 512"
        onClick={() => handleScroll("next")}
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
      </svg>
    </div>
  );
};

export default Gallery;
