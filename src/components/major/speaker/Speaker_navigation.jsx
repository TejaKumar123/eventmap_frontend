import { useState } from "react"
import { Settings, Visibility } from "@mui/icons-material";
import Speaker_sidebar_button from "../../basic/speaker/Speaker_sidebar_button";
import { useNavigate } from "react-router-dom";


const Speaker_navigation = () => {

	const [key, setKey] = useState(0);
	const navigate = useNavigate();

	return (
		<div className="w-full h-[50px] flex flex-row items-center justify-center sticky top-[60px] mt-[70px]  overflow-x-auto text-white px-[20px] gap-[10px] bg-[#1b1342] z-[5]">
			<Speaker_sidebar_button name={"Session"} keyStatus={key} button_key={0} icon={<Visibility />}
				onClick={() => {
					setKey(0);
					navigate("sessions", { replace: true });
				}} />
			<Speaker_sidebar_button name={"Settings"} keyStatus={key} button_key={1} icon={<Settings />}
				onClick={() => {
					setKey(1)
					navigate("settings", { replace: true });
				}} />
		</div>
	)
}

export default Speaker_navigation