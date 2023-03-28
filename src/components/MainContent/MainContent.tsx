import React from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { useGetAllNewsQuery } from "../../store/newsApi";
import News from "../SideMenu/News";
import SideMenu from "../SideMenu/SideMenu";

const MainContent = () => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: "768px" });
	const params = useParams();
	let id = "pl";

	if (params.id) {
		id = params.id;
	}

	const { data, isLoading, isError, isSuccess } = useGetAllNewsQuery(
		id as string
	);

	return (
		<div className='w-full flex justify-center items-center '>
			<div className='flex container'>
				{isDesktopOrTablet && <SideMenu />}
				<div className='w-full'>
					{isLoading && <h1>Loading...</h1>}
					{isError && <h1>No News avaible</h1>}
					{isSuccess && (
						<>
							{!isDesktopOrTablet && <select></select>}
							<News articles={data.articles} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default MainContent;
