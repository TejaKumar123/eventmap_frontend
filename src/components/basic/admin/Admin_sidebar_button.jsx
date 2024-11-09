
const Admin_sidebar_button = ({ name, button_key, onClick, keyStatus, icon }) => {
	return (
		<div
			className="w-full flex flex-row items-center justify-start gap-[10px] px-[15px] py-[5px] cursor-pointer rounded-lg"
			style={{ backgroundColor: keyStatus == button_key ? "#6C5A95" : "#1b1342" }}
			onClick={onClick}
		>
			{icon}
			{name}
		</div>
	)
}

export default Admin_sidebar_button