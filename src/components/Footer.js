import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footerWrap'>
			<div className="footer-inner">
				<div>
					<p>
						<Link to='/'>소개</Link>
						<Link to='/'>이용약관</Link>
						<Link to='/'>스토어 가이드</Link>
						<Link to='/'>개인정보처리방침</Link>
						<Link to='/'>고객지원센터</Link>
					</p>
				</div>
				<address>
					주소: 경남 김해시 상도면 장착로 236-112 컨테이너 <br />
					고객센터 010) 1234 - 1234 | 통신판매업신고: 2023 경남김해 - 1245
				</address>
			</div>
		</div>
	);
};

export default Footer;