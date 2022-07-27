import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageGallery from 'react-image-gallery';

const Gallery=()=> {

  const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
  return (
    <>
 <NavBar />
      <div className="h-[80vh]  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-4 text-justify w-full mx-auto">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">Gallery</h1>
          <div>
          <ImageGallery  items={images} />

          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
}

export default Gallery;
