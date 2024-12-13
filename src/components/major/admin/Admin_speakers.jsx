import Person from "@mui/icons-material/Person"
import Admin_speaker_row from "../../basic/admin/Admin_speaker_row"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Templatediv from "../../basic/other/Templatediv"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setHeading } from "../../../store/slices/otherSlice"
import moment from "moment"
import { findUser } from "../../../store/slices/userSlice"
import { v4 as uuid } from "uuid"


const Admin_speakers = () => {

	const dispatch = useDispatch();
	const [userData, setUserData] = useState([]);

	const fetchSpeakers = async () => {
		let criteria = { role: "speaker" };
		let projection = {};
		dispatch(findUser({ criteria, projection })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				setUserData(action?.payload?.data);
			}
			else {
				setUserData([]);
			}
		})
	}

	const deleteParticipant = async (email) => {
		alert(email);
	}

	useEffect(() => {
		dispatch(setHeading("Speakers"));
		fetchSpeakers();
	}, [])

	return (
		<>
			<Templatediv>
				{userData.length != 0 ?
					<table className="w-full" key={uuid()}>
						<tr className="" key={uuid()}>
							<td className="p-[5px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]"><Person /></td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Name</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Username</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Email</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Total Sessions</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Created at</td>
							<td className="p-[2px_0px] text-center font-bold">Operations</td>
						</tr>
						{userData.map((data) => {
							if (data?.status == "fulfilled" && data?.value?.["role"] == "speaker") {
								return (
									< Admin_speaker_row
										icon={data?.value?.profileimage ?
											<img src={data?.value?.profileimage} className="w-[25px] rounded-[100%]" />
											: < AccountCircle />}
										name={data?.value?.["name"]}
										username={data?.value?.["username"]}
										email={data?.value?.["email"]}
										sessions={data?.value?.sessionCount}
										date={moment(data?.value?.["createdAt"]).format("DD-MM-YYYY")}
										onClick={deleteParticipant}
									/>
								)
							}
						})}
					</table>
					:
					<p className="text-center opacity-[0.5] text-[150%]">There are no participants in eventmap</p>
				}
			</Templatediv>
		</>
	)
}

export default Admin_speakers