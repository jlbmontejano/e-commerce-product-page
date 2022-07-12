import React, { useState } from "react";
import "./Components.css";

const Gallery = ({ windowWidth, overlayActive, setOverlayActive }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const imagesNumbers = [1, 2, 3, 4];

  return (
    <div>
      {windowWidth < 600 ? (
        //MOBILE VERSION OF GALLERY
        <div className="mobile-images-container">
          {/*PREVIOUS ARROW*/}
          {currentImage === 1 ? (
            <img
              src={process.env.PUBLIC_URL + `/images/icon-previous.svg`}
              alt="icon-previous-img"
              className="control-arrows prev-control-arrow"
              disabled
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + `/images/icon-previous.svg`}
              alt="icon-previous-img"
              className="control-arrows prev-control-arrow"
              onClick={() => setCurrentImage(currentImage - 1)}
            />
          )}
          {/*NEXT ARROW*/}
          {currentImage === 4 ? (
            <img
              src={process.env.PUBLIC_URL + `/images/icon-next.svg`}
              alt="icon-next-img"
              className="control-arrows next-control-arrow"
              disabled
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + `/images/icon-next.svg`}
              alt="icon-next-img"
              className="control-arrows next-control-arrow"
              onClick={() => setCurrentImage(currentImage + 1)}
            />
          )}
          {/*CURRENT IMAGE ARROW*/}
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/image-product-${currentImage}.jpg`
            }
            alt="thumbnail-img"
            className="mobile-product-image"
          />
        </div>
      ) : (
        //DESKTOP VERSION OF GALLERY
        <div>
          <div>
            <img
              src={
                process.env.PUBLIC_URL +
                `/images/image-product-${currentImage}.jpg`
              }
              alt="current-img"
              onClick={() => setOverlayActive(true)}
            />
          </div>
          <div className="images-thumbnails">
            {imagesNumbers.map(number => (
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/images/image-product-${number}-thumbnail.jpg`
                }
                alt="thumbnail-img"
                onClick={() => setCurrentImage(number)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
