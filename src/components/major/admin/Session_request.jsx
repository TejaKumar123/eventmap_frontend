import Admin_session_card from "../../basic/admin/Admin_session_card"
import { useDispatch } from "react-redux";
import { sessionFind } from "../../../store/slices/sessionSlice";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Session_request = () => {

	const dispatch = useDispatch();
	const [sessionData, setSessionData] = useState([]);

	const fetchSessions = async () => {
		dispatch(sessionFind({ criteria: { acceptance: "pending" }, projection: {} })).then(action => {
			/* console.log(action?.payload); */
			setSessionData(action?.payload?.data);
		});
	}

	useEffect(() => {
		fetchSessions();
	}, []);

	return (
		<div className="w-fit h-auto flex flex-row items-start justify-start flex-wrap gap-[15px] m-auto p-[10px]">
			{sessionData.length != 0 ?
				sessionData.map((data) => {
					if (data?.value && data?.status == "fulfilled" && data?.value?.["acceptance"] == "pending" && data?.value?.creator) {
						return <Admin_session_card cardData={data?.value} key={uuid()} />
					}
				})
				:
				<p className="text-center text-white text-[150%] opacity-[0.5]">There are no session requests</p>
			}

		</div>
	)
}

export default Session_request;
