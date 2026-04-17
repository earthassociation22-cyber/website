import { useState } from "react"

const InitiativeCard = ({ title, points, color, isExpanded, onClick }) => {
	return (
		<div
			className={`rounded-2xl overflow-hidden flex-1 min-w-[200px] sm:min-w-[350px] tab:min-w-[500px] lg:min-w-[450px] shadow-sm hover:shadow-lg transition-all duration-300 border border-t-white border-l-white border-b-gray-200 border-r-gray-200 cursor-pointer group`}
			onClick={onClick}
		>
			<div className={`h-full flex flex-col ${color}`}>
				<div
					className={`text-gray-800 p-6 font-bold tracking-wide text-start text-[20px] tab:text-[23px] flex items-center group-hover:text-[#1f693a] transition-colors duration-300`}
				>
					<span
						className={`mr-4 transform transition-all duration-500 text-green-600 bg-white/50 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-sm ${
							isExpanded ? "rotate-90 bg-white" : "group-hover:scale-110"
						}`}
					>
						▶
					</span>
					{title}
				</div>
				<div
					className={`font-raleway text-[16px] text-gray-700 text-start leading-relaxed tracking-wider overflow-hidden transition-all duration-500 ease-in-out ${
						isExpanded ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"
					}`}
				>
					<ul className="list-disc pl-16 pr-6 space-y-3 marker:text-green-500">
						{points.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

const Initiatives = () => {
	const [expandedIndex, setExpandedIndex] = useState(null)

	const initiatives = [
		{
			title: "School and College Engagement",
			points: [
				"Poster Making Competitions",
				"Face Painting Sessions",
				"Debate Competitions",
				"Environmental Workshops",
				"Green Campus Projects",
			],
			color: "bg-gradient-to-br from-yellow-50 to-yellow-100/50",
		},
		{
			title: "Environment Fest",
			points: [
				"Workshops on Sustainability",
				"Guest Lectures by Experts",
				"Tree Planting Drives",
				"Art Exhibitions",
				"Film Screenings",
			],
			color: "bg-gradient-to-br from-purple-50 to-purple-100/50",
		},
		{
			title: "Wildlife Week Celebration",
			points: [
				"Nature Walks",
				"Bird-Watching Expeditions",
				"Informative Talks",
				"Photography Contests",
				"Wildlife Workshops",
			],
			color: "bg-gradient-to-br from-teal-50 to-teal-100/50",
		},
		{
			title: "E20 Project",
			points: [
				"Interactive Sessions",
				"Field Trips",
				"Community Projects",
				"Student Ambassadors",
				"Resource Materials",
			],
			color: "bg-gradient-to-br from-orange-50 to-orange-100/50",
		},
		{
			title: "Awareness Programs",
			points: [
				"Environmental Campaigns",
				"Wildlife Campaigns",
				"Public Service Announcements",
				"Community Clean-Up Drives",
				"Recycling Programs",
			],
			color: "bg-gradient-to-br from-green-50 to-green-100/50",
		},
		{
			title: "International Cultural Exchange Programme",
			points: [
				"Cultural Programs",
				"Workshops",
				"Discussions",
				"Exchange Visits",
				"Joint Projects",
			],
			color: "bg-gradient-to-br from-red-50 to-red-100/50",
		},
	]

	const handleCardClick = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index)
	}

	return (
		<section className="bg-gray-50/30">
			<div className="max-w-[1140px] mx-auto pt-[80px] pb-[60px] px-4 text-center text-black font-bebas">
				<h2 className="text-[45px] tracking-[1px] font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1f693a] to-emerald-500 drop-shadow-sm uppercase">
					OUR INITIATIVES
				</h2>
				<div className="flex flex-wrap gap-6 p-2 justify-center">
					{initiatives.map((programme, index) => (
						<InitiativeCard
							key={index}
							title={programme.title}
							points={programme.points}
							color={programme.color}
							isExpanded={expandedIndex === index}
							onClick={() => handleCardClick(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Initiatives
