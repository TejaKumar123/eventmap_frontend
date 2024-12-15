import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { registrationView } from "../../../store/slices/registrationSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Participants_session_registrations = () => {

	const dispatch = useDispatch();
	const [registeredSessionData, setRegisteredSessionData] = useState([]);

	const fetchRegistrations = async () => {
		let criteria = {};
		let projection = {};
		dispatch(registrationView({ criteria, projection })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				console.log(action?.payload);
			}
			else {
				console.log(action?.payload);
			}
		})
	}

	useEffect(() => {
		fetchRegistrations();
	}, []);

	return (
		<div className="w-[100%] h-auto p-[15px]">
			<p className="text-[150%]">Registrations</p>
			{registeredSessionData.length != 0 ?
				<div className="w-full h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
					{
						registeredSessionData.map((data) => {
							if (data?.status == "fulfilled" && data?.value?.session?.["acceptance"] == "accepted") {
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

export default Participants_session_registrations