import clsx from "clsx";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../hooks";
import { selectView } from "../../store/newsViewSlice";
import Popup from "../Popup/Popup";

const News = ({ articles }: newsPropsType) => {
	const [showPopup, setShowPopup] = useState(false);
	const isMobile = useMediaQuery({ maxWidth: '767px'});
	const [popupArticle, setPopupArticle] = useState({
		title: "",
		description: "",
		url: "",
		author: "",
	});

	const view = useAppSelector(selectView);

	useEffect(() => {
		showPopup
			? (document.body.style.overflow =  "hidden")
			: (document.body.style.overflow = "auto");
	},[showPopup]);

	return (
		<>
			{showPopup && (
				<Popup article={popupArticle} setShowPopup={setShowPopup} />
			)}
			<div
				className={clsx("grid grid-cols-2 gap-3 my-6 mx-4", {
					" grid-cols-none": view || isMobile,
				})}>
				{articles.map((article) => (
					<div
						className='flex flex-col justify-between p-4 w-full border-2 rounded-md border-secondary cursor-pointer hover:bg-backgroundColor hover:text-whiteColor duration-300'
						key={article.title} onClick={() => {
							setShowPopup(true);
							setPopupArticle(article);
						}}>
						<p className='text-primary text-xs md:text-base'>
							{article.source.name}
						</p>
						<div className='flex justify-between my-2'>
							<h2 className='font-bold text-sm lg:text-base'>{article.title}</h2>
							{!view && article.urlToImage ? (
								<img
									className='w-24 h-16 ml-3 border-2 border-primary rounded-xl'
									src={article.urlToImage}
									alt='article img'
								/>
							) : null}
						</div>
						{!view && <p className='text-xs lg:text-sm my-2'>{article.description}</p>}
						<p className='text-primary font-bold text-right text-sm'>
							{article.publishedAt.substring(10, 0)}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

interface newsPropsType {
	articles: [
		{
			title: string;
			source: {
				name: string;
			};
			publishedAt: string;
			urlToImage: string;
			description: string;
			url: string;
			author: string;
		}
	];
}

export default News;
