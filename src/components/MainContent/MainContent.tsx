import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllNewsQuery } from "../../store/newsApi";
import { countriesList } from "../../data/countries";
import News from "../SideMenu/News";
import SideMenu from "../SideMenu/SideMenu";

const MainContent = () => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: "768px" });
	const params = useParams();
	let id = "us";

	if (params.id) {
		id = params.id;
	}

	const { data, isLoading, isError, isSuccess } = useGetAllNewsQuery(
		id as string
	);

	const navigate = useNavigate();
	const [selectedCountry, setSelectedCountry] = useState(id);

	useEffect(() => {
		navigate(`/country/${selectedCountry}`);
	}, [selectedCountry]);

	return (
		<div className='w-full flex justify-center items-center '>
			<div className='flex container'>
				{isDesktopOrTablet && <SideMenu />}
				<div className='w-full'>
					{isLoading && <h1>Loading...</h1>}
					{isError && <h1>No News avaible</h1>}
					{isSuccess && (
						<>
							{!isDesktopOrTablet && (
								<div className="mt-4 ml-4">
									<p className="font-bold text-xl mb-1">News from:</p>
									<select
										className='border-2 rounded-md p-2 border-primary bg-backgroundColor text-whiteColor'
										name='country'
										value={id}
										onChange={(e) => setSelectedCountry(e.target.value)}>
										{countriesList.map((country) => (
											<option value={country.short} key={country.name}>
												{country.name}
											</option>
										))}
									</select>
								</div>
							)}
							<News articles={data.articles} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default MainContent;
