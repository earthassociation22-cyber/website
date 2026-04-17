import ebookQr from "../../assets/ebookqr.jpeg";

const EbookDownload = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-[1140px] mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-green-900/5 p-8 md:p-12 border border-green-50 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-shadow duration-500">
          
          <div className="md:w-3/5 text-center md:text-left flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-green-50 text-[#1f693a] rounded-full text-sm font-bold tracking-widest uppercase mb-6 w-fit mx-auto md:mx-0 border border-green-100">
              Free Resource
            </div>
            <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase leading-tight">
              Download Our Official E-Book
            </h2>
            <p className="tracking-wide text-gray-700 leading-relaxed font-raleway text-lg mb-8 max-w-lg">
              Empower yourself with actionable knowledge on environmental conservation. Scan the QR code to instantly download and read our comprehensive guide to building a greener, more sustainable world.
            </p>
            <div>
               <p className="text-gray-500 font-medium font-raleway text-sm uppercase tracking-widest">
                  Scan to Download <span className="hidden md:inline">→</span><span className="md:hidden">↓</span>
               </p>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center items-center">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden">
              {/* Decorative gradient blur behind QR */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"/>
              
              <img 
                src={ebookQr} 
                alt="E-Book Download QR Code" 
                className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] object-cover relative z-10 rounded-xl mix-blend-multiply drop-shadow-sm" 
              />
              
              <div className="relative z-10 mt-5 text-center font-bebas text-2xl tracking-widest text-[#1f693a] group-hover:text-emerald-500 transition-colors">
                SCAN ME
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EbookDownload;
