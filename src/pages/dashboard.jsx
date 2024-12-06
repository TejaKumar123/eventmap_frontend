import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom";

const dashboard = () => {
	const login = useSelector((state) => state.auth.login)
	const role = useSelector((state) => state.auth.role)
	/* console.log(role); */
	if (!login) {
		return <Navigate to={"/login"} />
	}
	else {
		if (role == "admin") {
			return <Navigate to={"/admin"} />
		}
		else if (role == "speaker") {
			return <Navigate to={"/speaker"} />
		}
		else if (role == "participant") {
			return <Navigate to={"/participant"} />
		}
		else {
			<Navigate to={"/notfound"} />
		}
	}

}

export default dashboard