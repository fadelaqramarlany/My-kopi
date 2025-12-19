
import React from 'react';
import ClockIcon from './icons/ClockIcon';
import MapPinIcon from './icons/MapPinIcon';

const Hero: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=298F%2BFHX%2C+Sitiris-Tiris%2C+Kec.+Andam+Dewi%2C+Kabupaten+Tapanuli+Tengah%2C+Sumatera+Utara+22564";
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://picsum.photos/seed/coffeeNature/1920/1080" alt="Suasana Kedai Kopi Marhamuba" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          Kedai Kopi Marhamuba
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          Ngopi Santai dengan Suasana Alam
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            <MapPinIcon className="w-5 h-5" />
            Lihat Rute
          </a>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white py-3 px-6 rounded-lg">
            <ClockIcon className="w-5 h-5 text-red-400" />
            <div>
              <p className="font-semibold text-red-400">Tutup</p>
              <p className="text-sm">Buka Sabtu pukul 07.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
