import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "../../elements/Button/Button";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";

const Header = () => {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		showPopup
			? (document.body.style.overflow =  "hidden")
			: (document.body.style.overflow = "auto");
	},[showPopup]);
	
	return (
		<>
		{showPopup && <Popup setShowPopup={setShowPopup}/>}
		<header className='flex justify-between items-center h-28 w-full bg-backgroundColor px-4 shadow-[0_0_8px_1px_#575757]'>
			<a href='/' className='text-secondary text-3xl md:text-4xl '>
				<span className=' text-primary'>gn</span>News<span className="text-primary">.</span>
			</a>
			<div className='flex'>
				<BsFillGridFill
					size={25}
					className='cursor-pointer mx-3 hover:text-primary duration-200 text-whiteColor'
				/>
				<AiOutlineUnorderedList
					size={25}
					className='cursor-pointer hover:text-primary duration-200 text-whiteColor'
				/>
			</div>
			<Button className='w-24 h-10' text='Modal' onClick={() => setShowPopup(true)} />
		</header>
		</>
	);
};

export default Header;
