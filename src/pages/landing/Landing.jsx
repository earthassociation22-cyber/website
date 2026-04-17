import Desc from "./Desc"
// import FeaturedPosters from "./FeaturedPosters"
import Initiatives from "./Initiatives"
import Goals from "./Goals"
import Impact from "./Impact"
import Programmes from "./Programmes"
import Involved from "./Involved"
import Hero from "./Hero"
import IntroVideo from "./IntroVideo"
import Blogs from "./Blogs"
// import UpcomingEvents from "./UpcomingEvents"

const Landing = () => {
	return (
		<main className="mt-[65px]">
			<Hero />
			<Desc />
			<IntroVideo />
			{/* <FeaturedPosters /> */}
			{/* <UpcomingEvents /> */}
			<Programmes />
			<Initiatives />
			<Goals />
			<Impact />
			<Involved />
			<Blogs />
		</main>
	)
}
export default Landing
