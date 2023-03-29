import { countriesList } from "../../data/countries";
import Country from "./Country";

const SideMenu = () => {
	return (
		<div className='w-[250px] ml-4'>
      <h3 className="text-2xl font-bold my-3">News from:</h3>
			{countriesList.map((country) => (
				<Country country={country} key={country.short} />
			))}
		</div>
	);
};

export default SideMenu;
