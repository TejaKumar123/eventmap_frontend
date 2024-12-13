import { ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
/* import { sessionData } from "../../../assets/data/data"; */
import Speaker_session_card from "../../basic/speaker/Speaker_session_card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionFind } from "../../../store/slices/sessionSlice";

const Speaker_session_view = () => {

	const navigate = useNavigate();
	const [sessionData, setSessionData] = useState([]);
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);

	const fetchSessions = async () => {
		let criteria = { email: user.email };
		let projection = {};
		dispatch(sessionFind({ criteria, projection })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				setSessionData(action?.payload?.data);
			}
			else {
				console.log(action?.payload?.message);
			}
		})

	}

	const back = () => {
		navigate(-1);
	}

	useEffect(() => {
		fetchSessions();
	}, []);

	return (
		<div className="w-full h-auto px-[15px] py-[15px] mt-[10px] flex flex-col items-start justify-start gap-[10px]">
			<div className="w-fit rounded-[50%] p-[5px] border-[2px] border-[white] opacity-[0.5] hover:opacity-[1] transition-[0.2s] flex items-center justify-center cursor-pointer ml-[0px]" onClick={back}>
				<ArrowBack />
			</div>
			<div className="w-full h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
				{
					sessionData.map((data) => {
						if (data?.status == "fulfilled" && data?.value?.email == user.email) {
							return <Speaker_session_card cardData={data?.value} />
						}
					})
				}
			</div>

		</div>
	)
}

export default Speaker_session_view