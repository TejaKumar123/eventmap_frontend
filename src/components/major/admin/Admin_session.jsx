import { useEffect } from "react"
import { setHeading } from "../../../store/slices/otherSlice"
import { useDispatch } from "react-redux"
import Sessions_sidebar from "./Sessions_sidebar"
import Sessions_content from "./Sessions_content"

const Admin_session = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeading("Sessions"))
	}, [])

	return (
		<>
			<div className="w-full h-[87%] rounded-[10px] flex flex-row items-center justify-between overflow-y-auto">
				<Sessions_sidebar />
				<Sessions_content />
			</div>
		</>
	)
}

export default Admin_session