import { goals } from "../../assets/index"

const Goals = () => {
	return (
		<section className="hidden tab:block py-16 bg-white">
			<div className="max-w-[1140px] mx-auto pt-[20px] pb-[40px] px-4 text-center text-black font-bebas">
				<div className="text-[30px] uppercase tracking-[1px] font-semibold mb-12">
					<h3 className="uppercase text-gray-500 tracking-widest text-2xl mb-2">Towards achieving</h3>
					<h2 className="text-[45px] uppercase tracking-wide font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 drop-shadow-sm">
						Sustainable Development Goals
					</h2>
				</div>
				<div className="grid grid-cols-6 gap-6 p-5">
					{Object.entries(goals).map((g, index) => (
						<div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-white group border border-gray-100">
							<img src={g[1]} alt={`SDG Goal ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Goals
