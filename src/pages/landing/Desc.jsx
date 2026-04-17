const Desc = () => {
	return (
		<section className="relative px-4 py-12 md:py-16">
			{/* Aesthetic Background Accent */}
			<div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white -z-10" />
			
			<div className="max-w-[1140px] mx-auto p-8 md:p-12 text-[18px] text-center font-raleway bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-green-900/5 hover:shadow-2xl transition-all duration-700 border border-green-50 group">
				<div className="relative">
					{/* Decorative Quote Icon (Using CSS borders for minimalist design) */}
					<div className="absolute -top-4 -left-4 text-6xl text-green-200 opacity-50 font-serif select-none pointer-events-none group-hover:text-green-300 transition-colors">"</div>
					
					<p className="leading-relaxed tracking-wider text-gray-700 font-medium text-lg md:text-xl relative z-10 px-4 md:px-8">
						The Earth Association is a dedicated organization
						focused on promoting environmental awareness and
						conservation efforts in Jaipur, India. Our mission is to
						inspire and mobilize the local community to take action
						for a sustainable and greener future. Through various
						initiatives, we educate and engage individuals of all
						ages in environmental issues, reflecting our unwavering
						commitment to a better planet.
					</p>
					
					<div className="absolute -bottom-10 -right-4 text-6xl text-green-200 opacity-50 font-serif select-none pointer-events-none rotate-180 group-hover:text-green-300 transition-colors">"</div>
				</div>
			</div>
		</section>
	)
}
export default Desc
