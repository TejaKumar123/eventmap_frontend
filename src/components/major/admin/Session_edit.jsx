import { useLocation, useNavigate } from "react-router-dom"
import Templatediv1 from "../../basic/other/Templatediv1"
import { ArrowBack } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Errordesign from "../../basic/home/errordesign";
import moment from "moment";

const Session_edit = () => {

	const location = useLocation();
	const { sessionData } = location.state || {};
	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	}

	const validationSchema = Yup.object({
		name: Yup.string().required("required"),
		description: Yup.string().required("required"),
		datetime: Yup.string().required("required"),
		venue: Yup.string().required("required"),
	})

	const formik = useFormik({
		initialValues: {
			name: sessionData["session-name"],
			description: sessionData["session-Description"],
			datetime: sessionData["session-Date"] + "T" + moment(sessionData["session-Time"], "hh:mm A").format("HH:mm"),
			venue: sessionData["venue"],
		},
		validationSchema,
		onSubmit: (values) => {
			/* if (!imageobj) {
				setImageerror("please select image");
				return;
			}
			setImageerror("");
			handleSessionAdd(values, imageobj); */
			alert(JSON.stringify(values));
		},
	})

	return (
		<Templatediv1>
			<div className="w-full h-auto">
				<div className="w-fit rounded-[100%] px-[5px] py-[5px] border-[rgba(255,255,255,0.5)] hover:border-[rgba(255,255,255,1)] transition-[0.2s] border-[2px] flex items-center justify-center cursor-pointer text-white sticky top-[0px] mb-[10px] bg-[#1b1342]" onClick={back} title="BACK">
					<ArrowBack />
				</div>
				<p className="text-center font-bold text-[150%] mt-[10px]">Edit Sessison</p>
				<div className="w-full h-auto mt-[15px] mb-[30px]">
					<form onSubmit={formik.handleSubmit}>
						<div className="w-full h-auto flex flex-col items-center justify-start gap-[20px]">
							<div className="w-[300px] h-auto flex flex-col items-start justify-start gap-[5px]">
								<p className="text-[95%]">Session Name</p>
								<input
									type="text"
									className="bg-[rgba(255,255,255,0.1)] w-full outline-none px-[10px] py-[10px] rounded-[4px]"
									placeholder="Enter the session name"
									name="name"
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}

								/>
								{/* {formik.touched.name && formik.errors.name ? <Errordesign>{formik.errors.name}</Errordesign> : null} */}
							</div>
							<div className="w-[300px] h-auto flex flex-col items-start justify-start gap-[5px]">
								<p className="text-[95%]">Session Description</p>
								<input
									type="text"
									className="bg-[rgba(255,255,255,0.1)] w-full outline-none px-[10px] py-[10px] rounded-[4px]"
									placeholder="Enter the session Description"
									name="description"
									value={formik.values.description}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}

								/>
								{/* {formik.touched.name && formik.errors.name ? <Errordesign>{formik.errors.name}</Errordesign> : null} */}
							</div>
							<div className="w-[300px] h-auto flex flex-col items-start justify-start gap-[5px]">
								<p className="text-[95%]">Session Venue</p>
								<input
									type="text"
									className="bg-[rgba(255,255,255,0.1)] w-full outline-none px-[10px] py-[10px] rounded-[4px]"
									placeholder="Enter the session Venue"
									name="venue"
									value={formik.values.venue}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.venue && formik.errors.venue ? <Errordesign>{formik.errors.venue}</Errordesign> : null}
							</div>
							<div className="w-[300px] h-auto flex flex-col items-start justify-start gap-[5px]">
								<p className="text-[95%]">Session Time and Date</p>
								<input
									type="datetime-local"
									className="bg-[rgba(255,255,255,0.1)] w-full outline-none px-[10px] py-[10px] rounded-[4px] text-white"
									placeholder="Enter the session Description"
									name="datetime"
									value={formik.values.datetime}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.datetime && formik.errors.datetime ? <Errordesign>{formik.errors.datetime}</Errordesign> : null}
							</div>
							<div className="w-[300px] h-auto flex flex-col items-center justify-start gap-[5px]">
								<input
									type="submit"
									className="bg-blue-700 w-auto px-[20px] py-[5px] rounded-[10px] font-bold cursor-pointer"
									value="Edit Session"
								/>
							</div>
							{/* <p>{moment("2024-11-15T15:30").format("hh:mm:ss A yyyy-MM-DD")}</p> */}
							{/* hh for 12 hour format, HH for 24 hour format, "A" for getting AM or PM */}
						</div>
					</form>
				</div>
			</div>
		</Templatediv1>
	)
}

export default Session_edit