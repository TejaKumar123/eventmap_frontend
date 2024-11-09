import { useEffect, useState } from "react"
import Admin_sidebar_button from "../../basic/admin/Admin_sidebar_button";
import { Add, RequestQuote, Visibility } from "@mui/icons-material"
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Sessions_sidebar = () => {

	const [key, setKey] = useState(0);
	const navigate = useNavigate();
	const url = useLocation();
	const links = ["requests", "view", "add"];
	/* const param = useParams() */


	useEffect(() => {
		let linkkey = links.indexOf(url.pathname.split("/").slice(3, 4).toString());
		if (url.pathname.toString() == "/admin/sessions" || url.pathname.toString() == "/admin/sessions/") {
			setKey(0);
			navigate("requests", { replace: true });
		}
		else {
			setKey(linkkey);

		}
	}, [url])


	return (
		<div className="w-[20%] h-full bg-[#1b1342] rounded-[10px] pt-[10px] px-[10px]">
			<Admin_sidebar_button name={"Requests"} button_key={0} keyStatus={key} icon={<RequestQuote />}
				onClick={() => {
					setKey(0);
					navigate("requests", { replace: "true" });
				}} />
			<Admin_sidebar_button name={"View"} button_key={1} keyStatus={key} icon={<Visibility />}
				onClick={() => {
					setKey(1);
					navigate("view", { replace: "true" });
				}} />
			<Admin_sidebar_button name={"Add"} button_key={2} keyStatus={key} icon={<Add />}
				onClick={() => {
					setKey(2);
					navigate("add", { replace: "true" });
				}} />
		</div>
	)
}

export default Sessions_sidebar