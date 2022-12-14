import React from "react";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
  const images = [
    {
      original: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic1.jpg",
      thumbnail: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic1.jpg",
      originalAlt: "gallery pic 1",
    },
    {
      original: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic2.jpg",
      thumbnail: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic2.jpg",
      originalAlt: "gallery pic 2",
    },
    {
      original: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic3.jpg",
      thumbnail: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic3.jpg",
      originalAlt: "gallery pic 3",
    },
    {
      original: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic4.jpg",
      thumbnail: "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic4.jpg",
      originalAlt: "gallery pic 4",
    },
  ];
  return (
    <>
      <div className="min-h-[85vh] bg-white dark:bg-black">
        <div className="py-10 px-10 text-justify w-full mx-auto">
          <h1 className="text-3xl font-semibold text-[#007EA7] ">Gallery</h1>
          <div className="mt-3">
            <ImageGallery items={images} autoPlay="true" slideInterval="5000"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
