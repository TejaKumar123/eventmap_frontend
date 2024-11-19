import { Outlet } from "react-router-dom"

const Speaker_content = () => {
	return (
		<div className="w-full h-auto text-white">
			<Outlet />
		</div>
	)
}

export default Speaker_content