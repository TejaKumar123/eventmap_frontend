import Person from "@mui/icons-material/Person"
import Admin_participant_row from "../../basic/admin/Admin_participant_row"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Templatediv from "../../basic/other/Templatediv"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setHeading } from "../../../store/slices/otherSlice"
import { userData } from "../../../assets/data/data"
import moment from "moment"
import { v4 as uuid } from "uuid"
import { findUser } from "../../../store/slices/userSlice"

const Admin_participant = () => {

	const dispatch = useDispatch();
	const [userData, setUserData] = useState([]);

	const fetchParticipants = async () => {
		let criteria = { role: "participant" };
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
		dispatch(setHeading("Participants"));
		fetchParticipants();
	}, [])

	return (
		<>
			<Templatediv>
				{userData.length != 0 ?
					<table className="w-full" key={uuid()}>
						<tr className="text-[95%] sticky top-[-10px] bg-[#1b1342]" key={uuid()}>
							<td className="p-[5px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]"><Person /></td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Name</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Username</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Email</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Registered</td>
							<td className="p-[2px_0px] text-center font-bold border-r-[rgba(255,255,255,0.3)] border-r-[1px]">Created at</td>
							<td className="p-[2px_0px] text-center font-bold">Operations</td>
						</tr>
						{
							userData.map((data) => {
								if (data?.status == "fulfilled" && data?.value?.["role"] == "participant") {
									return (
										<Admin_participant_row
											icon={data?.value?.profileimage ?
												<img src={data?.value?.profileimage} className="w-[25px] rounded-[100%]" />
												: < AccountCircle />}
											name={data?.value?.["name"]}
											username={data?.value?.["username"]}
											email={data?.value?.["email"]}
											registered={data?.value?.["registerCount"]}
											date={moment(data?.value?.["createdAt"]).format("DD-MM-YYYY")}
											onClick={deleteParticipant}
										/>
									)
								}
							})
						}
					</table>
					:
					<p className="text-center opacity-[0.5] text-[150%]">There are no participants in eventmap</p>
				}
			</Templatediv>

		</>
	)
}

export default Admin_participant