import React from 'react';

export default function ServiceCard({ title, description, Icon, image,alt }) {
  const ServiceIcon = Icon ;
 
  const defaultImage = "https://cdn.pixabay.com/photo/2017/09/25/20/07/lawnmower-2786525_640.jpg"
 
  return (
    <div className="max-w-sm mx-auto group bg-white border border-green-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image ? image : defaultImage} 
          loading='lazy'
          alt={alt || "Gardener with pruning shears in a lush garden"}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* 10% OFF Tag */}
  {/* <div className="absolute top-3 right-3 tracking-widest bg-grunraum-primary/80 animate-pulse backdrop-blur-2xl text-white text-xs font-semibold  px-3 py-1 rounded-full shadow-sm border border-white/70uppercase ">
    10% Rabatt
  </div> */}
        
        {/* Circular Logo Overlay */}
        <div className="absolute -bottom-6 right-6">
          <div className="w-14 h-14 bg-grunraum-primary/40 rounded-full shadow-md flex items-center justify-center backdrop-blur-lg ">
            <div className="w-11 h-11 bg-white/95 rounded-full flex items-center justify-center">
              <ServiceIcon className="w-9 h-9 text-grunraum-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 pt-10 flex-1 flex flex-col">
        {/* Fixed height title container */}
        <div className="min-h-[64px]  flex items-center mb-1">
          <h2 className="text-lg sm:text-xl tracking-wider  font-bold text-gray-900 line-clamp-2">
            {title} 
          </h2>
        </div>
        
        <p className="text-gray-600 tracking-wider text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}