import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registrationView } from "../../../store/slices/registrationSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";
import async from "async";
import { sessionFind } from "../../../store/slices/sessionSlice";
import Participant_session_card from "./Participant_session_card";

const Participants_session_registrations = () => {

	const dispatch = useDispatch();
	const [registeredSessionData, setRegisteredSessionData] = useState([]);
	const { user } = useSelector(state => state.user);

	//here we will get the array of session ids that user registered
	const fetchRegistrations = async () => {
		let criteria = { email: user.email };
		let projection = { session_id: true, _id: false };
		dispatch(registrationView({ criteria, projection })).then(action => {
			console.log(action?.payload);
			if (action?.payload?.status == "ok") {
				fetchSessions(action?.payload?.data);
			}
			else {
				toast.error(action?.payload?.message);
			}
		})
	}

	//here we will get the session data that user registered
	const fetchSessions = async (data) => {
		/* console.log(data); */
		let updatedData = data.map((value) => {
			let { session_id } = value;
			let getSession = async (session_id) => {
				return new Promise((resolve, reject) => {
					let criteria = { session_id: session_id };
					let projection = {};
					dispatch(sessionFind({ criteria, projection })).then(action => {
						if (action?.payload?.status == "ok") {
							resolve(action?.payload?.data);
						}
						else {
							reject();
						}
					})
				})
			}
			return getSession(session_id);
		})
		Promise.allSettled(updatedData)
			.then((result) => {
				console.log(result);
				let finalData = result.map(value => {
					if (value?.status == "fulfilled") {
						return value?.value?.[0];
					}
					else {
						return null;
					}
				})
				/* console.log(finalData); */
				setRegisteredSessionData(finalData);
			})
			.catch((err) => {
				toast.error("error while fetching data");
			})
	}

	useEffect(() => {
		fetchRegistrations();
	}, []);

	return (
		<div className="w-[100%] h-auto p-[15px]">
			<p className="text-[150%]">Registrations</p>
			{registeredSessionData.length != 0 ?
				<div className="w-full h-auto flex flex-row items-start justify-start flex-wrap gap-[10px] mt-[30px]">
					{
						registeredSessionData.map((data) => {
							if (data?.status == "fulfilled" && data?.value?.["acceptance"] == "accepted") {
								return <Participant_session_card cardData={data?.value} key={uuid()} />
							}
						})
					}
				</div>
				:
				<p className="text-[150%] opacity-[0.5] text-white text-center">There are no registrations</p>
			}
		</div>
	)
}

export default Participants_session_registrations