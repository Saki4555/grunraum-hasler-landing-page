import React from 'react';

export default function ServiceCard({ title, description, Icon }) {
  return (
    <div className="max-w-sm mx-auto group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative">
        <img 
          src="https://cdn.pixabay.com/photo/2017/09/25/20/07/lawnmower-2786525_640.jpg" 
          alt="Gardener with pruning shears in a lush garden"
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* 10% OFF Tag */}
  <div className="absolute top-3 right-3 bg-white/70 animate-pulse backdrop-blur-2xl text-green-500 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-grunraum-primary/70 uppercase tracking-wide">
    10% Off
  </div>
        
        {/* Circular Logo Overlay */}
        <div className="absolute -bottom-6 right-6">
          <div className="w-14 h-14 bg-grunraum-primary/40 rounded-full shadow-md flex items-center justify-center backdrop-blur-lg ">
            <div className="w-11 h-11 bg-white/95 rounded-full flex items-center justify-center">
              <Icon className="w-9 h-9 text-grunraum-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 pt-10 flex-1 flex flex-col">
        {/* Fixed height title container */}
        <div className="min-h-[64px]  flex items-center mb-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">
            {title} 
          </h2>
        </div>
        
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}