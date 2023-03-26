import React from "react";
import SideMenu from "../SideMenu/SideMenu";

const MainContent = () => {
	return (
		<div className='w-full h-screen bg-primary'>
			<div className='flex container'>
				<SideMenu />
				<div className=" w-2/3">MainContent</div>
			</div>
		</div>
	);
};

export default MainContent;
