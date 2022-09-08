import React from "react";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
  const images = [
    {
      original: "/images/bannerPic1.jpg",
      thumbnail: "/images/bannerPic1.jpg",
      originalAlt: "gallery pic 1",
    },
    {
      original: "/images/bannerPic2.jpg",
      thumbnail: "/images/bannerPic2.jpg",
      originalAlt: "gallery pic 2",
    },
    {
      original: "/images/bannerPic3.jpg",
      thumbnail: "/images/bannerPic3.jpg",
      originalAlt: "gallery pic 3",
    },
    {
      original: "/images/bannerPic4.jpg",
      thumbnail: "/images/bannerPic4.jpg",
      originalAlt: "gallery pic 4",
    },
  ];
  return (
    <>
      <div className="min-h-[85vh] bg-[#ffffff] border-t border-[#003459] ">
        <div className="py-10 px-10 text-justify w-full mx-auto">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Gallery</h1>
          <div className="mt-3">
            <ImageGallery items={images} autoPlay="true" slideInterval="5000"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
