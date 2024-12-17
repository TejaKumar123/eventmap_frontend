import Participant_content from "../components/major/participant/Participant_content"
import Participant_navbar from "../components/major/participant/Participant_navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const participant = () => {
	return (
		<div>
			<ToastContainer theme="dark" />
			<div className="w-[100%] h-auto text-[white]">
				<Participant_navbar />
				<Participant_content />
			</div>

		</div>
	)
}

export default participant