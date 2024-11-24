import { Outlet } from "react-router-dom"


const Participant_content = () => {
	return (
		<div className="w-[100%] h-auto mt-[60px]">
			<Outlet />
		</div>
	)
}

export default Participant_content