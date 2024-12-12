import Delete from "@mui/icons-material/Delete"
import { v4 as uuid } from "uuid"

const Admin_participant_row = ({ icon, name, username, email, registered, date }) => {
	return (
		<>
			<tr className="text-[95%]" key={uuid()}>
				<td className="p-[5px] text-center">{icon}</td>
				<td className="p-[2px_0px] text-center">{name}</td>
				{/* <td className="p-[2px_0px] text-center">{username}</td> */}
				<td className="p-[2px_0px] text-center">{email}</td>
				<td className="text-center">{registered}</td>
				<td className="p-[2px_0px] text-center">{date}</td>
				<td className="p-[2px_0px] text-center">
					<Delete className="cursor-pointer" title="Delete this user" />
				</td>
			</tr>
		</>
	)
}

export default Admin_participant_row