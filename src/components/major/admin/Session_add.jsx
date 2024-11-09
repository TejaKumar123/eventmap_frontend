import Templatediv1 from "../../basic/other/Templatediv1";
import { useFormik } from "formik";
import * as Yup from "yup";
import Errordesign from "../../basic/home/errordesign"
import { useRef, useState } from "react";
import { AddAPhoto, PhotoCamera } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Session_add = () => {

	const [imagename, setImagename] = useState("");
	const [imageobj, setImageobj] = useState();
	const imageRef = useRef();
	const [imageerror, setImageerror] = useState();

	const handleFile = (event) => {
		/* alert(JSON.stringify(event.currentTarget.files[0].type)) */
		if (event.currentTarget.files && !(event.currentTarget.files[0].type.includes("image"))) {
			toast.error("please select image type file only");
			event.currentTarget.value = "";
		}
		else {
			let file = event.currentTarget.files;
			setImagename(file?.[0]?.name || "");
			setImageobj(file?.[0] || "");
			setImageerror("");
		}
	}

	const handleSessionAdd = (data, file) => {
		data["session-image"] = file;
		toast.success("Successfully session added")

		//reseting image and form 
		setImagename("");
		setImageobj(false);
		imageRef.current.value = "";
		formik.resetForm();

	}

	const validationSchema = Yup.object({
		name: Yup.string().required("required"),
		description: Yup.string().required("required"),
		datetime: Yup.string().required("required"),
		venue: Yup.string().required("required"),
	})

	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			datetime: "",
			venue: "",
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (!imageobj) {
				setImageerror("please select image");
				return;
			}
			setImageerror("");
			handleSessionAdd(values, imageobj);
		},
	})

	return (
		<Templatediv1>
			<div className="w-full h-auto ">
				<p className="text-center font-bold text-[150%] mt-[10px]">Add new Session</p>
				<form onSubmit={formik.handleSubmit}>
					<div className="w-full flex flex-col items-center justify-start gap-[20px] mt-[20px] mb-[50px]">
						<input type="file" className="hidden" ref={imageRef} onChange={handleFile} />
						<div className="w-fit h-auto flex flex-col items-center justify-start gap-[10px] cursor-pointer" onClick={() => { imageRef.current.click() }}>
							<div className="w-[160px] h-[110px] border-dashed border-[2px] flex items-center justify-center rounded-[10px] p-[10px]">
								<img src={imageobj ? URL.createObjectURL(imageobj) : ""} className="w-auto h-full" />
								{!imageobj && <AddAPhoto />}
							</div>
							<p className="text-[#b8b8ce] text-[95%] ">{imagename ? imagename : "Upload Poster"}</p>
							<p className="text-red-600 text-[95%] mt-[-10px]">{imageerror}</p>
						</div>
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
							{formik.touched.name && formik.errors.name ? <Errordesign>{formik.errors.name}</Errordesign> : null}
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
							{formik.touched.description && formik.errors.description ? <Errordesign>{formik.errors.description}</Errordesign> : null}
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
								className="bg-green-700 w-auto px-[20px] py-[5px] rounded-[10px] font-bold cursor-pointer"
								value="Add Session"
							/>
						</div>
					</div>
				</form>
			</div>
			<ToastContainer theme="dark" draggable autoClose={5000} />
		</Templatediv1 >
	)
}

export default Session_add