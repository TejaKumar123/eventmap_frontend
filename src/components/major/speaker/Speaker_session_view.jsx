import { ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { sessionData } from "../../../assets/data/data";
import Speaker_session_card from "../../basic/speaker/Speaker_session_card";

const Speaker_session_view = () => {

	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	}

	return (
		<div className="w-full h-auto px-[15px] py-[15px] mt-[10px] flex flex-col items-start justify-start gap-[10px]">
			<div className="w-fit rounded-[50%] p-[5px] border-[2px] border-[white] opacity-[0.5] hover:opacity-[1] transition-[0.2s] flex items-center justify-center cursor-pointer ml-[0px]" onClick={back}>
				<ArrowBack />
			</div>
			<div className="w-full h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
				{
					sessionData.map((data) => {
						/* if(data["email"]==""){
							we will use this when we get data from backend
						} */
						return <Speaker_session_card cardData={data} />
					})
				}
			</div>

		</div>
	)
}

export default Speaker_session_view