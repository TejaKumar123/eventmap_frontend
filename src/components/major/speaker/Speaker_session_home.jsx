import { Add, Visibility } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"


const Speaker_session_home = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full h-atuo flex flex-row items-center justify-center gap-[50px] py-[20px]">
			<div className="h-auto w-auto p-[50px] flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-[#1b1342] border-[2px] border-[rgba(255,255,255,0.5)] transition-[0.2s]"
				title="Add the session"
				onClick={() => {
					navigate("add")
				}}
			>
				<Add style={{ fontSize: "500%" }} />
				<p className="font-bold">Add the session</p>
			</div>
			<div className="h-auto w-auto p-[50px] flex flex-col items-center justify-center rounded-lg cursor-pointer  border-[2px] border-[rgba(255,255,255,0.5)] hover:bg-[#1b1342]  transition-[0.2s]"
				title="View the session"
				onClick={() => {
					navigate("view")
				}}
			>
				<Visibility style={{ fontSize: "500%" }} />
				<p className="font-bold">View the sessions</p>
			</div>

		</div>
	)
}

export default Speaker_session_home