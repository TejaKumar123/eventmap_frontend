import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowBack, Send } from "@mui/icons-material"
import { useState, useEffect } from "react"
import Session_detail_box from "../../basic/admin/Session_detail_box"
import moment from "moment"
import { useFormik } from "formik"
import { feedbackData } from "../../../assets/data/data"
import Participant_feedback from "../../basic/participant/Participant_feedback"
import { useDispatch, useSelector } from "react-redux"
import { registrationAdd, registrationDelete, registrationView } from "../../../store/slices/registrationSlice"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Participant_session_details = () => {


	const location = useLocation();
	const navigate = useNavigate();
	const [session, setSession] = useState(location.state?.session || {}); // getting session data through state in routing 
	const dispatch = useDispatch();
	const [registered, setRegistered] = useState(null);
	const { user } = useSelector(state => state.user);
	const [registrationData, setRegistrationdata] = useState({});

	const back = () => {
		navigate(-1, { replace: true });
	}

	const registerSession = async () => {
		dispatch(registrationAdd({ session_id: session?.["session_id"] })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				toast.success("session successfully registered");
				checkRegistration();
			}
			else {
				toast.error(action?.payload?.message);
			}
		})
	}

	const checkRegistration = async () => {
		let criteria = { session_id: session?.["session_id"], email: user.email };
		let projection = { session_id: true, registration_id: true };
		dispatch(registrationView({ criteria, projection })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok" && action?.payload?.data?.length != 0) {
				setRegistered(true);
				setRegistrationdata(action?.payload?.data?.[0] || {});
			}
			else if (action?.payload?.status == "error") {
				setRegistered(null);
				toast.error("error while checking registration status");
			}
			else {
				setRegistered(false);
			}
		})
	}

	const cancelRegistration = async () => {
		let criteria = { email: user.email, session_id: session?.["session_id"] };
		dispatch(registrationDelete({ criteria, registration_id: registrationData?.registration_id })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				toast.success("registration cancelled successfully");
				checkRegistration();
			}
			else {
				toast.error("error occured while cancelling registration");
			}
		})
	}

	const handleFeedback = async (data) => {
		alert(JSON.stringify(data));
	}

	const formik = useFormik({
		initialValues: {
			feedback: "",
			session_id: session?.["session_id"] || ""
		},
		onSubmit: (values) => {
			let data = JSON.parse(JSON.stringify(values));
			handleFeedback(data);
		}
	})

	useEffect(() => {
		let stateSession = location.state;
		if (!stateSession?.session) {
			navigate("/participant/sessions/view");
			/* alert(stateSession); */
		}
		checkRegistration();
	}, [])

	return (
		<>
			<div className="w-full h-auto flex flex-row items-center justify-between sticky top-[0px] mb-[20px] py-[15px] px-[15px]">
				<div className="w-fit rounded-[100%] px-[5px] py-[5px] border-[rgba(255,255,255,1)] border-[2px] flex items-center justify-center cursor-pointer opacity-[0.5] transition-[0.1s] hover:opacity-[1] text-white" onClick={back} title="BACK">
					<ArrowBack />
				</div>
			</div>
			<div className="w-full h-auto flex flex-row items-start justify-start gap-[20px] px-[15px] py-[15px]">
				<div className="w-[40%] h-auto border-[0px] rounded-[10px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.2)]">
					<img src={session?.["session_image"] || "/temp.jpeg"} className="object-cover object-top w-full rounded-[10px]" />
				</div>
				<div className="w-[55%] h-auto flex flex-row items-start justify-start flex-wrap gap-[10px]">
					<Session_detail_box text1={session?.creator?.["username"]} text2={"Creator"} />
					<Session_detail_box text1={moment(session?.["date_time"]).format("hh:mm:ss A")} text2={"session-Time"} />
					<Session_detail_box text1={moment(session?.["date_time"]).format("DD-MM-YYYY")} text2={"session-Date"} />
					<Session_detail_box text1={moment(session?.["created_on"]).format("DD-MM-YYYY hh:mm:ss A")} text2={"created_on"} />
					<Session_detail_box text1={session?.["status"]} text2={"status"} />
					<Session_detail_box text1={session?.["acceptance"]} text2={"acceptance"} />
					<Session_detail_box text1={session?.["session_name"]} text2={"session-name"} />
					<Session_detail_box text1={session?.["session_description"]} text2={"session-Description"} />
					<Session_detail_box text1={session?.["venue"]} text2={"venue"} />

					{registered == false && session?.["status"] == 0 && session?.["acceptance"] == "accepted" &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">
							<button className="bg-blue-700 px-[20px] py-[2px] rounded-[20px] text-[120%]" onClick={registerSession}>Register</button>
						</div>
					}
					{registered == true &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">
							<button className="bg-green-700 px-[20px] py-[2px] rounded-[20px] text-[120%]">Registered</button>
						</div>

					}
					{registered == null &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">
							<button className="bg-yellow-700 px-[20px] py-[2px] rounded-[20px] text-[120%]">Status pending...</button>
						</div>

					}
					{registered == true && session?.["status"] == "0" && session?.["acceptance"] == "accepted" &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">
							<button className="bg-red-700 px-[20px] py-[2px] rounded-[20px] text-[120%]" onClick={cancelRegistration}>Cancel Registration</button>
						</div>

					}
				</div>
			</div>
			{
				session?.["status"] == 1 && session?.["acceptance"] == "accepted" &&
				<div className="w-full h-auto px-[15px] py-[15px]">
					<p className="font-bold text-[150%] mb-[15px]">Feedbacks</p>
					<div className="w-full h-[400px] overflow-y-auto px-[10px]">
						{
							feedbackData.map((data) => {
								if (data?.["session_id"] != session?.["session_id"]) {
									return <Participant_feedback feedback={data} />
								}
							})
						}
					</div>
					<form className="w-[80%] h-[60px] mt-[10px] flex flex-row items-center justify-around px-[10px] py-[5px] m-auto relative" onSubmit={formik.handleSubmit}>
						<input
							className="w-[100%] h-[100%] rounded-[25px] bg-[#1b1342] px-[20px] outline-none pr-[100px]"
							placeholder="Give feedback here..."
							name="feedback"
							maxLength={200}
							value={formik.values.feedback}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							required
						/>
						<button
							className="rounded-[50%] hyphens-auto bg-[#1b1342] p-[10px] pl-[13px] cursor-pointer absolute right-[10px]"
							type="submit"
						>
							<Send />
						</button>
					</form>
				</div>


			}

			<br />
		</>
	)
}

export default Participant_session_details;