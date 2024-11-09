import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const homeservices = () => {
	return (
		<div className="w-[55%] m-auto min-h-[300px] flex flex-row items-center justify-between flex-wrap mt-[50px] gap-[10px] p-[25px] rounded-lg border-[1px] border-[solid] border-[#2a2546]">
			<div className='flex flex-col items-center justify-start gap-[10px]'>
				<Accordion sx={{ backgroundColor: "#0D0920", color: "white", width: "300px", }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					>
						For Organizers & Admins
					</AccordionSummary>
					<AccordionDetails>
						1. Conference Management<br />
						2. Session Scheduling<br />
						3. Real-Time Notifications
					</AccordionDetails>
				</Accordion>
				<Accordion sx={{ backgroundColor: "#0D0920", color: "white", width: "300px" }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					>
						For Speakers
					</AccordionSummary>
					<AccordionDetails>
						1. Session Management<br />
						2. Participant Engagement<br />

					</AccordionDetails>
				</Accordion>
				<Accordion sx={{ backgroundColor: "#0D0920", color: "white", width: "300px" }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />
						}>
						For Participants
					</AccordionSummary>
					<AccordionDetails>
						1. Personalized Schedule<br />
						2. Networking Opportunities<br />
						3. Seamless Conference Experience
					</AccordionDetails>
				</Accordion>
			</div>
			<p className="text-[250%] px-[25px] py-[5px] bg-[#6C5A95] border-[#1B182D] border-[1px] border-[solid] rounded-[20px]">Our Services</p>

		</div>
	)
}

export default homeservices