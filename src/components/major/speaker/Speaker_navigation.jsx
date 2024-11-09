import { useState } from "react"
import { Visibility } from "@mui/icons-material";
import Speaker_sidebar_button from "../../basic/speaker/Speaker_sidebar_button";


const Speaker_navigation = () => {

	const [key, setKey] = useState(0);

	return (
		<div className="w-full h-[50px] flex flex-row items-center justify-center sticky top-[60px] mt-[70px]  overflow-x-auto text-white px-[15px] gap-[10px] bg-[#1b1342]">
			<Speaker_sidebar_button name={"view"} keyStatus={key} button_key={0} icon={<Visibility />}
				onClick={() => {
					setKey(0)
				}} />
			<Speaker_sidebar_button name={"view"} keyStatus={key} button_key={1} icon={<Visibility />}
				onClick={() => {
					setKey(1)
				}} />
			<Speaker_sidebar_button name={"view"} keyStatus={key} button_key={2} icon={<Visibility />}
				onClick={() => {
					setKey(2)
				}} />
		</div>
	)
}

export default Speaker_navigation