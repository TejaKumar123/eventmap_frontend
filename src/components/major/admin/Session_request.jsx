import Admin_session_card from "../../basic/admin/Admin_session_card"
import { sessionData } from "../../../assets/data/data"

const Session_request = () => {
	return (
		<div className="w-fit h-auto flex flex-row items-start justify-start flex-wrap gap-[15px] m-auto p-[10px]">
			{
				sessionData.map((data) => {
					if (data["acceptance"] == "pending") {
						return <Admin_session_card cardData={data} />
					}
				})
			}

		</div>
	)
}

export default Session_request;