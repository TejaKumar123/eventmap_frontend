import Home_navbar from "./home_navbar"
import Home_content from "./home_content"
import Home_footer from "./home_footer"

const homepage = () => {

	return (
		<>
			<Home_navbar />
			<Home_content />
			<Home_footer />
			<hr className="bg-[#1B182D] border-none h-[2px]" />
			<div className="w-[80%] h-[100px] flex flex-row items-center justify-between text-[white] m-auto opacity-[0.5] hover:opacity-[1]">
				<p>Privacy Policy - Terms of Conditions</p>
				<p>EventMap App,LLC. All rights reserved</p>
			</div>
		</>
	)

}

export default homepage