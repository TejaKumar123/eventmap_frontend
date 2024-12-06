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
import Person from "@mui/icons-material/Person"
import "react-toastify/dist/ReactToastify.css";
import { Bounce, Flip, Slide, toast, ToastContainer, Zoom } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setAuthDet } from "../../../store/slices/authSlice.jsx"
import { setUser } from "../../../store/slices/userSlice.jsx"

const signup = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignup = async (res) => {
		setLoading(true);
		try {
			res["type"] = "google";
			res["code"] = res.code;
			const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, res, {
				withCredentials: true,
			});
			if (result?.data?.status == "ok" && result?.data?.user) {
				toast.success(result?.data?.message);
				dispatch(setUser(result.data.user));
				dispatch(setAuthDet({ login: true, role: result?.data?.user?.role }))
				navigate("/dashboard", { replace: true });
			}
			else {
				toast.error(result?.data?.message);
			}
		}
		catch (err) {
			toast.error("error occured");
			/* console.log(err); */
		}
		setLoading(false);
	}

	const signup = useGoogleLogin({
		onSuccess: (res) => handleSignup(res),
		onError: (er) => console.log(er),
		/* scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email',
		accessType: 'offline',
		prompt: 'consent', */
		flow: "auth-code"
	})


	const normalSignup = async (data) => {
		setLoading(true);
		data["type"] = "normal";
		try {
			const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, data, {
				withCredentials: true,
			});
			//console.log(res);
			if (res?.data?.status == "ok" && res?.data?.user) {
				toast.success(res?.data?.message);
				console.log(res);
				dispatch(setUser(res?.data?.user));
				dispatch(setAuthDet({ login: true, role: res?.data?.user?.role }));
				navigate("/dashboard", { replace: true })
			}
			else if (res?.data?.status == "error") {
				toast.error(res?.data?.message);
			}
		}
		catch (er) {
			toast("error occured");
			/* console.log({ error: er }); */
		}
		setLoading(false);
	}

	const validationSchema = Yup.object({
		username: Yup.string().required("required"),
		email: Yup.string().email("invalid email").required("required"),
		password: Yup.string().min(8, "Password should contain 8 characters").required("required"),
		againpassword: Yup.string().equals([Yup.ref("password")], "password should matched").required("*required")
	})

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			againpassword: ""
		},
		validationSchema,
		onSubmit: (values) => {
			normalSignup(values);
		}
	})


	return (
		<>
			<div className="w-[350px] min-h-[100px] m-auto mt-[100px] flex flex-col items-center justify-start gap-[10px] py-[15px] px-[20px] rounded-lg bg-[#0D0920] border-[#1B182D] border-[1px] border-[solid] text-[white]">
				{loading ?
					<LinearProgress style={{ width: "100%", backgroundColor: "#6C5A95" }} /> : null
				}
				<p className="text-[210%] mb-[10px]">SignUp</p>
				<form className="w-full flex flex-col items-start justify-start gap-[15px]" onSubmit={formik.handleSubmit} autoComplete="off">
					<Input
						type="text"
						placeholder="Username"
						className="contactinput"
						style={{ backgroundColor: "black", color: "white" }}
						suffix={<Person />}
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.username && formik.errors.username ? <Errordesign>{formik.errors.username}</Errordesign> : null}
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
					<Input.Password
						placeholder="confirm password"
						className="contactinput"
						style={{ backgroundColor: "black", color: "white" }}
						suffix={<Password />}
						iconRender={(visible) => (visible ? <Visibility /> : <VisibilityOff />)}
						name="againpassword"
						value={formik.values.againpassword}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.againpassword && formik.errors.againpassword ? <Errordesign>{formik.errors.againpassword}</Errordesign> : null}
					<button type="submit" className="w-full bg-[#6C5A95] text-[white] p-[5px] rounded-lg cursor-pointer">
						Signup
					</button>
				</form>
				<p>Already have an account? <span className="cursor-pointer text-[#2727e7]" onClick={() => navigate("/login")}>Login</span></p>
				<Divider style={{ color: "white", borderColor: "#6C5A95" }}>or</Divider>
				<Button
					icon={<img className="w-[20px]" src={imageasset.google_icon} />}
					style={{ fontWeight: "bold", border: "1px solid #1B182D", outline: "none" }}
					onClick={signup}
				>
					Google
				</Button>


			</div>
			<ToastContainer position='top-right' transition={Bounce} theme='dark' draggable />
		</>
	)
}

export default signup;