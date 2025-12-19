
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">Kedai Kopi Marhamuba</h3>
          <p className="mb-4">298F+FHX, Sitiris-Tiris, Kec. Andam Dewi, Kabupaten Tapanuli Tengah, Sumatera Utara 22564</p>
          <p className="mb-4">
            <a href="tel:081360583635" className="hover:text-emerald-400 transition-colors">
              Telp: 0813-6058-3635
            </a>
          </p>
          <div className="border-t border-stone-700 mt-8 pt-6">
            <p className="text-sm text-stone-400">
              &copy; {new Date().getFullYear()} Kedai Kopi Marhamuba. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
