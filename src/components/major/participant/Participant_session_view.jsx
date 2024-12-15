import Participant_session_card from "./Participant_session_card";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { sessionFind } from "../../../store/slices/sessionSlice";
import { v4 as uuid } from "uuid";

const Participant_session_view = () => {

	const dispatch = useDispatch();
	const [sessionData, setSessionData] = useState([]);

	const fetchSessions = async () => {
		let criteria = { acceptance: "accepted" };
		let projection = {};
		dispatch(sessionFind({ criteria, projection })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				setSessionData(action?.payload?.data);
			}
			else {
				setSessionData([]);
			}
		})
	}

	useEffect(() => {
		fetchSessions();
	}, [])

	return (
		<div className="w-full h-auto px-[15px] py-[15px] mt-[10px]">
			<p className="text-[150%] mb-[30px]">Sessions</p>
			{sessionData.length != 0 ?
				<div className="w-full h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
					{
						sessionData.map((data) => {
							if (data?.status == "fulfilled" && data?.value?.["acceptance"] == "accepted") {
								return <Participant_session_card cardData={data?.value} key={uuid()} />
							}
						})
					}
				</div>
				:
				<p className="text-[150%] opacity-[0.5] text-white text-center">There are no active sessions to register</p>
			}

		</div>
	)
}

export default Participant_session_view