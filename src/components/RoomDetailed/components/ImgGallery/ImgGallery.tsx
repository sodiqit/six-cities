import React, { FC } from 'react';

type Image = {
  src: string;
  alt: '';
};

interface ImgGalleryProps {
  images: Image[];
}

const ImgGallery: FC<ImgGalleryProps> = (props) => {
  const { images } = props;

  return (
    <div className="property__gallery">
      {images.map(({ src, alt }) => {
        return (
          <div className="property__image-wrapper" key={`${src}_${alt}`}>
            <img className="property__image" src={src} alt={alt} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ImgGallery);
