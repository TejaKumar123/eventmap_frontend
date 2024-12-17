import Delete from "@mui/icons-material/Delete"
import { v4 as uuid } from "uuid"

const Admin_speaker_row = ({ icon, name, username, email, sessions, date, onClick }) => {

	const deleteSpeaker = async () => {
		onClick(email);
	}

	return (
		<>
			<tr className="text-[95%]" key={uuid()}>
				<td className="p-[5px] text-center flex items-center justify-center">{icon}</td>
				<td className="p-[2px_0px] text-center">{name}</td>
				<td className="p-[2px_0px] text-center">{username}</td>
				<td className="p-[2px_0px] text-center">{email}</td>
				<td className="text-center">{sessions}</td>
				<td className="p-[2px_0px] text-center">{date}</td>
				<td className="p-[2px_0px] text-center">
					<Delete className="cursor-pointer" title="Delete this user" onClick={deleteSpeaker} />
				</td>
			</tr>
		</>
	)
}

export default Admin_speaker_row