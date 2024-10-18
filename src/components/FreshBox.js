import React, { useContext } from 'react';
import './FreshBox.scss';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DataContext } from '../App';

const FreshBox = () => {
		const {petdata} = useContext(DataContext);

	return (
		<div className='FreshboxWrap'>
			<h2>HELLO FRESH BOX</h2>
			<p>We save you serious time</p>
			<div className="freshSlider">
				<Swiper className='freshboxSwiper'
					modules={[Navigation, Pagination, Autoplay]}
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
								<SwiperSlide key={i}>
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