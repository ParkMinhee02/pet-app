import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.scss';
import { SiDatadog } from "react-icons/si";
import { API_URL } from '../config/constants';

const ProductPage = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios.get(`${API_URL}/products/${id}`)
		.then((result) => {
			setProduct(result.data)
		})
		.catch((error) => {
			console.log(error)
		})
	},[id]);
	console.log(product);

	if(product === null) {
		return <h1>상품정보를 받고 있습니다.</h1>
	}

	return (
		<div className='productPagewrap'>
			<button className='back-btn' onClick={() => navigate(-1)}>이전화면</button>
			<div className="image-box">
				<img src={`${API_URL}/${product.product.imageUrl}`} alt={product.product.name} />
			</div>
			<div className="profile-box">
				<SiDatadog className='icon' />
				<span className="product-seller">{product.product.seller}</span>
			</div>
			<div className="content-box">
				<div className="name">{product.product.name}</div>
				<div className="price">{product.product.price}</div>
				<div className="creatAt">2024. 10. 24.</div>
				<div className="description">{product.product.description}</div>
			</div>
		</div>
	);
};

export default ProductPage;