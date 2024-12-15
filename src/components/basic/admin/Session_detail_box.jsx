import { v4 as uuid } from "uuid"

const Session_detail_box = ({ text1, text2 }) => {
	return (
		<div className="w-fit h-auto flex flex-col items-center justify-start p-[10px] rounded-[10px] bg-[#281d63] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.1)] hover:translate-y-[2px] transition-[0.25s]" draggable="true" key={uuid()}>
			<p className="font-bold text-center">{text1}</p>
			<p className="text-[95%] text-center">{text2}</p>
		</div>
	)
}

export default Session_detail_box