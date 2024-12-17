import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowBack, Edit, Send } from "@mui/icons-material"
import { useState, useEffect } from "react"
import Session_detail_box from "../../basic/admin/Session_detail_box"
import moment from "moment"
import { useFormik } from "formik"
import Speaker_feedback from "../../basic/speaker/Speaker_feedback"
import { sessionDelete, sessionUpdate } from "../../../store/slices/sessionSlice"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux"
import { feedbackAdd, feedbackDelete, feedbackUpdate, feedbackView } from "../../../store/slices/feedbackSlice"


const Speaker_session_details = () => {


	const location = useLocation();
	const navigate = useNavigate();
	const [session, setSession] = useState(location.state?.session || {}); // getting session data through state in routing 
	const dispatch = useDispatch();
	const [feedbackData, setFeedbackData] = useState([]);

	const back = () => {
		navigate(-1, { replace: true });
	}

	const editDetail = () => {
		navigate("/speaker/sessions/edit", { state: { sessionData: session } });
	}

	const CancelRequest = () => {
		let criteria = { session_id: session["session_id"] };
		dispatch(sessionDelete({ criteria })).then(action => {
			if (action?.payload?.status == "ok") {
				toast.success(action?.payload?.message);
				navigate(-1);
			}
			else {
				toast.error(action?.payload?.message);
			}
		})

	}

	const completeSession = async () => {
		let criteria = { session_id: session.session_id };
		let updatedInfo = { status: 1 };
		dispatch(sessionUpdate({ criteria, updatedInfo })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				toast.success("session completed");
				setSession({ ...session, status: 1 });
			}
			else {
				toast.error("error occured");
			}
		})
	}

	const getFeedbacks = async () => {
		let criteria = { session_id: session?.["session_id"] };
		let projection = {};
		dispatch(feedbackView({ criteria, projection })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				setFeedbackData(action?.payload?.data);
				/* toast.success("feedbacks fetched"); */
			}
			else {
				console.log(action?.payload?.message);
			}
		})
	}

	const handleFeedback = async (data) => {
		dispatch(feedbackAdd(data)).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				toast.success(action?.payload?.message);
				getFeedbacks();
			}
			else {
				toast.error(action?.payload?.message);
			}
		})
		formik.resetForm();

	}

	const deleteFeedback = async (feedback) => {
		let criteria = { feedback_id: feedback.feedback_id };
		dispatch(feedbackDelete({ criteria })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				getFeedbacks();
				toast.success("feedback deleted successfully");
			}
			else {
				toast.error("error while deleting feedback");
			}

		})
	}

	const editFeedback = async (data) => {
		/* console.log(data); */
		dispatch(feedbackUpdate(data)).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				getFeedbacks();
				toast.success("feedback updated");
			}
			else {
				toast.error("error occur while updating the feedbacl")
			}
		})
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
			navigate("/speaker/sessions/view");
			/* alert(stateSession); */
		}
		if (stateSession?.session?.status == 1 && stateSession?.session?.acceptance == "accepted") {
			getFeedbacks();
		}

	}, [])


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
					<Session_detail_box text1={moment(session?.["date_time"]).format("hh:mm:ss A")} text2={"session-Time"} />
					<Session_detail_box text1={moment(session?.["date_time"]).format("DD-MM-YYYY")} text2={"session-Date"} />
					<Session_detail_box text1={moment(session?.["created_on"]).format("DD-MM-YYYY hh:mm:ss A")} text2={"created_on"} />
					<Session_detail_box text1={session?.["status"]} text2={"status"} />
					<Session_detail_box text1={session?.["acceptance"]} text2={"acceptance"} />
					<Session_detail_box text1={session?.["session_name"]} text2={"session-name"} />
					<Session_detail_box text1={session?.["session_description"]} text2={"session-Description"} />
					<Session_detail_box text1={session?.["venue"]} text2={"venue"} />
					{session?.["status"] == 0 &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">

							<button className="bg-red-700 px-[20px] py-[1px] rounded-[20px]" onClick={CancelRequest}>CancelRequest</button>
						</div>
					}
					{session?.["status"] == 0 && session?.["acceptance"] == "accepted" &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">

							<button className="bg-green-700 px-[20px] py-[1px] rounded-[20px]" onClick={completeSession}>Complete</button>
						</div>
					}
					{session?.["status"] == 1 && session?.["acceptance"] == "accepted" &&
						<div className="w-full h-auto flex flex-row items-center justify-start gap-[20px] flex-wrap">

							<button className="bg-green-700 px-[20px] py-[1px] rounded-[20px]">
								Session completed
							</button>
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
								if (data?.status == "fulfilled" && data?.value?.["session_id"] == session?.["session_id"]) {

									return <Speaker_feedback feedback={data?.value} edit={editFeedback} deletef={deleteFeedback} />
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

export default Speaker_session_details