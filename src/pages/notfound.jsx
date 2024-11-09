import { useNavigate } from "react-router-dom";
import imageasset from "../assets/images/imageasset.jsx";

const notfound = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen p-[10px] flex flex-col items-center justify-start gap-[10px] border-[1px] border-[solid] border-[white] bg-white">
			<img src={imageasset.notfound} className="w-[70%]" />
			<button className="border-[solid] border-[1px] border-[black] rounded-md w-[200px] m-auto bg-[#3A8F92] text-[white] text-[120%] p-[5px 10px]" onClick={() => navigate("/")}>Go To Home Page</button>
		</div>
	)
}

export default notfound