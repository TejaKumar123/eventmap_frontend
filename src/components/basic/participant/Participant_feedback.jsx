import AccountCircle from "@mui/icons-material/AccountCircle"
import moment from "moment"

const Participant_feedback = ({ feedback }) => {
	return (
		<div className="w-full h-auto mt-[10px] flex flex-row items-start justify-start gap-[20px] px-[10px] py-[10px] rounded-lg bg-[#281D63]">
			<div className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden rounded-[50%]">
				{
					feedback?.creator?.profileimage ?
						<img src={feedback?.creator?.profileimage} className="w-[90%] h-[90%] rounded-[100%]" />
						:
						<AccountCircle />
				}
			</div>
			<div className="w-fit h-auto flex flex-col items-start justify-start gap-[5px]">
				<div className="w-auto h-[40px] overflow-hidden flex flex-col items-start justify-center">
					<p className="text-clip whitespace-nowrap font-bold">{feedback?.creator?.["username"]} </p>
					<p className="text-[90%] opacity-[0.5] font-bold">{moment(feedback?.date_time).format("YYYY-MM-DD")}</p>
				</div>
				<div className="w-auto h-auto text-wrap">
					<p className="text-wrap">
						{feedback?.["feedback"]}
					</p>
				</div>
			</div>

		</div>
	)
}

export default Participant_feedback