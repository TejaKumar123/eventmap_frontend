import Person from "@mui/icons-material/Person"
import Admin_participant_row from "../../basic/admin/Admin_participant_row"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Templatediv from "../../basic/other/Templatediv"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setHeading } from "../../../store/slices/otherSlice"
import { userData } from "../../../assets/data/data"
import moment from "moment"

const Admin_participant = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setHeading("Participants"))
	}, [])

	return (
		<>
			<Templatediv>
				<table className="w-full">
					<tr className="text-[95%] sticky top-[-10px] bg-[#1b1342]" key={"head"}>
						<td className="p-[5px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]"><Person /></td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Name</td>
						{/* <td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Username</td> */}
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Email</td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Registered</td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Created at</td>
						<td className="p-[2px_0px] text-center font-bold">Operations</td>
					</tr>
					{
						userData.map((data) => {
							if (data["role"] == "participant") {
								return (
									<Admin_participant_row icon={<AccountCircle />} name={data["name"]} username={"TejaKumar123"} email={data["email"]} registered={1}
										date={moment(data["createdAt"]).format("DD-MM-YYYY")} />
								)
							}
						})
					}
				</table>
			</Templatediv>

		</>
	)
}

export default Admin_participant