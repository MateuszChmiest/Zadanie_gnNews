import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useGetAllNewsQuery } from "../../store/newsApiSlice";

const Footer = () => {
	const { t } = useTranslation();
	const [time, setTime] = useState("");
	const params = useParams();
	let id = "pl";

	if (params.id) {
		id = params.id;
	}

	const { data } = useGetAllNewsQuery(id as string);

	const updateTime = () => {
		const date = new Date();
		let hours = date.getHours() as string | number;
		let minutes = date.getMinutes() as string | number;
		let seconds = date.getSeconds() as string | number;

		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		const currentTime = hours + ":" + minutes + ":" + seconds;

		setTime(currentTime);
	};

	setInterval(updateTime, 1000);

	return (
		<footer className='flex justify-center items-center bg-backgroundColor w-full h-28 text-whiteColor text-lg shadow-[0_0_8px_1px_#575757]'>
			<p className='mr-7'>{time}</p>
			<p>
				{t("news")}: {data ? data.totalResults : null}
			</p>
		</footer>
	);
};

export default Footer;
