import { useTranslation } from "react-i18next";
import { countriesList } from "../../data/countries";
import Country from "./Country";

const SideMenu = () => {
	const {t} = useTranslation();

	return (
		<div className='w-[250px] ml-4'>
      <h3 className="text-xl font-bold my-3">{t('News from')}:</h3>
			{countriesList.map((country) => (
				<Country country={country} key={country.short} />
			))}
		</div>
	);
};

export default SideMenu;
