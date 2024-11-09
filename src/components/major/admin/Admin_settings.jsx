import { useEffect } from "react"
import { setHeading } from "../../../store/slices/otherSlice"
import { useDispatch } from "react-redux"

const Admin_settings = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setHeading("Settings"));
	}, [])

	return (
		<div></div>
	)
}

export default Admin_settings