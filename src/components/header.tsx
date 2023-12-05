'use client';
import React, { useState, useEffect } from 'react';
import SmartspyaiSecurityTextLogoGreen from '../../public/smartspyai-security-text-logo-green.svg';

import { Modal } from 'flowbite-react';
import LoginForm from './loginForm';
import Image from 'next/image';

interface Props {
	isAuth: boolean;
}

function addLeadingZeros(num: any) {
	const number = Math.floor(num);
	let numberString = number.toString();
	if (numberString.length < 4) {
		while (numberString.length < 3) {
			numberString = '0' + numberString;
		}
	} else {
		return 1;
	}
	return '0.' + numberString;
}

const DashboardHeader = () => {
	const [showLoginModal, setShowLoginModal] =
		useState<boolean>(false);
	const [scrollPosition, setScrollPosition] =
		useState<number>(0);
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	const closePopup = () => {
		setShowLoginModal(false);
		document.getElementsByTagName(
			'body'
		)[0].style.overflow = 'auto';
	};
	const logout = () => {
		localStorage.removeItem('idleScreenLogout');
		localStorage.removeItem('token');
		// navigate('/');
		window.location.reload();
	};
	// const alpha = () => {
	// 	const height = location?.pathname?.includes('/blog')
	// 		? 200
	// 		: 1000;
	// 	const percentToHeight =
	// 		(scrollPosition / height) * 100;
	// 	const convertToAlpha = (percentToHeight / 100) * 1000;
	// 	const alphaDecimal = addLeadingZeros(convertToAlpha);
	// 	return alphaDecimal;
	// };
	// console.log("alpha()",alpha());
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<div className='information-modal'>
				<div
					data-w-id='0c5072bf-bfcc-c0e6-04e9-3327a79c5b6a'
					className='information-modal-background'
				></div>
				<div className='information-modal-container'>
					<div className='information-modal-content'>
						<a
							href='/'
							data-w-id='b8b4858c-bf5d-af9e-580c-e92ceb06cf9a'
							className='close-modal-button w-inline-block'
						>
							{/* <a data-w-id="b8b4858c-bf5d-af9e-580c-e92ceb06cf9a" href="javascript:;" className="close-modal-button w-inline-block"> */}
							<div className='close-modal-button-text'>
								+
							</div>
							{/* </a> */}
						</a>
						<h3 className='instructions-heading'>
							Popup Information
						</h3>
						<p className='content-paragraph'>
							Web3 currently has no common standards
							for smart contract compliance and
							policy management. SmartSpy mitigates
							the risk and cost to intellectual
							property and the organisations
							connected to it by enforcing shared
							compliance rules.
						</p>
					</div>
				</div>
			</div>
			<div
				data-animation='default'
				data-collapse='medium'
				data-duration='400'
				data-easing='ease'
				data-easing2='ease'
				role='banner'
				className='navbar-smartspyai w-nav'
				style={
					{
						// backgroundColor: `rgba(0,0,0, ${alpha()}`,
					}
				}
			>
				<div className='container-menu w-container'>
					<a
						href='/'
						aria-current='page'
						className='brand w-nav-brand w--current'
					>
						{/* <a href="index.html" aria-current="page" className="brand w-nav-brand w--current"> */}
						<Image
							src={SmartspyaiSecurityTextLogoGreen}
							loading='lazy'
							alt=''
							className='image'
						/>
						{/* </a> */}
					</a>
					<nav
						role='navigation'
						className='nav-menu-smartspyai w-nav-menu'
					>
						{/* <a data-w-id="de8169c2-f044-c68f-18c4-c0c158159b61" href="javascript:;" className="nav-link w-inline-block"> */}
						<a
							href='/services'
							data-w-id='de8169c2-f044-c68f-18c4-c0c158159b61'
							className='nav-link w-inline-block'
						>
							<div className='line-left'></div>
							<div className='button-text'>
								Services
							</div>
							<div className='line-right'></div>
						</a>
						{/* </a> */}
						{/* <a data-w-id="de8169c2-f044-c68f-18c4-c0c158159b66" href="javascript:;" className="nav-link w-inline-block"> */}
						<a
							href='/#about'
							data-w-id='de8169c2-f044-c68f-18c4-c0c158159b66'
							className='nav-link w-inline-block'
						>
							<div className='line-left'></div>
							<div className='button-text'>
								About
							</div>
							<div className='line-right'></div>
						</a>
						{/* </a> */}
						<a
							data-w-id='de8169c2-f044-c68f-18c4-c0c158159b6b'
							href='/blogs'
							className='nav-link w-inline-block'
						>
							<div className='line-left'></div>
							<div className='button-text'>Blog</div>
							<div className='line-right'></div>
						</a>
						{/* <a data-w-id="de8169c2-f044-c68f-18c4-c0c158159b70" href="javascript:;" className="nav-link w-inline-block"> */}
						<a
							href='/services#partners'
							data-w-id='de8169c2-f044-c68f-18c4-c0c158159b70'
							className='nav-link w-inline-block'
						>
							<div className='line-left'></div>
							<div className='button-text'>
								Partners
							</div>
							<div className='line-right'></div>
						</a>
						{/* {!props.isAuth ? (
							<a
								onClick={() =>
									setShowLoginModal(true)
								}
								className='ssa-button-nav w-inline-block'
							>
								<div className='button-text cursor-pointer'>
									Log In
								</div>
							</a>
						) : location.pathname == '/dashboard' ? (
							<a
								onClick={logout}
								className='ssa-button-nav w-inline-block'
							>
								<div className='button-text cursor-pointer'>
									Logout
								</div>
							</a>
						) : (
							<a
								onClick={() =>
									// navigate('/dashboard')
									console.log(
										'Navigate to dashboard'
									)
								}
								className='ssa-button-nav w-inline-block'
							>
								<div className='button-text cursor-pointer'>
									Dashboard
								</div>
							</a>
						)} */}
						<a
							href='https://naorisprotocol.pipedrive.com/scheduler/KRPAGLSk/meeting'
							className='ssa-button-yellow-nav w-inline-block'
							target='_blank'
						>
							<div className='button-text'>
								Book a demo
							</div>
						</a>
					</nav>
					<div className='menu-button w-nav-button'>
						<div className='icon-2 w-icon-nav-menu'></div>
					</div>
				</div>
			</div>
			<Modal
				show={showLoginModal}
				onClose={() => closePopup()}
				size={'xl'}
				popup
				className='login-dialog-box'
				style={{ width: '100%', marginTop: 0 }}
			>
				<Modal.Header style={{ background: '#000' }} />
				<Modal.Body style={{ background: '#000' }}>
					<LoginForm
						size='sm'
						close={setShowLoginModal}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default DashboardHeader;
