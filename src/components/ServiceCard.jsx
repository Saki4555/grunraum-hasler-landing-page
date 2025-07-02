import React from 'react';

export default function ServiceCard({ title, description, Icon }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Gardener with pruning shears in a lush garden"
          className="w-full h-48 sm:h-56 object-cover"
        />
        
        {/* Circular Logo Overlay */}
        <div className="absolute -bottom-6 left-6">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-100">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-green-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 pt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed ">
            {description}
        </p>
        

      </div>
    </div>
  );
}