import { Check, Sensors } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin_session_card = ({ cardData }) => {

	const [sessionData, setSessionData] = useState(cardData);
	const navigate = useNavigate();

	const sessionDetails = () => {
		navigate(`/admin/sessions/${cardData["_id"]}`, { state: { id: cardData["_id"] } });
	}

	return (
		<>
			<div className="w-[240px] h-[290px] rounded-[5px] flex flex-col items-center justify-between bg-[#1b1342] cursor-pointer hover:translate-y-[5px] origin-top transition-[0.2s] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.5)] relative"
				onClick={sessionDetails}
			>
				{sessionData["acceptance"] == "accepted" &&
					< div className="absolute w-auto h-auto top-[5px] right-[5px] rounded-[50%] flex items-center justify-center">
						{sessionData["status"]
							? <div className="flex items-center justify-center w-full h-full p-[5px] rounded-[50%] bg-[green]">
								<Check />
							</div>
							: <div className="flex items-center justify-center w-full h-full p-[5px] rounded-[50%] bg-[red]">
								<Sensors />
							</div>
						}
					</div>
				}

				<div className="w-full h-[60%] overflow-hidden flex items-center justify-center">
					<img src="/temp.jpeg" className="object-top object-cover w-full h-full rounded-[5px]" />
				</div>
				<div className="w-full h-[40%] p-[5px] pl-[10px] pb-[10px] flex flex-col items-start justify-between overflow-hidden">
					<p className="overflow-hidden whitespace-nowrap text-ellipsis w-full font-bold text-[97%]">{cardData["session-name"]}</p>
					<p className="text-[95%]">{cardData["session-Time"]}  {cardData["session-Date"]} </p>
					<p className="bg-[#277c27] w-fit p-[1px] px-[10px] rounded-[20px] text-[95%]">{cardData["username"]}</p>
					<p className="w-fit p-[1px] px-[10px] rounded-[20px] text-[95%]" style={{ backgroundColor: cardData["acceptance"] == "accepted" ? "#277c27" : "orange" }}>{cardData["acceptance"]}</p>
				</div>
			</div >
		</>
	)
}

export default Admin_session_card