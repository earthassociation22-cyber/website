import { images } from "../../assets/index"
import donate from "../../assets/donate.png"
import spread from "../../assets/spread.png"
import participate from "../../assets/participate.png"
import volunteering from "../../assets/volunteering.png"

const Involved = () => {
	return (
		<section className="bg-gray-50/50 py-16">
			<div className="max-w-[1140px] mx-auto pt-[20px] pb-[40px] px-4 text-center text-black font-bebas">
				<h2 className="text-[45px] uppercase tracking-[1px] font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm">
					Get involved
				</h2>
				{/* Wrapped in a grid with gap instead of 0 gap for floating cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
					{involvedContent.map((i, index) => {
						return (
							<InvolvedCard
								key={index}
								content={i.content}
								title={i.title}
								icon={i.icon}
								color={i.color}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
export default Involved

// eslint-disable-next-line react/prop-types
const InvolvedCard = ({ icon, title, content, color }) => {
	return (
		<div className={`flex flex-col md:flex-row ${color} items-center md:items-start p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-white/50 backdrop-blur-sm`}>
			<div className="w-[120px] h-[120px] flex justify-center items-center mb-6 md:mb-0 md:mr-8 bg-white/40 rounded-full p-4 shadow-sm group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
				<img
					src={icon}
					alt={title}
					className="w-full h-full object-contain drop-shadow-md"
				/>
			</div>
			<div className="text-center md:text-left flex flex-col justify-center">
				<div className="uppercase font-bold tracking-wide text-[28px] tab:text-[34px] mb-3 text-gray-800 drop-shadow-sm">
					{title}
				</div>
				<div className="font-raleway text-[16px] text-gray-700 leading-relaxed tracking-wide">
					{content}
				</div>
			</div>
		</div>
	)
}

const involvedContent = [
	{
		icon: participate,
		title: "Participate in our events",
		content:
			"Attend our workshops, festivals, and other events to learn more about environmental conservation and how you can make a difference.",
		color: "bg-gradient-to-br from-yellow-50 via-yellow-100/50 to-yellow-200/40",
	},
	{
		icon: volunteering,
		title: "Volunteer",
		content:
			"Offer your time and skills to help with our initiatives and projects.",
		color: "bg-gradient-to-br from-purple-50 via-purple-100/50 to-purple-200/40",
	},
	{
		icon: donate,
		title: "Donate",
		content:
			"Support our cause by making a donation. Your contribution will help us continue our work in promoting environmental awareness and conservation.",
		color: "bg-gradient-to-br from-red-50 via-red-100/50 to-red-200/40",
	},
	{
		icon: spread,
		title: "Spread the Word",
		content:
			"Share our mission and activities with your friends and family. Help us raise awareness about the importance of environmental conservation.",
		color: "bg-gradient-to-br from-teal-50 via-teal-100/50 to-teal-200/40",
	},
]
