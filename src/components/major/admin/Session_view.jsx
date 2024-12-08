import Admin_session_card from "../../basic/admin/Admin_session_card"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { sessionFind } from "../../../store/slices/sessionSlice"
import { v4 as uuid } from "uuid"

const Session_view = () => {
	const dispatch = useDispatch();
	const [sessionData, setSessionData] = useState([]);
	const empty = Boolean(sessionData);

	const fetchSessions = async () => {
		let criteria = { acceptance: "accepted" };
		let projection = {};
		dispatch(sessionFind({ criteria, projection })).then(action => {
			setSessionData(action?.payload?.data);
			/* console.log(action?.payload); */
		})
	}

	useEffect(() => {
		fetchSessions();
	}, []);

	return (
		<div className="w-fit h-auto flex flex-row items-start justify-start flex-wrap gap-[15px] m-auto p-[10px]">
			{!empty
				?
				sessionData.map((data) => {
					if (data?.value && data?.value?.creator && data?.status == "fulfilled" && data?.value?.["acceptance"] == "accepted") {
						return (

							<Admin_session_card cardData={data?.value} key={uuid()} />

						)
					}
				})
				:
				<p className="text-[white] text-[150%] opacity-[0.5]">There are no accepted sessions to see</p>
			}

		</div>
	)
}

export default Session_view;