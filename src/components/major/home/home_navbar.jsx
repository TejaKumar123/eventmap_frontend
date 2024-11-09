import { useNavigate } from "react-router-dom";
import imageasset from "../../../assets/images/imageasset";

const home_navbar = () => {

	const navigate = useNavigate();

	return (
		<div className="w-full fixed border-[0px] border-[solid] border-[white] h-[100px] flex flex-row items-center justify-between px-[100px] bg-[#040116] z-[1]">
			<div className="w-[170px] text-[white] flex flex-row items-center justify-between h-[100%]">
				<img src={imageasset.cs_icon} className="w-[50px] rounded-[50%] border-[0px] border-[white] border-[solid]" />
				<li className="text-[140%] list-none">EventMap</li>
			</div>
			<div className="text-[white] hidden flex-row items-center justify-between gap-[20px] px-[20px] py-[6px] bg-[#0D0920] border-[#1B182D] border-[1px] border-[solid] rounded-[20px]">
				<button>Our Story</button>
				<button>Services</button>
				<button>Get in Touch</button>
			</div>
			<div className="min-w-auto text-[white] border-[0px] border-[solid] border-[white] flex flex-row items-center justify-between gap-[20px]">
				<button className="hover:outline-[1px] hover:outline hover:outline-white hover:rounded-md px-[15px] py-[5px]" onClick={() => navigate("/login")}>Login</button>
				<button className="px-[15px] py-[5px] rounded-md bg-[#6C5A95]" onClick={() => navigate("/signup")}>Register</button>
			</div>

		</div>
	)
}

export default home_navbar;