import AccountCircle from "@mui/icons-material/AccountCircle"


const Speaker_feedback = ({ feedback }) => {
	return (
		<div className="w-full h-auto mt-[10px] flex flex-row items-start justify-start gap-[20px] px-[10px] py-[10px] rounded-lg bg-[#281D63]">
			<div className="w-[40px] h-[40px] border flex items-center justify-center overflow-hidden rounded-[50%]">
				{/* <img src="" /> */}
				<AccountCircle />
			</div>
			<div className="w-fit h-auto flex flex-col items-start justify-start gap-[5px]">
				<div className="w-auto h-[40px] overflow-hidden flex flex-col items-start justify-center">
					<p className="text-clip whitespace-nowrap font-bold">{feedback?.["email"]}</p>
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

export default Speaker_feedback;