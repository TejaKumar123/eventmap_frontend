import Home_getintouch from "../../basic/home/home_getintouch"
import Homecontact from "../../basic/home/homecontact"

const home_footer = () => {
	return (
		<div className="w-full min-h-[100px] flex flex-row items-center justify-center gap-[100px] p-[50px] mt-[50px]">
			<Home_getintouch />
			<Homecontact />
		</div>
	)
}

export default home_footer