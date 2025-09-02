'use client';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Define images as a constant to prevent recreation on each render
const GALLERY_IMAGES = [
  {
    original:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic1.jpg",
    thumbnail:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic1.jpg",
    originalAlt: "Gallery image 1",
    thumbnailAlt: "Gallery thumbnail 1",
  },
  {
    original:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic2.jpg",
    thumbnail:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic2.jpg",
    originalAlt: "Gallery image 2",
    thumbnailAlt: "Gallery thumbnail 2",
  },
  {
    original:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic3.jpg",
    thumbnail:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic3.jpg",
    originalAlt: "Gallery image 3",
    thumbnailAlt: "Gallery thumbnail 3",
  },
  {
    original:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic4.jpg",
    thumbnail:
      "https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/bannerPic4.jpg",
    originalAlt: "Gallery image 4",
    thumbnailAlt: "Gallery thumbnail 4",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-[85vh] bg-white dark:bg-black">
      <div className="py-10 px-4 sm:px-10 text-justify w-full mx-auto">
        <h1 className="text-3xl font-semibold text-[#007EA7]">Gallery</h1>
        <div className="mt-3">
          <ImageGallery
            items={GALLERY_IMAGES}
            autoPlay={true}
            slideInterval={5000}
            showPlayButton={false}
            showFullscreenButton={true}
            lazyLoad={true}
            onErrorImageURL="/images/placeholder.jpg"
            additionalClass="gallery-container"
            aria-label="Image gallery"
          />
        </div>
      </div>
    </div>
  );
}
