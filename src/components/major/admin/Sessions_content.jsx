import { Outlet } from "react-router-dom"

const Sessions_content = () => {
	return (
		<div className="w-[77%] h-full overflow-auto rounded-[10px]">
			<Outlet />
		</div>
	)
}

export default Sessions_content