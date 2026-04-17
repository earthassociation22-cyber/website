import React, { useState, useEffect } from "react";
import { photos } from "../../assets/wildlifeWeek/photos";
import { photos as photos2 } from "../../assets/newspaperCuttings/photos";
import { programListPhotos } from "../../assets/wildlifeWeek/programListPhotos";
import { useGallery } from "../../context/GalleryContext";

const Gallery = () => {
  const { openImage } = useGallery();
  const [seeMoreWildlife, setSeeMoreWildlife] = useState(false);
  const [seeMoreNewspaper, setSeeMoreNewspaper] = useState(false);
  const [seeMoreProgramList, setSeeMoreProgramList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Intelligent Image Preloader
  useEffect(() => {
    const preloadCrucialImages = async () => {
      // Preload only the initial visible batch of images (the first 6 per section)
      // This makes the initial page paint lightning-fast while the browser lazy-loads the remaining assets.
      const initialImages = [
        ...photos.slice(0, 6),
        ...photos2.slice(0, 6),
        ...programListPhotos.slice(0, 6),
      ];

      try {
        await Promise.all(
          initialImages.map((photo) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = photo.src;
              img.onload = resolve;
              img.onerror = resolve; // Safely resolve anyway if a broken asset occurs
            });
          })
        );
      } finally {
        setIsLoading(false);
      }
    };

    preloadCrucialImages();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50/50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1f693a] mb-6"></div>
        <h2 className="font-bebas text-2xl tracking-widest text-[#1f693a] animate-pulse">
          Loading High Quality Assets...
        </h2>
      </div>
    );
  }

  return (
    <main className="my-[80px] w-full overflow-hidden animate-fade-in">
      <div className="w-full mx-auto font-raleway min-h-[90vh]">
        
        {/* Wildlife Gallery Section */}
        <div className="mb-24 relative w-full pt-4">
          <h2 className="font-bebas text-[45px] text-center tracking-[1px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
            Wildlife Week Gallery
          </h2>
          <div
            className={`relative overflow-hidden transition-all duration-[1200ms] ease-in-out w-full ${
              seeMoreWildlife ? "max-h-[8000px]" : "max-h-[400px]"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-2 px-1 md:px-2">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden cursor-pointer hover:shadow-2xl hover:z-10 transition-all duration-300 transform hover:scale-[1.02] relative rounded-sm bg-gray-100"
                  onClick={() => openImage(photo.src, photos.map((p) => p.src))}
                >
                  <img 
                    src={photo.src} 
                    alt="Wildlife Week" 
                    className="w-full h-full object-cover transition-opacity duration-500" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {!seeMoreWildlife && (
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          )}

          <div className={`flex justify-center mt-6 transition-all duration-500 ${!seeMoreWildlife ? "absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20" : ""}`}>
            <button
              onClick={() => setSeeMoreWildlife(!seeMoreWildlife)}
              className="px-10 py-3.5 bg-gradient-to-r from-[#1f693a] to-emerald-600 text-white font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500"
            >
              {seeMoreWildlife ? "Close Album" : "Open Album"}
            </button>
          </div>
        </div>

        {/* Newspaper Cuttings Section */}
        <div className="mb-24 relative w-full">
          <h2 className="font-bebas text-[45px] text-center tracking-[1px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
            Newspaper Cuttings
          </h2>
          <div
            className={`relative overflow-hidden transition-all duration-[1200ms] ease-in-out w-full ${
              seeMoreNewspaper ? "max-h-[8000px]" : "max-h-[400px]"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-2 px-1 md:px-2">
              {photos2.map((photo, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden cursor-pointer hover:shadow-2xl hover:z-10 transition-all duration-300 transform hover:scale-[1.02] relative rounded-sm bg-gray-100"
                  onClick={() => openImage(photo.src, photos2.map((p) => p.src))}
                >
                  <img 
                    src={photo.src} 
                    alt="Newspaper Cutting" 
                    className="w-full h-full object-cover transition-opacity duration-500" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {!seeMoreNewspaper && (
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          )}

          <div className={`flex justify-center mt-6 transition-all duration-500 ${!seeMoreNewspaper ? "absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20" : ""}`}>
            <button
              onClick={() => setSeeMoreNewspaper(!seeMoreNewspaper)}
              className="px-10 py-3.5 bg-gradient-to-r from-[#1f693a] to-emerald-600 text-white font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500"
            >
              {seeMoreNewspaper ? "Close Album" : "Open Album"}
            </button>
          </div>
        </div>

        {/* Program List Section */}
        <div className="mb-24 relative w-full">
          <h2 className="font-bebas text-[45px] text-center tracking-[1px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
            Earth Associations Programs
          </h2>
          <div
            className={`relative overflow-hidden transition-all duration-[1200ms] ease-in-out w-full ${
              seeMoreProgramList ? "max-h-[8000px]" : "max-h-[400px]"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-2 px-1 md:px-2">
              {programListPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden cursor-pointer hover:shadow-2xl hover:z-10 transition-all duration-300 transform hover:scale-[1.02] relative rounded-sm bg-gray-100"
                  onClick={() => openImage(photo.src, programListPhotos.map((p) => p.src))}
                >
                  <img 
                    src={photo.src} 
                    alt="Program" 
                    className="w-full h-full object-cover transition-opacity duration-500" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {!seeMoreProgramList && (
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          )}

          <div className={`flex justify-center mt-6 transition-all duration-500 ${!seeMoreProgramList ? "absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20" : ""}`}>
            <button
              onClick={() => setSeeMoreProgramList(!seeMoreProgramList)}
              className="px-10 py-3.5 bg-gradient-to-r from-[#1f693a] to-emerald-600 text-white font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500"
            >
              {seeMoreProgramList ? "Close Album" : "Open Album"}
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Gallery;
