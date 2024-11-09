import imageasset from "../../../assets/images/imageasset";

const homeabout = () => {
	return (
		<div className="w-full flex flex-col items-center justify-start gap-[0px] mt-[100px]">
			<div className="w-[75%] h-auto flex flex-row items-center justify-between">
				<p className="px-[20px] py-[10px] bg-[#0D0920] border-[#1B182D] border-[1px] border-[solid] rounded-lg"><span className="text-[350%]">About EventMap</span><br /><br /><span className="text-[110%]">EventMap is designed to make organizing and attending conferences a breeze. Our mission is to simplify the process of scheduling, managing, and participating in events, so that everyone involved—organizers, speakers, and attendees—can focus on what truly matters: the exchange of knowledge and ideas.</span></p>
				<img src={imageasset.about1} className="w-[50%]" />
			</div>
			<div className="w-[75%] h-auto flex flex-row items-center justify-between gap-[20px]">
				<img src={imageasset.about2} className="w-[48%]" />
				<p className="self-start px-[20px] py-[10px] bg-[#0D0920] border-[#1B182D] border-[1px] border-[solid] rounded-lg"><span className="text-[350%]">Our Mission</span><br /><span className="text-[110%]">Our goal is to empower communities to host well-organized, engaging, and successful conferences without the usual stress of planning and coordination. We focus on delivering a flexible, feature-rich platform that puts users in control and enhances the overall conference experience.<br /><br />We believe that conferences are a gateway to innovation and collaboration. EventMap was built to remove the logistical challenges of event management, creating a space where ideas can flourish and meaningful connections can be made.</span></p>
			</div>
			<div className="w-[52%] min-h-[100px] mt-[50px] flex flex-row items-start justify-between flex-wrap gap-[20px]" id="aboutkey">
				<p className="text-[300%] px-[20px] py-[10px] bg-[#0D0920] border-[#1B182D] border-[1px] border-[solid] rounded-lg ">Key Features</p>
				<p className="w-full"></p>
				<div className="w-[330px] max-h-[200px] flex flex-col items-start justify-start bg-[#19172B] rounded-lg p-[15px] gap-[5px]">
					<img src={imageasset.about3} className="w-[30px]" />
					<p className="font-bold text-[100%]">Streamlined Scheduling</p>
					<p className="text-[90%]">Our intuitive platform enables admins and speakers to easily set up and adjust session schedules, ensuring the event stays organized and runs smoothly.</p>
				</div>
				<div className="w-[330px] max-h-[200px] flex flex-col items-start justify-start bg-[#19172B] rounded-lg p-[15px] gap-[5px]">
					<img src={imageasset.about4} className="w-[30px]" />
					<p className="font-bold text-[100%]">Real-Time Updates</p>
					<p className="text-[90%]">Stay informed with the latest updates, whether it’s a session change or a newly added event. Participants receive notifications so they never miss important information.</p>
				</div>
				<div className="w-[330px] max-h-[200px] flex flex-col items-start justify-start bg-[#19172B] rounded-lg p-[15px] gap-[5px]">
					<img src={imageasset.about5} className="w-[30px]" />
					<p className="font-bold text-[100%]">Efficient Communication</p>
					<p className="text-[90%]">Built-in messaging features allow you to connect and collaborate with other attendees, speakers, or organizers.</p>
				</div>
				<div className="w-[330px] max-h-[200px] flex flex-col items-start justify-start bg-[#19172B] rounded-lg p-[15px] gap-[5px]">
					<img src={imageasset.about6} className="w-[30px]" />
					<p className="font-bold text-[100%]">Customizable Agenda</p>
					<p className="text-[90%]">Attendees can create their own schedule by adding preferred sessions, ensuring a personalized experience that suits their interests.</p>
				</div>

			</div>
		</div>
	)
}

export default homeabout;