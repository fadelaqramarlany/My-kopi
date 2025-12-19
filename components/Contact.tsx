
import React from 'react';
import MapPinIcon from './icons/MapPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import ClockIcon from './icons/ClockIcon';

const Contact: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.199343058869!2d98.37351667500355!3d1.7285641982756627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e1c94488b0a99%3A0x7de65aa1a04b125d!2sKedai%20kopi%20Marhamuba!5e0!3m2!1sen!2sid!4v1700000000000";

  return (
    <section id="lokasi" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Lokasi & Kontak</h2>
          <p className="text-lg text-stone-600 mt-2">Temukan kami dan nikmati secangkir kopi terbaik.</p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-full">
                  <MapPinIcon className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800">Alamat</h3>
                  <p className="text-stone-600">
                    298F+FHX, Sitiris-Tiris, Kec. Andam Dewi, Kabupaten Tapanuli Tengah, Sumatera Utara 22564
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800">Telepon</h3>
                  <a href="tel:081360583635" className="text-stone-600 hover:text-emerald-600 transition-colors">
                    0813-6058-3635
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-full">
                  <ClockIcon className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800">Jam Buka</h3>
                  <p className="text-stone-600">
                    <span className="font-semibold text-red-600">Tutup saat ini.</span> Buka kembali pada hari Sabtu, pukul 07.00.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-80 md:h-96">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
