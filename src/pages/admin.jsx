import Admin_content from "../components/major/admin/Admin_content"
import Admin_navbar from "../components/major/admin/Admin_navbar"
import Admin_sidebar from "../components/major/admin/Admin_sidebar"

const admin = () => {
	return (
		<div className="text-[white] w-[100%] flex flex-col items-center justify-start">
			<Admin_navbar />
			<div className="w-[100%] h-screen overflow-y-auto flex flex-row items-start justify-between">
				<Admin_sidebar />
				<Admin_content />
			</div>
		</div>
	)
}

export default admin