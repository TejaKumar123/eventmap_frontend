import { Input } from "antd";
import Person from "@mui/icons-material/Person"
import Mail from "@mui/icons-material/Mail"
import { useFormik } from "formik";
import * as Yup from "yup";
import Errordesign from "./errordesign";


const homecontact = () => {

	const validationSchema = Yup.object({
		name: Yup.string().max(30, "Must be 30 characters or less").required("Required"),
		email: Yup.string().email('Invalid email address').required('Required'),
		message: Yup.string().required("Required"),
	})

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	})

	return (
		<div className="w-[450px] min-h-[100px] flex flex-col items-start justify-start text-[white] p-[25px] border-[1px] border-[solid] border-[#1B182D] rounded-lg bg-[#0D0920]">
			<form className="gap-[15px] flex flex-col text-[black] w-full" onSubmit={formik.handleSubmit} autoComplete="off">
				<Input
					type="text"
					size="large"
					placeholder="Name"
					style={{ backgroundColor: "black", color: "white" }}
					className="contactinput"
					name="name"
					prefix={<Person />}
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.name && formik.errors.name ? <Errordesign>{formik.errors.name}</Errordesign> : null}
				<Input
					type="email"
					size="large"
					placeholder="Email"
					style={{ backgroundColor: "black", color: "white" }}
					className="contactinput"
					name="email"
					prefix={<Mail />}
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email ? <Errordesign>{formik.errors.email}</Errordesign> : null}
				<Input.TextArea
					size="large"
					name="message"
					style={{ minHeight: "150px", maxHeight: "150px", backgroundColor: "black", color: "white" }} placeholder="Message"
					className="contactinput"
					value={formik.values.message}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.message && formik.errors.message ? <Errordesign>{formik.errors.message}</Errordesign> : null}
				<button type="submit" className="bg-[#6C5A95] text-[white] p-[5px] rounded-lg cursor-pointer">
					Send message
				</button>


			</form>

		</div>
	)
}



export default homecontact