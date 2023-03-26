import React, { useState } from "react";

const Footer = () => {
	const [time, setTime] = useState("");

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
		<footer className='flex justify-center items-center bg-backgroundColor w-full h-28 text-whiteColor text-lg'>
			<p className="mr-7">{time}</p>
      <p>News:</p>
		</footer>
	);
};

export default Footer;
