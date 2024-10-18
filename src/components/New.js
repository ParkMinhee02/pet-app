import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import NewCard from './NewCard';
import data1 from '../data/data1';
import './new.scss';

const New = () => {
	let [adddata] = useState(data1);
	return (
		<div className='newWrap'>
			<h2>LOCATION</h2>
			<p>A Revolution In Pet Supply Discount Stores</p>
			<div className="newSlider">
				<Swiper className='newboxSwiper'
					spaceBetween={5}
					slidesPerView={5}
					modules={[Autoplay]}
					autoplay={{
						delay: 0,
						disableOnInteraction: false
					}}
					speed={5000}
					loopAdditionalSlides={1}
					loop={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{
						adddata.map((data1, i) => {
							return (
								<SwiperSlide key={i}>
									<NewCard data={data1} key={i} i={i} />
								</SwiperSlide>
							);
						})
					}
			</Swiper>
			</div>
		</div>
	);
};

export default New;