import React, { FC } from 'react';

interface ImgGalleryProps {
  images: string[];
}

const ImgGallery: FC<ImgGalleryProps> = (props) => {
  const { images } = props;

  return (
    <div className="property__gallery">
      {images.map((src, i) => {
        if (i < 9) {
          return (
            <div className="property__image-wrapper" key={`${src}`}>
              <img className="property__image" src={src} alt="" />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default React.memo(ImgGallery);
