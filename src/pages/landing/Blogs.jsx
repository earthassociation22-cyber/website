import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogsData } from "../blog/Blogs";
import { BlogCard } from "../blog/Blogs";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Blogs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1140px] mx-auto p-4 text-[18px] text-center font-raleway">
        <h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
          LATEST BLOGS
        </h2>
        <Carousel
          className="p-2.5 pb-8"
          swipeable
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "desktop"]}
        >
          {blogsData.map((t, i) => {
            return (
              <div className="px-3 h-full" key={i}>
                <BlogCard
                  image={t.image}
                  title={t.title}
                  preview={t.preview}
                  id={t.id}
                />
              </div>
            );
          })}
        </Carousel>
        <div className="mt-8">
          <Link 
            to={"/blog"}
            className="inline-block text-[#1f693a] font-bold tracking-wide hover:text-emerald-600 hover:scale-105 transition-all duration-300 bg-green-50/50 py-3 px-8 rounded-full shadow-sm hover:shadow-md border border-green-100"
          >
            EXPLORE ALL BLOGS &gt;
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
