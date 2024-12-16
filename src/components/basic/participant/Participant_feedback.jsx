import { Delete, Edit } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle"
import { Dialog } from "@mui/material";
import moment from "moment"
import { useState } from "react";
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Participant_feedback = ({ feedback, edit, deletef }) => {

	const { user } = useSelector(state => state.user);
	const [open, setOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [feedbackValue, setFeedbackValue] = useState(feedback?.feedback);

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const handleDeleteOpen = () => {
		setDeleteOpen(true);
	}

	const handleDeleteClose = () => {
		setDeleteOpen(false);
	}

	const deleteFeedback = async () => {
		deletef(feedback);
	}

	const editFeedback = async () => {
		handleClose();
		let criteria = { feedback_id: feedback.feedback_id };
		let updatedInfo = { feedback: feedbackValue };
		let data = { criteria, updatedInfo };
		edit(data);
	}

	return (
		<div className="w-full h-auto mt-[10px] flex flex-row items-start justify-start gap-[20px] px-[10px] py-[10px] rounded-lg bg-[#281D63]">
			<div className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden rounded-[100%]">
				{
					feedback?.creator?.profileimage ?
						<img src={feedback?.creator?.profileimage} className="w-[90%] h-[90%] rounded-[100%]" />
						:
						<AccountCircle />
				}
			</div>
			<div className="w-[90%] h-auto flex flex-col items-start justify-start gap-[5px]">
				<div className="w-auto h-[40px] overflow-hidden flex flex-col items-start justify-center">
					<p className="text-clip whitespace-nowrap font-bold">{feedback?.creator?.["username"]} </p>
					<p className="text-[90%] opacity-[0.5] font-bold">{moment(feedback?.date_time).format("YYYY-MM-DD")}</p>
				</div>
				<div className="w-auto h-auto text-wrap">
					<p className="text-wrap italic">
						{feedback?.["feedback"]}
					</p>
				</div>
			</div>
			{feedback?.creator?.["email"] == user.email &&
				<div className="w-[40px] h-full flex flex-col items-center justify-start gap-[10px] overflow-hidden">
					<Delete
						className="hover:bg-[black] text-[120%] rounded-[100%] p-[0px] cursor-pointer"
						onClick={handleDeleteOpen}
					/>
					<Edit
						className="hover:bg-black text-[120%] rounded-[100%] p-[0px] cursor-pointer"
						onClick={handleOpen}
					/>
				</div>
			}

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
				<div className="w-[400px] min-h-[10px] px-[15px] py-[15px] flex flex-col items-start justify-start bg-[#281D63] gap-[10px]">
					<p className="text-white font-bold text-[120%]">Edit Feedback</p>
					<textarea
						className="w-full min-h-[150px] max-h-[150px] bg-transparent border-b-[1px] px-[0px] outline-none text-white"
						placeholder="Enter the feedback"
						onChange={(event) => setFeedbackValue(event.target.value)}
						value={feedbackValue}
					></textarea>
					<button
						className="px-[10px] py-[2px] bg-blue-700 text-white text-[120%] rounded-[5px]"
						onClick={() => {
							editFeedback();
						}}
					>
						Edit
					</button>
				</div>
			</Dialog>

			<Dialog
				open={deleteOpen}
				onClose={handleDeleteClose}
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
					<p className="text-[110%] font-bold text-white">Do you really want to delete the feedback</p>
					<div className="w-full h-auto flex flex-row items-center justify-end gap-[15px] flex-wrap">
						<button
							className="px-[10px] py-[2px] rounded-[5px] bg-green-700 text-white"
							onClick={handleDeleteClose}
						>
							Cancel
						</button>
						<button
							className="px-[10px] py-[2px] rounded-[5px] bg-red-700 text-white"
							onClick={() => {
								handleDeleteClose();
								deleteFeedback();
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</Dialog>
		</div >
	)
}

export default Participant_feedback