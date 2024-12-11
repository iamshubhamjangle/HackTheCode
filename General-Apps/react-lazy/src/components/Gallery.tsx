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
            <img
              src={src.full}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
