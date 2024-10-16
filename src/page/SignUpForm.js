import React, { useRef, useState } from 'react';
import './signUp.scss';
import { IoCheckmark } from "react-icons/io5";

const SignUpForm = () => {
	const idInputRef = useRef(null);
	const pwInputRef = useRef(null);
	const nameInputRef = useRef(null);
	const phoneInputRef = useRef(null);

	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [pw2, setPw2] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const idRule =/^[a-z0-9]{4,16}$/;
	const pwRule=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
	const nameRule =/^[a-zA-Z가-힣]{1,20}$/;
	const phoneRule =/^\d{8}$/;

	const [messages, setMessages] =useState({
		id: {text: '', color: ''},
		pw: {text: '', color: ''},
		pw2: {text: '', color: ''},
		name: {text: '', color: ''},
		phone: {text: '', color: ''}
	});

	const handleMessageChange = (key, text, color) => {
		setMessages((prevMessages) => ({
			...prevMessages,
			[key]: {text, color}
		}))
	};

	const handleId = (e) => {
		const newValue = e.target.value;
		setId(newValue)
		if(idRule.test(newValue)) {
			handleMessageChange('id', '사용가능한 아이디입니다.', 'success-color');
		} else if(newValue ==='') {
			handleMessageChange('id', '아이디를 입력해주세요.', 'error-color');
		} else {
			handleMessageChange('id', '아이디는 영문소문자 숫자 4글자 이상 가능합니다.', 'error-color');
			setId('');
		}
	};
	const handlePw = (e) => {
		const newPwValue = e.target.value;
		setPw(newPwValue)
		if(pwRule.test(newPwValue)) {
			handleMessageChange('pw', '사용가능한 비밀번호입니다.', 'success-color');
		} else if(newPwValue ==='') {
			handleMessageChange('pw', '비밀번호를 입력해주세요.', 'error-color');
		} else {
			handleMessageChange('pw', '비밀번호는 영문대소문자 숫자 특수기호 8글자 이상 가능합니다.', 'error-color');
			setPw('');
		}
	};
	const handlePw2 = (e) => {
		const newPw2Value = e.target.value;
		setPw2(newPw2Value)
		if(pw==='') {
			handleMessageChange('pw2', '비밀번호를 입력해주세요.', 'error-color');
		} else if(newPw2Value === pw) {
			handleMessageChange('pw2', '비밀번호가 일치합니다.', 'success-color');
		} else if(newPw2Value === '') {
			handleMessageChange('pw2', '비밀번호를 다시 입력해주세요.', 'error-color');
			setPw2('');
		} else {
			handleMessageChange('pw2', '비밀번호가 일치하지 않습니다.', 'error-color');
			setPw2('');
		}
	};
	const handleName = (e) => {
		const newNameValue = e.target.value;
		setName(newNameValue)
		if(nameRule.test(newNameValue)) {
			handleMessageChange('name', '사용가능한 이름입니다.', 'success-color');
		} else if(newNameValue ==='') {
			handleMessageChange('name', '이름을 입력해주세요.', 'error-color');
		} else {
			handleMessageChange('name', '이름을 다시 한번 확인해주세요.', 'error-color');
			setName('');
		}
	};
	const handlePhone = (e) => {
		const newPhoneValue = e.target.value;
		setPhone(newPhoneValue)
		if(phoneRule.test(newPhoneValue)) {
			handleMessageChange('phone', '사용가능한 전화번호입니다.', 'success-color');
		} else if(newPhoneValue ==='') {
			handleMessageChange('phone', '전화번호를 입력해주세요.', 'error-color');
		} else {
			handleMessageChange('phone', '전화번호를 다시 한번 확인해주세요.', 'error-color');
			setPhone('');
		}
	};

	return (
		<div className='signWrap'>
			<h2>회원가입</h2>
			<fieldset className='signUpArea'>
				<form action="#" method='post' name='signUp'>
					<ul>
						<li className="id-section">
							<div className="area-style">
								<label htmlFor="idArea" className='label-style'>아이디</label>
								<input ref={idInputRef} type="text" id="idArea" required size={20} value={id} onChange={(e) => {setId(e.target.value)}} onBlur={handleId} />
								<span className={`mes-style ${messages.id.color}`}>{messages.id.text}</span>
								<p className='help-style'><IoCheckmark /> 영문소문자 / 숫자 4 - 16자</p>
							</div>
						</li>
						<li className="pw-section">
							<div className="area-style">
								<label htmlFor="pwArea" className='label-style'>비밀번호</label>
								<input ref={pwInputRef} type="password" id="pwArea" required size={20} value={pw} onChange={(e) => {setPw(e.target.value)}} onBlur={handlePw} />
								<span className={`mes-style ${messages.pw.color}`}>{messages.pw.text}</span>
								<p className='help-style'><IoCheckmark /> 영문대소문자 / 숫자 / 특수문자 조합 8 - 16자</p>
								<br />
								<label htmlFor="pw2Area" className='label-style'>비밀번호 확인</label>
								<input type="password" id="pw2Area" required size={20} value={pw2} onChange={(e) => {setPw2(e.target.value)}} onBlur={handlePw2} />
								<span className={`mes-style ${messages.pw2.color}`}>{messages.pw2.text}</span>
							</div>
						</li>
						<li className="name-section">
							<div className="area-style">
								<label htmlFor="nameArea" className='label-style'>이름</label>
								<input ref={nameInputRef} type="text" id="nameArea" required size={20} value={name} onChange={(e) => {setName(e.target.value)}} onBlur={handleName} />
								<span className={`mes-style ${messages.name.color}`}>{messages.name.text}</span>
							</div>
						</li>
						<li className="phone-section">
							<div className="area-style">
								<label htmlFor="phoneArea" className='label-style'>휴대전화</label>
								<div className='flexBox'>
									<section className='select-style' id='phoneNumber'>
										<option value="010">010</option>
										<option value="011">011</option>
										<option value="019">019</option>
										<option value="018">018</option>
										<option value="016">016</option>
									</section>
									<span>&nbsp;&nbsp;</span>
									<input ref={phoneInputRef} type="tel" id="phoneArea" required size={20} value={phone} onChange={(e) => {setPhone(e.target.value)}} onBlur={handlePhone} />
									<span className={`mes-style ${messages.phone.color}`}>{messages.phone.text}</span>
								</div>
							</div>
						</li>
					</ul>
				</form>
			</fieldset>
		</div>
	);
};

export default SignUpForm;