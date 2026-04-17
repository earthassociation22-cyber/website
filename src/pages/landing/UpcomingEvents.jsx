import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { eventImages } from "../../assets/events/eventImages";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Wildlife Week Celebration",
      image: eventImages.wildlifeWeekImage,
      date: "October 1st – 7th, 2024",
      path: "/events/wildlife-week-2024",
    },
    // {
    //   id: 2,
    //   title: "Techno Fest",
    //   date: "Date to be Announced",
    //   path: "/events/techno-fest",
    // },
    // {
    //   id: 3,
    //   title: "Earth Hour",
    //   date: "March 2025",
    //   path: "/events/earth-hour",
    // },
    // {
    //   id: 4,
    //   title: "Climate Action Summit",
    //   date: "2025",
    //   path: "/events/climate-action-summit",
    // },
  ];

  return (
    <section className="bg-gray-50/50 py-16">
      <div className="max-w-[1140px] mx-auto p-4 text-center text-black font-raleway flex flex-col justify-center">
        <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
          Upcoming Events
        </h2>
        <Carousel
          className="p-2.5 pb-8"
          containerClass="max-w-[1140px] w-full lg:w-[90%] self-center"
          swipeable
          autoPlay
          autoPlaySpeed={3500}
          responsive={responsive}
          keyBoardControl
          minimumTouchDrag={80}
          rewind
          rewindWithAnimation
          pauseOnHover
          showDots={false}
          focusOnSelect={true}
          draggable={true}
          removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
        >
          {events.map((event) => (
            <div className="px-4 h-full" key={event.id}>
              <UpcomingEventsCard
                title={event.title}
                date={event.date}
                path={event.path}
                image={event.image}
              />
             </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default UpcomingEvents;

const UpcomingEventsCard = ({ title, date, path, image }) => {
  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 group">
      <Link
        to={path}
        className="flex flex-col md:flex-row md:items-center w-full gap-8"
      >
        {/* Image */}
        <div className="md:w-[45%] w-full rounded-2xl overflow-hidden shadow-md flex-shrink-0 relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-[55%] w-full text-center md:text-left flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold tracking-widest uppercase mb-4 w-fit mx-auto md:mx-0">
            Next Event
          </div>
          <h3 className="text-[32px] md:text-[40px] font-bold uppercase tracking-wide mb-3 font-bebas text-gray-800 drop-shadow-sm group-hover:text-[#1f693a] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[18px] tracking-wider text-gray-600 font-medium mb-8">
             <span className="mr-2 opacity-70">🗓</span>{date}
          </p>
          <div>
            <span className="inline-flex items-center gap-2 text-[#1f693a] font-bold tracking-wide group-hover:text-emerald-500 transition-colors bg-white border border-green-100 px-6 py-2.5 rounded-full shadow-sm group-hover:shadow-md">
              KNOW MORE <span className="text-xl">&rsaquo;</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};