import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const Admin_content = () => {

	const other = useSelector((state) => state.other);

	return (
		<>
			<div className="w-full h-dvh overflow-y-auto pt-[70px] px-[10px] pb-[10px]">
				<p className="text-[150%] font-bold m-[10px] mb-[20px]">{other.heading}</p>
				<Outlet />
			</div>
		</>
	)
}

export default Admin_content