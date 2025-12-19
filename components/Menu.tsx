
import React from 'react';

const menuItems = {
  'Kopi': [
    { name: 'Kopi Hitam', description: 'Kopi robusta klasik dengan aroma kuat.' },
    { name: 'Kopi Susu Gula Aren', description: 'Perpaduan kopi, susu segar, dan manisnya gula aren.' },
    { name: 'Espresso', description: 'Ekstrak kopi murni untuk semangat instan.' },
    { name: 'Americano', description: 'Espresso yang diencerkan dengan air panas.' },
  ],
  'Minuman Tradisional': [
    { name: 'Teh Talua', description: 'Minuman teh khas Sumatera dengan telur dan rempah.' },
    { name: 'Bandrek', description: 'Minuman jahe hangat dengan rempah-rempah pilihan.' },
    { name: 'Sekoteng', description: 'Minuman hangat dengan isian beragam yang menyehatkan.' },
  ],
  'Cemilan': [
    { name: 'Pisang Goreng', description: 'Pisang goreng renyah disajikan dengan topping pilihan.' },
    { name: 'Kentang Goreng', description: 'Kentang goreng gurih dengan saus spesial.' },
    { name: 'Roti Bakar', description: 'Roti bakar dengan pilihan selai coklat atau keju.' },
  ],
};

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Menu Kami</h2>
          <p className="text-lg text-stone-600 mt-2">Cita Rasa Khas dari Biji Kopi Pilihan dan Resep Tradisional</p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="bg-stone-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6 border-b-2 border-emerald-200 pb-3">{category}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold text-stone-800 text-lg">{item.name}</p>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
