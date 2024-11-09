import Homehome from "../../basic/home/homehome"
import Homeabout from "../../basic/home/homeabout"
import Homeservices from "../../basic/home/homeservices"

const home_content = () => {
	return (
		<div className="w-full min-h-[2000px] text-[white] pt-[100px]">
			<Homehome />
			<Homeabout />
			<Homeservices />
		</div>
	)
}

export default home_content