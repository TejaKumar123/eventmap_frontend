import Person from "@mui/icons-material/Person"
import Admin_speaker_row from "../../basic/admin/Admin_speaker_row"
import AccountCircle from "@mui/icons-material/AccountCircle"
import Templatediv from "../../basic/other/Templatediv"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setHeading } from "../../../store/slices/otherSlice"
import moment from "moment"
import { deleteUser, findUser } from "../../../store/slices/userSlice"
import { v4 as uuid } from "uuid"
import { Dialog } from "@mui/material"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Admin_speakers = () => {

	const dispatch = useDispatch();
	const [userData, setUserData] = useState([]);
	const [open, setOpen] = useState(false);
	const [deletedEmail, setDeletedEmail] = useState("");

	const handleOpen = (email) => {
		setOpen(true);
		setDeletedEmail(email);
	};
	const handleClose = () => {
		setOpen(false);
		setDeletedEmail(false);
	};

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

	const deleteSpeaker = async (email) => {
		if (!email) { return; }
		let criteria = { email: email };
		dispatch(deleteUser({ criteria })).then(action => {
			/* console.log(action?.payload); */
			if (action?.payload?.status == "ok") {
				toast.success("speaker removed successfully");
				fetchSpeakers();
			}
			else {
				toast.error("error while removing the speaker");
			}
		})
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
										onClick={handleOpen}
									/>
								)
							}
						})}
					</table>
					:
					<p className="text-center opacity-[0.5] text-[150%]">There are no speakers in eventmap</p>
				}
			</Templatediv>

			<Dialog
				open={open}
				onClose={handleClose}
				sx={{
					width: "auto",
					height: "auto",
					overflow: "hidden",
					"& .MuiDialog-paper": {
						borderRadius: "5px",
						backgroundColor: "transparent",
					},
					"& .MuiDialog-container": {
						display: "flex",
						flexDirection: "row",
						alignItems: "start",
						justifyContent: "center"
					}
				}}
			>
				<div className="w-[400px] h-auto p-[15px] flex flex-col items-center justify-start flex-wrap bg-[#281D63] gap-[10px]">
					<p className="text-[110%] font-bold text-white">Do you really want to delete the speaker</p>
					<div className="w-full h-auto flex flex-row items-center justify-end gap-[15px] flex-wrap">
						<button
							className="px-[10px] py-[2px] rounded-[5px] bg-green-700 text-white"
							onClick={handleClose}
						>
							Cancel
						</button>
						<button
							className="px-[10px] py-[2px] rounded-[5px] bg-red-700 text-white"
							onClick={() => {
								deleteSpeaker(deletedEmail);
								handleClose();
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</Dialog>

		</>
	)
}

export default Admin_speakers