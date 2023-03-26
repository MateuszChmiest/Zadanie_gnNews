import React from "react";
import { countriesList } from "../../data/countries";
import Country from "./Country";

const SideMenu = () => {
	return (
		<div className=' w-60 border-r border-backgroundColor bg-secondary'>
      <h3 className="text-center text-2xl font-bold ml-2 my-3">News from:</h3>
			{countriesList.map((country) => (
				<Country country={country} />
			))}
		</div>
	);
};

export default SideMenu;
