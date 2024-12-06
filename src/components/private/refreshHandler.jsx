import { useDispatch } from "react-redux"
import { setAuthDet } from "../../store/slices/authSlice"
import { useLayoutEffect } from "react"
import axios from "axios";
import { setUser } from "../../store/slices/userSlice";

const RefreshHandler = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		async function refresh() {
			try {
				const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/loginStatus`, {},
					{
						withCredentials: true,
					});
				/* console.log({ res: res }); */
				if (res?.data?.login && res?.data?.user) {
					dispatch(setAuthDet({ login: true, role: res?.data?.user?.role }));
					dispatch(setUser(res?.data?.user));
				}
				else {
					dispatch(setAuthDet({ login: false, role: null }));
					dispatch(setUser({}));
				}
			}
			catch (er) {
				/* console.log(er); */
				dispatch(setAuthDet({ login: false, role: null }));
				dispatch(setUser({}));
			}
		}
		refresh();
	}, []);

	return (
		<></>
	)
}

export default RefreshHandler;