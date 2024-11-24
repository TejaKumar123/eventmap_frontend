import Participant_content from "../components/major/participant/Participant_content"
import Participant_navbar from "../components/major/participant/Participant_navbar"

const participant = () => {
	return (
		<div className="w-[100%] h-auto text-[white]">
			<Participant_navbar />
			<Participant_content />
		</div>
	)
}

export default participant