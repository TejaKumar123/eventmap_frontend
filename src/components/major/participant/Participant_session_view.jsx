import { ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { sessionData } from "../../../assets/data/data";
import Participant_session_card from "./Participant_session_card";
import { useId } from "react";

const Participant_session_view = () => {

	return (
		<div className="w-full h-auto px-[15px] py-[15px] mt-[10px] flex flex-col items-start justify-start gap-[10px]">
			<div className="w-full h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
				{
					sessionData.map((data) => {
						/* if(data["email"]==""){
							we will use this when we get data from backend
						} */
						if (data["acceptance"] == "accepted") {
							return <Participant_session_card cardData={data} />
						}
					})
				}
			</div>

		</div>
	)
}

export default Participant_session_view