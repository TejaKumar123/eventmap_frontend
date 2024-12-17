import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const Participant_session = () => {
	return (
		<div className="w-[100%] h-auto">
			<Suspense fallback={<div>Loading Page...</div>} >
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Participant_session