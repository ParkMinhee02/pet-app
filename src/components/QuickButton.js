import React, { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

const QuickButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY>300);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	},[]);

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}

	return isVisible && (
		<div className='QuickButton' onClick={scrollToTop} style={{position: 'fixed', right: '3%', bottom: '4%', zIndex: 111, cursor: 'pointer'}}>
			<IoIosArrowDropupCircle style={{fontSize: '50px', color: '#3acbb0'}} />
		</div>
	);
};

export default QuickButton;