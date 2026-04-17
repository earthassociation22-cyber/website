// import hero from "../../assets/hero.jpeg"
import poster1 from "../../assets/poster1.jpeg";

const Hero = () => {
	return (
		<section className="relative w-full h-[500px] mb-8 md:h-[580px] p-8 flex items-end overflow-hidden">
			{/* Blurred background to fill empty space elegantly */}
			<div className="absolute inset-0 z-0 bg-[#111]">
				<img
					src={poster1}
					alt="Blurred Background"
					className="w-full h-full object-cover blur-xl scale-110 opacity-50"
				/>
			</div>

			<div className="absolute z-10 inset-0 bg-black/40"></div>

			{/* The perfectly fitted poster */}
			<img
				src={poster1}
				alt="Hero Background"
				className="absolute inset-0 z-10 w-full h-full object-contain object-center"
			/>
			<div className="max-w-[1140px] mx-auto w-full flex justify-start pointer-events-none">
				<p className="tab:text-[60px] relative z-20 text-[40px] font-bebas tracking-wider font-bold text-white max-w-[20ch] drop-shadow-lg">
					Empowering Communities for a Greener Tomorrow
				</p>
			</div>
		</section>
	)
}

export default Hero
