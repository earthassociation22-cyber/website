import Carousel from "react-multi-carousel"
import b from "../../assets/b.jpg"
import c from "../../assets/c.jpg"
import d from "../../assets/d.jpg"
import e from "../../assets/e.jpg"
import "react-multi-carousel/lib/styles.css"

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
}

const Impact = () => {
	return (
		<section className="py-16 bg-gradient-to-b from-white to-green-50/20">
			<div className="max-w-[1140px] mx-auto pt-[20px] pb-[40px] px-2.5 text-center text-black font-bebas">
				<h2 className="text-[45px] tracking-[1px] font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
					Impact and Outcomes
				</h2>

				<Carousel
					className="p-2.5 pb-6"
					// infinite={true}
					swipeable
					responsive={responsive}
					removeArrowOnDeviceType={["tablet", "desktop"]}
				>
					<div className="flex flex-col items-center group px-3">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
							<img
								src={b}
								alt="Increased Awareness"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
							{/* Premium dark gradient overlay instead of flat brightness reduction */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
							
							<span className="text-left uppercase leading-none absolute bottom-8 left-6 font-bebas font-bold tracking-wider text-[35px] text-white z-10 group-hover:translate-y-[-5px] transition-transform duration-300 drop-shadow-md">
								Increased <br />
								Awareness
							</span>
						</div>
						<div className="mt-6 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-4 tracking-wide text-gray-700 leading-relaxed">
								Raised awareness of environmental issues among
								the youth and the general public.
							</p>
							<a className="text-[#1f693a] font-bold hover:text-green-500 transition-colors inline-flex items-center gap-1" href="">
								KNOW MORE <span className="text-lg">&rsaquo;</span>
							</a>
						</div>
					</div>

					<div className="flex flex-col items-center group px-3">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
							<img
								src={c}
								alt="Behavioral Changes"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
							
							<span className="uppercase text-left leading-none absolute bottom-8 left-6 font-bebas font-bold tracking-wider text-[35px] text-white z-10 group-hover:translate-y-[-5px] transition-transform duration-300 drop-shadow-md">
								Behavioral <br />
								Changes
							</span>
						</div>
						<div className="mt-6 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-4 tracking-wide text-gray-700 leading-relaxed">
								Fostered positive changes in behavior and the
								adoption of eco-friendly practices.
							</p>
							<a className="text-[#1f693a] font-bold hover:text-green-500 transition-colors inline-flex items-center gap-1" href="">
								KNOW MORE <span className="text-lg">&rsaquo;</span>
							</a>
						</div>
					</div>

					<div className="flex flex-col items-center group px-3">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
							<img
								src={d}
								alt="Joint Effort"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
							
							<span className="uppercase text-left leading-none absolute bottom-8 left-6 font-bebas font-bold tracking-wider text-[35px] text-white z-10 group-hover:translate-y-[-5px] transition-transform duration-300 drop-shadow-md">
								Joint <br /> Effort
							</span>
						</div>
						<div className="mt-6 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-4 tracking-wide text-gray-700 leading-relaxed">
								Partnered with governmental bodies, such as the
								Forest Department, to further conservation
								efforts.
							</p>
							<a className="text-[#1f693a] font-bold hover:text-green-500 transition-colors inline-flex items-center gap-1" href="">
								KNOW MORE <span className="text-lg">&rsaquo;</span>
							</a>
						</div>
					</div>

					<div className="flex flex-col items-center group px-3">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
							<img
								src={e}
								alt="Global Network"
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
							
							<span className="uppercase text-left leading-none absolute bottom-8 left-6 font-bebas font-bold tracking-wider text-[35px] text-white z-10 group-hover:translate-y-[-5px] transition-transform duration-300 drop-shadow-md">
								Global
								<br />
								Network
							</span>
						</div>
						<div className="mt-6 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-4 tracking-wide text-gray-700 leading-relaxed">
								Built a global network of environmental
								enthusiasts through the International Cultural
								Exchange Programme.
							</p>
							<a className="text-[#1f693a] font-bold hover:text-green-500 transition-colors inline-flex items-center gap-1" href="">
								KNOW MORE <span className="text-lg">&rsaquo;</span>
							</a>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}
export default Impact
