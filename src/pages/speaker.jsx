import Speaker_navigation from "../components/major/speaker/Speaker_navigation"
import Speaker_navbar from "../components/major/speaker/Speaker_navbar"
import Speaker_content from "../components/major/speaker/Speaker_content"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const speaker = () => {
	return (
		<div className="w-[100%] h-auto">
			<Speaker_navbar />
			<div className="w-[100%] h-auto flex flex-col items-center justify-start">
				<Speaker_navigation />
				<Speaker_content />
			</div>
			<ToastContainer theme="dark" />
		</div>
	)
}

export default speaker