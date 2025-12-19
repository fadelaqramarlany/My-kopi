
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Tentang Kami</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/coffeeStory/600/400" 
              alt="Interior Kedai Kopi Marhamuba" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 text-lg text-stone-600 space-y-4">
            <p>
              Kedai Kopi Marhamuba lahir dari kecintaan kami terhadap kopi berkualitas dan keindahan alam Tapanuli Tengah. Kami percaya bahwa secangkir kopi nikmat akan terasa lebih istimewa saat dinikmati di tengah suasana yang tenang dan asri.
            </p>
            <p>
              Visi kami adalah menciptakan sebuah oase bagi para penikmat kopi, tempat di mana mereka bisa melepaskan penat, bersantai, dan terhubung kembali dengan alam. Setiap biji kopi yang kami sajikan dipilih dengan teliti untuk memastikan cita rasa terbaik bagi Anda.
            </p>
            <p>
              Datang dan rasakan sendiri pengalaman ngopi santai dengan pemandangan alam yang memukau hanya di Kedai Kopi Marhamuba.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
