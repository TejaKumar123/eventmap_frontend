import Groups from "@mui/icons-material/Groups"
import { useEffect, useState } from "react"
import Admin_sidebar_button from "../../basic/admin/Admin_sidebar_button";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import InterpreterMode from "@mui/icons-material/InterpreterMode"
import Person from "@mui/icons-material/Person";
import { useLocation, useNavigate } from "react-router-dom";

const Admin_sidebar = () => {

	const [key, setKey] = useState(0);
	const navigate = useNavigate();
	const url = useLocation()
	const links = ["sessions", "speakers", "participant", "settings"];

	useEffect(() => {
		let linkkey = links.indexOf(url.pathname.split("/").slice(2, 3).toString());
		if (url.pathname.split("/").slice(2, 3).toString() == "" || url.pathname.toString() == "/admin") {
			setKey(0);
			navigate("sessions", { replace: true });
		}
		else {
			setKey(linkkey);
		}
		/* alert(url.pathname.split("/").slice(2, 3)); */

	}, [url])

	// bg-[#0D0920]
	return (
		<>
			<div className="w-[250px] h-dvh overflow-y-auto bg-[#1b1342] pt-[80px] px-[15px]">
				<Admin_sidebar_button name={"Sessions"} icon={<Groups />} button_key={0} keyStatus={key}
					onClick={() => {
						setKey(0);
						navigate("sessions", { replace: true });
					}} />
				<Admin_sidebar_button name={"Speakers"} icon={<InterpreterMode />} button_key={1} keyStatus={key} onClick={() => {
					setKey(1);
					navigate("speakers", { replace: true });
				}} />
				<Admin_sidebar_button name={"Participants"} icon={<Person />} button_key={2} keyStatus={key} onClick={() => {
					setKey(2);
					navigate("participant", { replace: true });
				}} />
				<Admin_sidebar_button name={"Settings"} icon={<Settings />} button_key={3} keyStatus={key} onClick={() => {
					setKey(3);
					navigate("settings", { replace: true });
				}} />
				<div className="w-full flex items-center justify-start gap-[10px] px-[15px] py-[5px] text-[red] mt-[10px] cursor-pointer">
					<Logout />
					<p>Logout</p>
				</div>

			</div>
		</>
	)
}

export default Admin_sidebar