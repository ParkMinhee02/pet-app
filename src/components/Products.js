import React,{useEffect, useState} from 'react';
import { SiDatadog } from "react-icons/si";
import axios from "axios";
import './Products.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { API_URL } from '../config/constants';

const Products = () => {
   const [products, setProducts] = useState([]);
   const navigate = useNavigate();

   useEffect(()=>{
      let url=`${API_URL}/products`;
      axios.get(url)
      .then((result) =>{
         const products=result.data.products;
         setProducts(products)
         
      })
      .catch((error) =>{
         console.log(error)
      })
   }, []);
   console.log(products)
   return (
      <div className='products'>
         <h2>Products</h2>
         <p>상품업로드</p>
		 <Button size='large' icon={<DownloadOutlined />} className='button' onClick={() => navigate('/uploadpage')}>상품 업로드</Button>
         <div className="product-list">
			{
				products.map((product, id) => {
					return(
						<Link to={`/products/${product.id}`}>
							<div className="product-card" key={id}>
								<div className="productImg">
									<img src={`${API_URL}/${product.imageUrl}`} alt={product.name} className="product-img" />
								</div>
								<div className="product-content">
									<span className="product-name">{product.name}</span>
									<span className="product-price">{product.price}</span>
									<span className="product-seller">
										<SiDatadog className='icon' />
										<span>{product.seller}</span>
									</span>
								</div>
							</div>
						</Link>
					)
				})
			}
         </div>
      </div>
   );
};

export default Products;