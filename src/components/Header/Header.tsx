import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "../../elements/Button/Button";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";
import i18n from "../../i18next";
import { useTranslation } from "react-i18next";
import { changeNewsView, selectView } from "../../store/newsViewSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import clsx from "clsx";

const Header = () => {
	const [showPopup, setShowPopup] = useState(false);
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const view = useAppSelector(selectView);

	const handleChangeLang = (value: string) => {
		i18n.changeLanguage(value);
		localStorage.setItem("lang", value);
	};

	const handleChangeNewsToList = () => {
		dispatch(changeNewsView(true));
	}

	const handleChangeNewsToBlock = () => {
		dispatch(changeNewsView(false));
	}

	useEffect(() => {
		showPopup
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	}, [showPopup]);

	return (
		<>
			{showPopup && <Popup setShowPopup={setShowPopup} />}
			<header className='flex justify-between items-center h-28 w-full bg-backgroundColor px-4 shadow-[0_0_8px_1px_#575757] relative'>
				<div className='flex absolute top-1 left-5 text-secondary'>
					<p className='cursor-pointer hover:text-whiteColor duration-200' onClick={() => handleChangeLang("eng")}>
						ENG
					</p>
					<span className='mx-1 text-primary'>|</span>
					<p className='cursor-pointer hover:text-whiteColor duration-200' onClick={() => handleChangeLang("pl")}>
						PL
					</p>
				</div>
				<a href='/' className='text-secondary text-3xl md:text-4xl '>
					<span className=' text-primary'>gn</span>News
					<span className='text-primary'>.</span>
				</a>
				<div className='flex'>
					<BsFillGridFill
						data-testid="blockIcon"
						size={25}
						className={clsx('cursor-pointer mx-3 hover:text-secondary duration-200 text-whiteColor', {'!text-primary' : !view})}
						onClick={handleChangeNewsToBlock}
					/>
					<AiOutlineUnorderedList
						data-testid="listIcon"
						size={25}
						className={clsx('cursor-pointer mx-3 hover:text-primary duration-200 text-whiteColor', {'!text-primary' : view})}
						onClick={handleChangeNewsToList}
					/>
				</div>
				<Button
					className='w-24 h-10'
					text={t('more')}
					onClick={() => setShowPopup(true)}
				/>
			</header>
		</>
	);
};

export default Header;
