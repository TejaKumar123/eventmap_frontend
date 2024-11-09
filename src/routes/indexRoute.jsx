import Notfound from "../pages/notfound";
import Homepage from "../components/major/home/homepage";
import Login from "../components/major/home/login";
import Signup from "../components/major/home/signup";
import Dashboard from "../pages/dashboard";
import Admin from "../pages/admin";
import Speaker from "../pages/speaker";
import Participant from "../pages/participant";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Admin_session from "../components/major/admin/Admin_session";
import Admin_speakers from "../components/major/admin/Admin_speakers";
import Admin_participant from "../components/major/admin/Admin_participant";
import Admin_settings from "../components/major/admin/Admin_settings";
import Session_request from "../components/major/admin/Session_request";
import Session_view from "../components/major/admin/Session_view";
import Session_add from "../components/major/admin/Session_add";
import Admin_session_details from "../components/major/admin/Admin_session_details";
import Session_edit from "../components/major/admin/Session_edit";

const IndexRoute = () => {

	const login = useSelector((state) => state.auth.login);
	const role = useSelector((state) => state.auth.role);

	return (
		<>
			<Routes>
				<Route path="/" element={login ? <Navigate to={"/dashboard"} /> : <Homepage />} />
				<Route path="/login" element={login ? <Navigate to={"/dashboard"} /> : <Login />} />
				<Route path="/signup" element={login ? <Navigate to={"/dashboard"} /> : <Signup />} />
				<Route path="/dashboard" element={login ? <Dashboard /> : <Navigate to={"/login"} />} />
				{/* <Route path="/admin" element={login && role == "admin" ? <Admin /> : <Navigate to={"/login"} />} /> */}
				<Route path="/admin" element={<Admin />}>
					<Route path="sessions" element={<Admin_session />} >
						<Route path="requests" element={<Session_request />} />
						<Route path="view" element={<Session_view />} />
						<Route path="add" element={<Session_add />} />
						<Route path=":sessionid" element={<Admin_session_details />} />
						<Route path="edit" element={<Session_edit />} />
					</Route>
					<Route path="speakers" element={<Admin_speakers />} />
					<Route path="participant" element={<Admin_participant />} />
					<Route path="settings" element={<Admin_settings />} />
				</Route>
				{/* <Route path="/speaker" element={login && role == "speaker" ? <Speaker /> : <Navigate to={"/login"} />} /> */}
				<Route path="/speaker" element={<Speaker />} >

				</Route>
				<Route path="/participant" element={login && role == "participant" ? <Participant /> : <Navigate to={"/login"} />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	)
}

export default IndexRoute;