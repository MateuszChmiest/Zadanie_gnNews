import React from "react";
import SideMenu from "../SideMenu/SideMenu";

const MainContent = () => {
	return (
		<div className='w-full '>
			<div className='flex container'>
				<SideMenu />
				<div className="">MainContent</div>
			</div>
		</div>
	);
};

export default MainContent;
