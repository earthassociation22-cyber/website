import introVideo from "../../assets/intro.mp4"

const IntroVideo = () => {
	return (
		<section className="max-w-[1140px] mx-auto px-4 mb-12 mt-10">
			<div className="text-center mb-8">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-wide">See Our Impact</h2>
				<div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
			</div>
			<div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black/5 border border-gray-200">
				<video 
					className="w-full h-auto max-h-[70vh] object-contain bg-black"
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
