import { AccountCircle, ArrowDropDown, Logout, Settings } from "@mui/icons-material"
import { Menu } from "@mui/material";
import { useState } from "react";


const Speaker_navbar = () => {

	const [anchorElement, setAnchorElement] = useState(null);
	const open = Boolean(anchorElement);

	const handleClose = () => {
		setAnchorElement(null);
	};
	const handleOpen = (event) => {
		setAnchorElement(event.currentTarget);
	};

	return (
		<div className="text-white w-full h-[60px] bg-[#1b1342] border-[#1B182D] flex flex-row items-center justify-between px-[15px] pt-[10px] fixed top-[0px] z-[10]">
			<p className="font-bold text-[110%]">Speaker</p>
			<div className="text-white min-w-[100px] h-full flex flex-row items-center justify-between gap-[15px]">
				<div className="rounded-[50%] flex items-center justify-center">
					<AccountCircle />
				</div>
				<div className="w-fit h-full flex flex-col items-center justify-around">
					<p className="text-[95%]">N.Teja kumar</p>
					<p className="text-[95%]">Admin</p>
				</div>
				<div className="p-[4px] rounded-[50%] border-[#1B182D] hover:border-[white] flex items-center justify-center border cursor-pointer"
					onClick={handleOpen}
				>
					<ArrowDropDown />
				</div>
			</div>
			<Menu
				disableScrollLock={true}
				anchorEl={anchorElement}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						style: {
							padding: "0px",
							backgroundColor: "#1b1342",
							border: "1px solid #1B182D"
						},

						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'&::before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								borderLeft: "1px solid #1B182D",
								borderTop: "1px solid #1B182D",
								top: 0,
								right: 10,
								width: 10,
								height: 10,
								bgcolor: '#1b1342',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}
				}}

			>
				<div className="w-auto h-auto bg-[#1b1342]">
					<div className="w-full h-auto flex gap-[5px] text-[white] px-[15px] py-[5px] cursor-pointer text-[95%]">
						<Settings />
						<p>Settings</p>
					</div>
					<div className="w-[100%] h-auto flex gap-[5px] text-[white] px-[15px] py-[5px] cursor-pointer text-[95%]">
						<Logout />
						<p>Logout</p>
					</div>
				</div>
			</Menu>

		</div>
	)
}

export default Speaker_navbar