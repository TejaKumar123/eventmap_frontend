import Templatediv1 from "../../basic/other/Templatediv1"
import sessionData from "../../../assets/data/data"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowBack, Edit } from "@mui/icons-material"
import { useEffect, useState } from "react"
import Session_detail_box from "../../basic/admin/Session_detail_box"

const Admin_session_details = () => {

	const { sessionid } = useParams();
	const navigate = useNavigate();
	const [session, setSession] = useState();

	const back = () => {
		navigate(-1, { replace: true });
	}

	const editDetail = () => {
		navigate("/admin/sessions/edit", { state: { sessionData: session } });
	}

	const accept = () => {
		alert("accepted");
	}

	const reject = () => {
		alert("rejected");
	}

	useEffect(() => {
		let data = sessionData.find((val) => {
			if (val["_id"] == sessionid) {
				return val;
			}
		})
		setSession(data);
	}, [])

	return (
		<Templatediv1>
			<div className="w-full h-auto flex flex-row items-center justify-between sticky top-[-10px] mb-[20px] bg-[#1b1342] py-[10px] px-[10px]">
				<div className="w-fit rounded-[100%] px-[5px] py-[5px] border-[rgba(255,255,255,1)] border-[2px] flex items-center justify-center cursor-pointer opacity-[0.5] transition-[0.1s] hover:opacity-[1] text-white" onClick={back} title="BACK">
					<ArrowBack />
				</div>
				{session?.["acceptance"] != "rejected" && <div className="w-fit rounded-[100%] px-[5px] py-[5px] border-[rgba(255,255,255,1)] border-[2px] flex items-center justify-center cursor-pointer opacity-[0.5] transition-[0.1s] hover:opacity-[1] text-white" onClick={editDetail} title="EDIT">
					<Edit />
				</div>}
			</div>
			<div className="w-full h-auto flex flex-row items-start justify-start gap-[20px]">
				<div className="w-[40%] h-auto border-[0px] rounded-[10px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.2)]">
					<img src="/temp.jpeg" className="object-cover object-top w-full rounded-[10px]" />
				</div>
				<div className="w-[55%] h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
					<Session_detail_box text1={session?.["username"]} text2={"Creator"} />
					<Session_detail_box text1={session?.["session-Time"]} text2={"session-Time"} />
					<Session_detail_box text1={session?.["session-Date"]} text2={"session-Date"} />
					<Session_detail_box text1={session?.["created_on"]} text2={"created_on"} />
					<Session_detail_box text1={session?.["status"]} text2={"status"} />
					<Session_detail_box text1={session?.["acceptance"]} text2={"acceptance"} />
					<Session_detail_box text1={session?.["session-name"]} text2={"session-name"} />
					<Session_detail_box text1={session?.["session-Description"]} text2={"session-Description"} />
					<Session_detail_box text1={session?.["venue"]} text2={"venue"} />
					{session?.["acceptance"] == "pending" &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">
							<button className="bg-green-700 px-[20px] py-[1px] rounded-[20px]" onClick={accept}>Accept</button>
							<button className="bg-red-700 px-[20px] py-[1px] rounded-[20px]" onClick={reject}>Reject</button>
						</div>
					}
				</div>
			</div>
			<br />
		</Templatediv1>
	)
}

export default Admin_session_details