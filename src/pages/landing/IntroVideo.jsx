import introVideo from "../../assets/intro.mp4"

const IntroVideo = () => {
	return (
		<section className="max-w-[1140px] mx-auto px-4 mb-20 mt-12">
			<div className="text-center mb-10">
				<h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">See Our Impact</h2>
				<div className="w-24 h-1.5 bg-gradient-to-r from-[#1f693a] to-emerald-400 mx-auto rounded-full shadow-sm"></div>
			</div>
			<div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 bg-black/5 border-[4px] border-white/50 backdrop-blur-sm group">
				<video 
					className="w-full h-auto max-h-[70vh] object-cover bg-black opacity-90 group-hover:opacity-100 transition-opacity duration-500"
					controls 
					autoPlay 
					muted 
					playsInline
				>
					<source src={introVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</section>
	)
}

export default IntroVideo
