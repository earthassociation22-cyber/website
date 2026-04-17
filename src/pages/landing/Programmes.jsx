import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import a from "../../assets/a.jpg"
import g from "../../assets/g.jpg"
import f from "../../assets/f.jpg"

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
}

const Programmes = () => {
	return (
		<section className="py-16 relative bg-gradient-to-b from-white via-green-50/20 to-white">
			<div className="max-w-[1140px] mx-auto p-4 text-[18px] text-center text-black font-raleway">
				<h2 className="font-bebas text-[45px] tracking-[1px] font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-green-500 drop-shadow-sm uppercase">
					OUR PROGRAMMES
				</h2>
				<Carousel
					className="p-2.5 pb-8"
					// infinite={true}
					swipeable
					responsive={responsive}
					removeArrowOnDeviceType={["tablet", "desktop"]}
				>
					{programmeData.map((t, i) => {
						return (
							<ProgrammeCard
								image={t.image}
								key={i}
								title={t.title}
								description={t.description}
							/>
						)
					})}
				</Carousel>
				{/* <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
				<div className="mt-8">
					<a className="inline-block text-[#1f693a] font-bold tracking-wide hover:text-green-500 hover:scale-105 transition-all duration-300 bg-green-50 py-3 px-8 rounded-full shadow-sm hover:shadow-md" href="">
						KNOW MORE &gt;
					</a>
				</div>
			</div>
		</section>
	)
}
export default Programmes

const ProgrammeCard = ({ image, title, description }) => {
	return (
		<div className="text-start bg-white mx-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col h-full min-h-[480px]">
			<div className="overflow-hidden relative">
				<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
				<img
					src={image || ""}
					alt={title}
					className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700"
				/>
			</div>
			<div className="px-6 py-6 pb-8 flex flex-col gap-3 flex-grow bg-gradient-to-b from-transparent to-green-50/30">
				<div className="text-[20px] font-raleway font-bold tracking-wide text-gray-800 group-hover:text-[#1f693a] transition-colors duration-300">
					{title}
				</div>
				<div className="text-[15px] font-raleway text-gray-600 leading-relaxed">
					{description}
				</div>
			</div>
		</div>
	)
}

const programmeData = [
	{
		image: a,
		title: "Environmental Education Program",
		description:
			"Our Environmental Education Program aims to integrate environmental studies into school curriculums. We work closely with educational institutions to develop and implement lesson plans that cover key environmental topics such as climate change, biodiversity, and sustainable practices.",
	},
	{
		image: g,
		title: "Community Outreach Program",
		description:
			"Through our Community Outreach Program, we aim to raise awareness and foster community involvement in environmental conservation. We conduct neighborhood clean-up drives, tree planting events, and recycling workshops to engage local residents in hands-on conservation activities.",
	},
	{
		image: f,
		title: "Conservation Research Program",
		description:
			"The Conservation Research Program focuses on conducting scientific research to support conservation efforts. We collaborate with local universities and research institutions to study local ecosystems, wildlife populations, and the impact of human activities on the environment.",
	},
]
