import React from "react";
import { useNavigate } from "react-router-dom";

const Country = ({ country }: countryPropsType) => {
	const navigate = useNavigate();

	return (
		<div
			className='flex items-center my-4'
			onClick={() => navigate(`/country/${country.short}`)}>
			<img
				className='w-10 h-10'
				src={country.flagURL}
				alt={country.name + " flag"}
			/>
			<p className='hover:text-primary duration-200 cursor-pointer mx-3'>
				{country.name}
			</p>
		</div>
	);
};

interface countryPropsType {
	country: {
		name: string;
		flagURL: string;
		short: string;
	};
}

export default Country;
