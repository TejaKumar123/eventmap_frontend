import Person from "@mui/icons-material/Person"
import Admin_speaker_row from "../../basic/admin/Admin_speaker_row"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Templatediv from "../../basic/other/Templatediv"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setHeading } from "../../../store/slices/otherSlice"

const Admin_speakers = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setHeading("Speakers"))
	}, [])

	return (
		<>
			<Templatediv>
				<table className="w-full">
					<tr className="" key={"head"}>
						<td className="p-[5px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]"><Person /></td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Name</td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Username</td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Email</td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Total Sessions</td>
						<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Created at</td>
						<td className="p-[2px_0px] text-center font-bold">Operations</td>
					</tr>
					<Admin_speaker_row icon={<AccountCircle />} name={"Teja Kumar"} username={"TejaKumar123"} email={"rr200075@rguktrkv.ac.in"} sessions={10} date={"12-10-2024"} />
					<Admin_speaker_row icon={<AccountCircle />} name={"Teja Kumar"} username={"TejaKumar123"} email={"rr200075@rguktrkv.ac.in"} sessions={10} date={"12-10-2024"} />
					<Admin_speaker_row icon={<AccountCircle />} name={"Teja Kumar"} username={"TejaKumar123"} email={"rr200075@rguktrkv.ac.in"} sessions={10} date={"12-10-2024"} />
				</table>
			</Templatediv>
		</>
	)
}

export default Admin_speakers