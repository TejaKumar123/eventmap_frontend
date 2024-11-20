import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowBack, Edit } from "@mui/icons-material"
import { useState } from "react"
import Session_detail_box from "../../basic/admin/Session_detail_box"
import moment from "moment"

const Speaker_session_details = () => {


	const location = useLocation();
	const navigate = useNavigate();
	const [session, setSession] = useState(location.state.session || {}); // getting session data through state in routing 

	const back = () => {
		navigate(-1, { replace: true });
	}

	const editDetail = () => {
		navigate("/speaker/sessions/edit", { state: { sessionData: session } });
	}

	const CancelRequest = () => {
		alert("request cancel");
	}

	/* useEffect(() => {
		let data = sessionData.find((val) => {
			if (val["_id"] == sessionid) {
				return val;
			}
		})
		setSession(data);
	}, []) */

	return (
		<>
			<div className="w-full h-auto flex flex-row items-center justify-between sticky top-[0px] mb-[20px] py-[15px] px-[15px]">
				<div className="w-fit rounded-[100%] px-[5px] py-[5px] border-[rgba(255,255,255,1)] border-[2px] flex items-center justify-center cursor-pointer opacity-[0.5] transition-[0.1s] hover:opacity-[1] text-white" onClick={back} title="BACK">
					<ArrowBack />
				</div>
				{session?.["acceptance"] != "rejected" && session?.["status"] != 1 && <div className="w-fit rounded-[100%] px-[5px] py-[5px] border-[rgba(255,255,255,1)] border-[2px] flex items-center justify-center cursor-pointer opacity-[0.5] transition-[0.1s] hover:opacity-[1] text-white" onClick={editDetail} title="EDIT">
					<Edit />
				</div>}
			</div>
			<div className="w-full h-auto flex flex-row items-start justify-start gap-[20px] px-[15px] py-[15px]">
				<div className="w-[40%] h-auto border-[0px] rounded-[10px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.2)]">
					<img src={session?.["session_image"] || "/temp.jpeg"} className="object-cover object-top w-full rounded-[10px]" />
				</div>
				<div className="w-[55%] h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
					<Session_detail_box text1={session?.["email"]} text2={"Creator"} />
					<Session_detail_box text1={moment(session?.["date_time"]).format("hh:mm:ss")} text2={"session-Time"} />
					<Session_detail_box text1={moment(session?.["date_time"]).format("DD-MM-YYYY")} text2={"session-Date"} />
					<Session_detail_box text1={moment(session?.["created_on"]).format("DD-MM-YYYY hh:mm:ss")} text2={"created_on"} />
					<Session_detail_box text1={session?.["status"]} text2={"status"} />
					<Session_detail_box text1={session?.["acceptance"]} text2={"acceptance"} />
					<Session_detail_box text1={session?.["session_name"]} text2={"session-name"} />
					<Session_detail_box text1={session?.["session_description"]} text2={"session-Description"} />
					<Session_detail_box text1={session?.["venue"]} text2={"venue"} />
					{session?.["acceptance"] == "pending" &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">

							<button className="bg-red-700 px-[20px] py-[1px] rounded-[20px]" onClick={CancelRequest}>CancelRequest</button>
						</div>
					}
				</div>
			</div>
			{
				session?.["status"] == 1 && session?.["acceptance"] == "accepted" &&
				<div className="w-full h-auto px-[15px] py-[15px]">
					<p className="font-bold text-[150%] mb-[15px]">Feedbacks</p>
					<div className="w-full h-[500px] border overflow-y-auto">

					</div>
				</div>


			}

			<br />
		</>
	)
}

export default Speaker_session_details