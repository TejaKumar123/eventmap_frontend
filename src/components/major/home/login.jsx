import { Input, Divider, Button } from "antd"
import Email from "@mui/icons-material/Email"
import Password from "@mui/icons-material/Password"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { useFormik } from "formik"
import * as Yup from "yup";
import Errordesign from "../../basic/home/errordesign"
import { useNavigate } from "react-router-dom"
import imageasset from "../../../assets/images/imageasset.jsx"
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react"
import LinearProgress from "@mui/material/LinearProgress"
import "react-toastify/dist/ReactToastify.css";
import { Bounce, Flip, Slide, toast, ToastContainer, Zoom } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setAuthDet } from "../../../store/slices/authSlice.jsx"
import { setUser } from "../../../store/slices/userSlice.jsx"

const login = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async (data) => {
		setLoading(true);
		data["type"] = "google"
		try {
			let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, data, {
				withCredentials: true
			});
			if (res?.data?.status == "ok") {
				dispatch(setAuthDet({ login: true, role: res?.data?.user?.role }));
				dispatch(setUser(res?.data?.user));

				/* navigate("/dashboard", { replace: true }) */
			}
			else if (res?.data?.status == "error") {
				toast.error(res?.data?.message);
			}
		}
		catch (err) {
			toast.error("error occured");
			/* console.log(err); */
		}
		setLoading(false);
	}

	/* scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email', */
	/* accessType: 'offline',
	prompt: 'consent',
	flow: "auth-code" */ /// flow:"auth-code gives only code not access-token so we we have to remove it to get ccess-token"

	const login = useGoogleLogin({
		onSuccess: (res) => handleLogin(res),
		onError: (er) => console.log(er),
		flow: "auth-code"
	})

	const normalLogin = async (data) => {
		setLoading(true);
		data["type"] = "normal";
		try {
			let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, data, {
				withCredentials: true
			});
			/* console.log(res); */
			if (res?.data?.status == "ok") {
				toast.success(res?.data?.message);
				dispatch(setAuthDet({ login: true, role: res?.data?.user?.role }));
				dispatch(setUser(res?.data?.user));
				navigate("/dashboard", { replace: true })
			}
			else if (res?.data?.status == "error") {
				toast.error(res?.data?.message);
			}
		}
		catch (er) {
			toast.error("error occured");
			console.log({ error: er });
		}
		setLoading(false);
	}

	const validationSchema = Yup.object({
		email: Yup.string().email("invalid email").required("required"),
		password: Yup.string().required("required")
	})

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema,
		onSubmit: (values) => {
			normalLogin(values);
		}
	})

	return (
		<div className="w-[350px] min-h-[100px] m-auto mt-[100px] flex flex-col items-center justify-start gap-[10px] py-[15px] px-[20px] rounded-lg bg-[#0D0920] border-[#1B182D] border-[1px] border-[solid] text-[white]">
			<p className="text-[210%] mb-[10px]">Login</p>
			{loading ?
				<LinearProgress style={{ width: "100%", backgroundColor: "#6C5A95" }} /> : null
			}
			<form className="w-full flex flex-col items-start justify-start gap-[15px]" onSubmit={formik.handleSubmit} autoComplete="off">
				<Input
					type="email"
					placeholder="Email@abc.com"
					className="contactinput"
					style={{ backgroundColor: "black", color: "white" }}
					suffix={<Email />}
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email ? <Errordesign>{formik.errors.email}</Errordesign> : null}
				<Input.Password
					placeholder="password"
					className="contactinput"
					style={{ backgroundColor: "black", color: "white" }}
					suffix={<Password />}
					iconRender={(visible) => (visible ? <Visibility /> : <VisibilityOff />)}
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.password && formik.errors.password ? <Errordesign>{formik.errors.password}</Errordesign> : null}
				<button type="submit" className="w-full bg-[#6C5A95] text-[white] p-[5px] rounded-lg cursor-pointer">
					Login
				</button>
			</form>
			<p>Don't have an account? <span className="cursor-pointer text-[#2727e7]" onClick={() => navigate("/signup")}>Register</span></p>
			<Divider style={{ color: "white", borderColor: "#6C5A95" }}>or</Divider>
			<Button
				icon={<img className="w-[20px]" src={imageasset.google_icon} />}
				style={{ fontWeight: "bold", border: "1px solid #1B182D", outline: "none" }}
				onClick={login}
			>
				Google
			</Button>
			<ToastContainer position='top-right' transition={Bounce} theme='dark' draggable />

		</div>
	)
}

export default login