import React, { useState } from 'react';
import './FreshBox.scss';
import Card from './Card';
import data from '../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FreshBox = () => {
	let [petdata] = useState(data);
	return (
		<div className='FreshboxWrap'>
			<h2>HELLO FRESH BOX</h2>
			<p>We save you serious time</p>
			<div className="freshSlider">
				<Swiper className='freshboxSwiper'
					modules={[Navigation, Pagination]}
					spaceBetween={50}
					slidesPerView={4}
					navigation
					pagination={{type: 'fraction'}}
					loop={true}
					autoplay={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{
						petdata.map((data, i) => {
							return (
								<SwiperSlide>
									<Card data={data} key={i} i={i} />
								</SwiperSlide>
							);
						})
					}
			</Swiper>
			</div>
		</div>
	);
};

export default FreshBox;