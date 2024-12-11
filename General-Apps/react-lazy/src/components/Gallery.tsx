import { useState } from "react";

const ImageGallery = () => {
  const imageCount = 20;
  const images = Array.from({ length: imageCount }, (_, index) => {
    const number = index + 1;
    return {
      full: `/${number}.jpg`,
      thumbnail: `/${number}-small.jpg`,
    };
  });

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Image Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg bg-gray-200"
          >
            {/* <img
              src={src.full}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
              className="w-full h-96 object-cover"
            /> */}
            <ProgressiveImage
              fullSrc={src.full}
              thumbnailSrc={src.thumbnail}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProgressiveImageProps {
  fullSrc: string;
  thumbnailSrc: string;
  alt: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  fullSrc,
  thumbnailSrc,
  alt,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full pb-[150%]">
      {/* Thumbnail (always visible initially) */}
      <img
        src={thumbnailSrc}
        alt={`${alt} thumbnail`}
        loading="lazy"
        className={`
            absolute top-0 left-0 w-full h-full 
            object-cover 
            transition-opacity duration-300
            ${imageLoaded ? "opacity-0" : "opacity-100"}
          `}
      />
      {/* Full resolution image */}
      <img
        src={fullSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className={`
            absolute top-0 left-0 w-full h-full 
            object-cover 
            transition-opacity duration-300
            ${imageLoaded ? "opacity-100" : "opacity-0"}
          `}
      />
    </div>
  );
};

export default ImageGallery;
