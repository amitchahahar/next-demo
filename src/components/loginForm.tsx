import React, { useState, Fragment } from 'react';
// import loading from '../assets/Spinner-1s-200px (1).gif';
// import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import md5 from 'md5';
import axiosInstance from '@/utils/axiosInstance';
import useIdleTimeout from '@/utils/useIdleTimerHook';
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginForm = (props: any): JSX.Element => {
	// console.log('props====>>>', props?.size);
	const [isLoading, setIsLoading] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [loginEmail, setLoginEmail] = useState('');
	const [recoverEmail, setRecoverEmailAddress] =
		useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const handleRecover = async () => {
		console.log('Clicked', recoverEmail);

		if (!EmailRegex.test(recoverEmail)) {
			toast.error('Enter a valid email');
		} else {
			try {
				const response = await axiosInstance.post(
					`reset-password`,
					{ email: recoverEmail }
				);
				if (
					response.status == 200 &&
					response.data.message ==
						'Reset Password Email Sent Successfully!'
				) {
					document.getElementsByTagName(
						'body'
					)[0].style.overflow = 'auto';
					props.close(false);
					setIsLogin(true);
					setRecoverEmailAddress('');
					toast.success(response.data.message);
				} else {
					props.close(false);
					setIsLogin(true);
					setRecoverEmailAddress('');
					toast.error(response.data.message);
				}
			} catch (error: any) {
				setRecoverEmailAddress('');
				toast.error(error.response.data.message);
			}
		}
	};

	const submit = async () => {
		if (!EmailRegex.test(loginEmail)) {
			toast.error('Enter a valid email');
		} else if (
			EmailRegex.test(loginEmail) &&
			loginPassword == ''
		) {
			toast.error('Enter a password');
		} else {
			setIsLoading(true);
			let data = {
				email: loginEmail,
				password: md5(loginPassword),
			};
			try {
				const response = await axiosInstance.post(
					`login`,
					data
				);
				const tokenData = response.data.data.token;
				localStorage.setItem('token', tokenData);
				setIsLoading(false);
				setLoginEmail('');
				setLoginPassword('');
				setRecoverEmailAddress('');
				props.close(false);
				// navigate('/dashboard');
				window.location.reload();
			} catch (error: any) {
				setIsLoading(false);
				toast.error(
					error?.response?.data?.message ||
						'Invalid username or password'
				);
			}
		}
	};

	const size = props.size;
	return (
		<div className='container-fluid mt-5 pt-5'>
			<div className='row'>
				<div
					className='col-12 mx-5'
					style={
						{
							// display: 'flex',
							// justifyContent: 'center',
						}
					}
				>
					{isLogin ? (
						<div className='login'>
							<div className='section-heading'>
								<h2 className='section-heading-text'>
									Login
								</h2>
								<div className='heading-line-block'>
									<div className='heading-line'></div>
									<div className='green-retangle'></div>
								</div>
							</div>
							<div className=''>
								<div className='w-form'>
									<form
										id='email-form'
										name='email-form'
										className={
											size === 'lg' ? 'form' : ''
										}
									>
										<div
											className={`input-box mt-2 ${
												size === 'sm'
													? 'mb-4'
													: ''
											}`}
										>
											<input
												type='email'
												className='login-input w-input'
												name='name'
												data-name='Name'
												placeholder='Email'
												id='name'
												value={loginEmail}
												onChange={(e) => {
													setLoginEmail(
														e.currentTarget
															.value
													);
												}}
											/>
										</div>
										<div
											className={`input-box mt-2 ${
												size === 'sm'
													? 'mb-4'
													: ''
											}`}
										>
											<input
												type='password'
												className='login-input w-input'
												value={loginPassword}
												onChange={(e) => {
													setLoginPassword(
														e.currentTarget
															.value
													);
												}}
												name='email'
												data-name='Email'
												placeholder='Password'
											/>
										</div>

										<input
											type='button'
											value='Login'
											data-wait='Please wait...'
											disabled={
												!loginEmail ||
												!loginPassword
											}
											className='button-solid w-button disabled:opacity-50 disabled:cursor-not-allowed'
											onClick={submit}
										/>
										{/* {isLoading && (
											<Fragment>
												<img
													src={loading}
													className='loading'
												/>
												<div className='modal-backdrop fade show'></div>
											</Fragment>
										)} */}
									</form>
									<div className='w-form-done'>
										<div>
											Thank you! Your submission
											has been received!
										</div>
									</div>
									<div className='w-form-fail'>
										<div>
											Oops! Something went wrong
											while submitting the form.
										</div>
									</div>
								</div>
								<a>
									<div
										style={{ cursor: 'pointer' }}
										onClick={() => {
											setRecoverEmailAddress('');
											setIsLogin(false);
										}}
									>
										<span className='reset-password'>
											Reset Password
										</span>
									</div>
								</a>
							</div>
						</div>
					) : (
						<div className='login'>
							<div className='section-heading'>
								<h2 className='section-heading-text'>
									Reset Password
								</h2>
								<div className='heading-line-block'>
									<div className='heading-line'></div>
									<div className='green-retangle'></div>
								</div>
							</div>
							<div className=''>
								<div className='w-form'>
									<form
										id='email-form'
										name='email-form'
										className={
											size === 'lg' ? 'form' : ''
										}
									>
										<div
											className={`input-box mt-2 ${
												size === 'sm'
													? 'mb-4'
													: ''
											}`}
										>
											<input
												type='email'
												className='login-input w-input'
												name='name'
												data-name='Name'
												placeholder='Email'
												id='name'
												value={recoverEmail}
												onChange={(e) => {
													setRecoverEmailAddress(
														e.currentTarget
															.value
													);
												}}
											/>
										</div>

										<input
											type='button'
											value='Send Link on Mail'
											data-wait='Please wait...'
											className='button-solid w-button disabled:opacity-50 disabled:cursor-not-allowed'
											onClick={handleRecover}
											disabled={!recoverEmail}
										/>
										{/* {isLoading && (
											<Fragment>
												<img
													src={loading}
													className='loading'
												/>
												<div className='modal-backdrop fade show'></div>
											</Fragment>
										)} */}
									</form>
									<div className='w-form-done'>
										<div>
											Thank you! Your submission
											has been received!
										</div>
									</div>
									<div className='w-form-fail'>
										<div>
											Oops! Something went wrong
											while submitting the form.
										</div>
									</div>
								</div>
								<a>
									<div
										style={{ cursor: 'pointer' }}
										onClick={() => {
											setLoginEmail('');
											setLoginPassword('');
											setIsLogin(true);
										}}
									>
										<span className='reset-password'>
											Login
										</span>
									</div>
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
