import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";

const Popup = ({ setShowPopup, article }: popupPropsType) => {
	const { t } = useTranslation();

	return (
		<>
			{!article && (
				<div className='fixed w-full h-screen bg-blackColor bg-opacity-60 top-0 left-0 z-10'>
					<div className='w-full h-screen flex justify-center items-center '>
						<div
							className='w-full max-w-3xl min-h-[250px] mx-4 p-8 rounded-md 
						bg-backgroundColor border border-whiteColor flex 
						flex-col justify-between relative  duration-300'>
							<h2 className='font-bold text-lg text-primary'>
								Co sprawiło mi trudność?
							</h2>
							<p className='text-whiteColor my-3'>
								Myślę, że napisanie testów, ponieważ nie miałem wcześniej okazji w
								moich projektach tego robić więc było to dla mnie coś nowego oraz brakło mi czasu na zagłębienie się w temat testów.
							</p>

							<h2 className='font-bold text-lg text-primary'>
								Co sprawiło mi największą frajdę?
							</h2>
							<p className='text-whiteColor my-3'>
								Całokształt, efekt mojej pracy, który uważam za dobry jak na
								wyznaczony przez Państwa czas (12h)
							</p>
							<GrClose
								className='absolute top-3 right-3 cursor-pointer hover:scale-125 duration-200'
								size={20}
								onClick={() => setShowPopup(false)}
							/>
						</div>
					</div>
				</div>
			)}
			{article && (
				<div className='fixed w-full h-screen bg-blackColor bg-opacity-60 top-0 left-0 z-10'>
					<div className='w-full h-screen flex justify-center items-center '>
						<div className='w-full max-w-3xl min-h-[250px] mx-4 p-8 rounded-md bg-backgroundColor border border-whiteColor flex flex-col justify-between relative'>
							<h2 className='font-bold text-lg text-primary'>
								{article.title}
							</h2>
							<p className='text-whiteColor my-3'>{article.description}</p>
							<div className='flex justify-between items-center'>
								<a
									className='text-primary hover:underline'
									href={article.url}
									target='_blank'
									rel='noreferrer'>
									{t('goArticle')}
								</a>
								<p className='text-secondary'>{article.author}</p>
							</div>
							<GrClose
								className='absolute top-3 right-3 cursor-pointer hover:scale-125 duration-200'
								size={20}
								onClick={() => setShowPopup(false)}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

interface popupPropsType {
	setShowPopup: any;
	article?: {
		title: string;
		description: string;
		url: string;
		author: string;
	};
}

export default Popup;
