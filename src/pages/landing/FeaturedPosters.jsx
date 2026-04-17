import poster1 from "../../assets/poster1.jpeg";
import poster2 from "../../assets/poster2.jpeg";

const FeaturedPosters = () => {
  return (
    <section className="max-w-[1140px] mx-auto p-4 mt-8 mb-12 w-full">
      <h2 className="text-center font-bebas text-[40px] tracking-[1px] font-bold text-[#1f693a] mb-6 uppercase">
        Internship Programs
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch">
        {/* Main Poster (Poster 2) - takes up more width on large screens */}
        <div className="w-full lg:w-2/3 flex justify-center items-center rounded-xl shadow-2xl bg-white p-2 hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
          <img
            src={poster2}
            alt="Main Featured Poster"
            className="w-full h-auto object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>


      </div>
    </section>
  );
};

export default FeaturedPosters;
