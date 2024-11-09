import Speaker_navigation from "../components/major/speaker/Speaker_navigation"
import Speaker_navbar from "../components/major/speaker/Speaker_navbar"
import Speaker_content from "../components/major/speaker/Speaker_content"

const speaker = () => {
	return (
		<div className="w-[100%] h-auto">
			<Speaker_navbar />
			<div className="w-[100%] h-auto flex flex-col items-center justify-start">
				<Speaker_navigation />
				<Speaker_content />
			</div>
		</div>
	)
}

export default speaker