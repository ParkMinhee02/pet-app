import React, { useState } from 'react';
import './FreshBox.scss';
import Card from './Card';
import data from '../data';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FreshBox = () => {
	let [petdata] = useState(data);
	return (
		<div className='FreshboxWrap'>
			<h2>Hello Fresh Box</h2>
			<p>We save you serious time</p>
			<div className="freshSlider">
				<Swiper className='freshboxSwiper'
					modules={[Navigation, Pagination]}
					spaceBetween={50}
					slidesPerView={4}
					Navigation
					Pagination={{type: 'fraction'}}
					loop={true}
					autoplay={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
				<SwiperSlide>
					<div className="freshList">
						<Link to=''>
							<div className="imgBox">
								<img src={process.env.PUBLIC_URL + './img/img01.jpg'} alt="" />
							</div>
							<div className="textBox"><p>Title</p></div>
							<div className="priceBox"><p>Title</p></div>
							<div className="numberBox"><p>Title</p></div>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="freshList">
						<Link to=''>
							<div className="imgBox">
								<img src={process.env.PUBLIC_URL + './img/img02.jpg'} alt="" />
							</div>
							<div className="textBox">Title</div>
							<div className="priceBox">Title</div>
							<div className="numberBox">Title</div>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="freshList">
						<Link to=''>
							<div className="imgBox">
								<img src={process.env.PUBLIC_URL + './img/img03.jpg'} alt="" />
							</div>
							<div className="textBox">Title</div>
							<div className="priceBox">Title</div>
							<div className="numberBox">Title</div>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="freshList">
						<Link to=''>
							<div className="imgBox">
								<img src={process.env.PUBLIC_URL + './img/img04.jpg'} alt="" />
							</div>
							<div className="textBox">Title</div>
							<div className="priceBox">Title</div>
							<div className="numberBox">Title</div>
						</Link>
					</div>
				</SwiperSlide>
			</Swiper>
			</div>
		</div>
	);
};

export default FreshBox;