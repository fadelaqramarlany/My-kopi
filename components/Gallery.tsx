
import React from 'react';

const images = [
  { src: 'https://picsum.photos/seed/coffeeShop1/500/500', alt: 'Suasana outdoor kedai' },
  { src: 'https://picsum.photos/seed/coffeeShop2/500/500', alt: 'Interior kedai yang nyaman' },
  { src: 'https://picsum.photos/seed/coffeeShop3/500/500', alt: 'Detail secangkir kopi' },
  { src: 'https://picsum.photos/seed/coffeeShop4/500/500', alt: 'Pemandangan alam sekitar' },
  { src: 'https://picsum.photos/seed/coffeeShop5/500/500', alt: 'Pengunjung sedang bersantai' },
  { src: 'https://picsum.photos/seed/coffeeShop6/500/500', alt: 'Sajian makanan ringan' },
];

const Gallery: React.FC = () => {
  return (
    <section id="galeri" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Galeri</h2>
          <p className="text-lg text-stone-600 mt-2">Momen dan Suasana di Kedai Kopi Marhamuba</p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
