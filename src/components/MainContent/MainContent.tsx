import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllNewsQuery } from "../../store/newsApi";
import News from "../SideMenu/News";
import SideMenu from "../SideMenu/SideMenu";

const MainContent = () => {
	const params = useParams();
	let id = "pl";

	if (params.id) {
		id = params.id;
	}

	const {data, isLoading, isError, isSuccess } = useGetAllNewsQuery(
		id as string
	);

		console.log(data)
	return (
		<div className='w-full flex justify-center items-center '>
			<div className='flex container'>
				<SideMenu />
				<div className='w-full'>
					{isLoading && <h1>Loading...</h1>}
					{isError && <h1>No News avaible</h1>}
					{isSuccess && <News articles={data.articles}/>}
				</div>
			</div>
		</div>
	);
};

export default MainContent;
