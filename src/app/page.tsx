import Image from 'next/image';
import Line from '../../public/line.png';
import Line500 from '../../public/line-p-500.png';
import Line800 from '../../public/line-p-800.png';
import Line1080 from '../../public/line-p-1080.png';
import icon01 from '../../public/icon_01.svg';
import icon02 from '../../public/icon_02.svg';
import icon03 from '../../public/03-icon.svg';
import icon04 from '../../public/04-icon.svg';
import icon05 from '../../public/05-icon.svg';
import Skull from '../../public/skull.png';
import Skull500 from '../../public/skull-p-500.png';
import HomePageImage from '../../public/smart-spy-cover-motion-000_2-poster-00001.jpg';
import SmartSpyMotion0009 from '../../public/smart-spy-motion-009.gif';
import SmartSpyMotion0008 from '../../public/smart-spy-motion-008.gif';
import SmartSpyMotion0007 from '../../public/smart-spy-motion-007.gif';
import SmartSpyMotion0010 from '../../public/smart-spy-motion-0010.gif';
import SmartSpyMotion0011 from '../../public/smart-spy-motion-0011.gif';
import SmartSpyMotion0012 from '../../public/smart-spy-motion-0012.gif';
import ApproachIllustration from '../../public/approach_illustration.jpg';
import ApproachIllustration500 from '../../public/approach_illustration-p-500.jpg';
import DifferentIllustration from '../../public/different_illustration.svg';
import AuditServices3 from '../../public/audit-services-3.gif';
import AuditServices2 from '../../public/audit-services-2.gif';
import AuditServices1 from '../../public/audit-services-1.gif';
import AuditServices4 from '../../public/audit-services-4.gif';
import AuditServices5 from '../../public/audit-services-5.gif';
import AuditServices6 from '../../public/audit-services-6.gif';
import DiffIcon1 from '../../public/icon-01.svg';
import DiffIcon3 from '../../public/icon-03.svg';
import DiffIcon4 from '../../public/icon-04.svg';
import DiffIcon5 from '../../public/icon-05.svg';
import Mesh from '../../public/mesh.png';
import Background from '../../public/background.png';
import XIcon from '../../public/X-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import TelegramIcon from '../../public/telegram-icon.svg';
import DolomiteLogoWhite from '../../public/dolomite-logo-white.svg';
import EulerLogo from '../../public/euler_labs_white.svg';
import SquareLab from '../../public/SquaredLabDarkLogo.16860698.svg';
import SmartSpySumit from '../../public/smart-spy-sumit.png';
function Home() {
	// const [color, setColor] = useState('transparent');

	// React.useEffect(() => {
	// 	const href = window.location.href.substring(
	// 		window.location.href.lastIndexOf('#') + 1
	// 	);
	// 	const element = document.getElementById(href);
	// 	if (element) {
	// 		element.scrollIntoView({ behavior: 'smooth' });
	// 	}
	// }, []);
	return (
		<>
			{/* Hello world */}
			<div className='body-smartspyai-home'>
				<div className='hero-smartspyai'>
					<div className='hero-content-block'>
						<div className='webflow-container w-container'>
							<div className='hero-content-smarspyai'>
								<div
									data-w-id='2764ba42-0c06-9723-fee5-f97f482d349a'
									style={{ opacity: 1 }}
									className='column-1'
								>
									<h1 className='heading-smartspyai'>
										Smart Contract Security Is{' '}
										<br />
										Evolving
									</h1>
									<p className='paragraph'>
										Smart contract audits have
										been here for a decade yet
										$Billions are lost to exploits
										every year. Stay ahead of the
										game with SmartSpyAi’s
										self-learning and continuous
										security improvement process
									</p>
									<div className='hero-buttons'>
										<a
											href='https://naorisprotocol.pipedrive.com/scheduler/KRPAGLSk/meeting'
											className='ssa-button-yellow w-inline-block'
											target='_blank'
										>
											<div className='button-text'>
												Book a demo
											</div>
										</a>
										<a
											href='https://mztinca6ewd.typeform.com/partner'
											className='ssa-button w-inline-block'
											target='_blank'
										>
											<div className='button-text'>
												Become Partner
											</div>
										</a>
										<a
											href='https://mztinca6ewd.typeform.com/investor'
											className='ssa-button w-inline-block'
											target='_blank'
										>
											<div className='button-text'>
												Become Investor
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='background-video w-background-video w-background-video-atom'>
							<video
								id='f1db3619-8e54-d3b1-f44f-ecb769218535-video'
								autoPlay
								loop
								style={{
									backgroundImage: `url(${HomePageImage})`,
								}}
								muted
								playsInline
								data-wf-ignore='true'
								data-object-fit='cover'
							>
								<source
									src={
										'/smart-spy-cover-motion-000_2-transcode.webm'
									}
									data-wf-ignore='true'
									type='video/webm'
								/>
							</video>
						</div>
					</div>
				</div>
				<section className='smartspyai-features'>
					<div className='smartspyai-features-line-block'>
						<img
							src={Line.src}
							loading='lazy'
							sizes='100vw'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='w-layout-blockcontainer webflow-container w-container'>
							<div className='smartspyai-features-content'>
								<div
									data-w-id='77810152-182a-fbe0-e6b2-fdb9e52a8085'
									style={{ opacity: 1 }}
									className='smartspyai-features-column'
								>
									<h2 className='smartspyai-features-title'>
										Supported Chains
									</h2>
									<div className='smartspyai-features-links'>
										<a
											href='https://ethereum.org/'
											target='_blank'
											className='smartspyai-feature-link w-inline-block'
										>
											<Image
												src={icon01}
												loading='lazy'
												alt=''
												className='smartspyai-feature-link-icon'
											/>
										</a>
										<a
											href='https://arbitrum.io/'
											target='_blank'
											className='smartspyai-feature-link w-inline-block'
										>
											<Image
												src={icon02}
												loading='lazy'
												alt=''
												className='smartspyai-feature-link-icon'
											/>
										</a>
										<a
											href='https://polygon.technology/'
											target='_blank'
											className='smartspyai-feature-link w-inline-block'
										>
											<Image
												src={icon03}
												loading='lazy'
												alt=''
												className='smartspyai-feature-link-icon'
											/>
										</a>
										<a
											href='https://fantom.foundation/'
											target='_blank'
											className='smartspyai-feature-link w-inline-block'
										>
											<Image
												src={icon04}
												loading='lazy'
												alt=''
												className='smartspyai-feature-link-icon'
											/>
										</a>
										<a
											href='https://www.optimism.io/'
											target='_blank'
											className='smartspyai-feature-link w-inline-block'
										>
											<Image
												src={icon05}
												loading='lazy'
												alt=''
												className='smartspyai-feature-link-icon'
											/>
										</a>
									</div>
								</div>
								<div
									data-w-id='00125e46-eb86-6cea-65b0-7f35830a58e8'
									style={{ opacity: 1 }}
									className='smartspyai-features-column'
								>
									<h2 className='smartspyai-features-title'>
										AI Reviewed Contracts
									</h2>
									<h3 className='smartspyai-feature-number'>
										+2.2 Million
									</h3>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='100vw'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
					</div>
				</section>
				<section className='investors'>
					<div className='investors-line-block'>
						<div className='w-layout-blockcontainer webflow-container w-container'>
							<div
								data-w-id='aa348ac3-c053-e613-f7fb-3dc61e1eccfb'
								style={{ opacity: 1 }}
								className='investors-content'
							>
								<div
									data-delay={4000}
									data-animation='slide'
									className='investors-slider w-slider'
									data-autoplay='true'
									data-easing='ease'
									data-hide-arrows='false'
									data-disable-swipe='false'
									data-autoplay-limit={0}
									data-nav-spacing={3}
									data-duration={500}
									data-infinite='true'
									role='region'
									aria-label='carousel'
								>
									<div
										className='mask w-slider-mask'
										id='w-slider-mask-0'
									>
										<div
											className='slide-1 w-slide'
											aria-label='1 of 3'
											role='group'
											style={{
												transform:
													'translateX(-2280px)',
												opacity: 1,
												transition:
													'transform 500ms ease 0s',
											}}
											aria-hidden='true'
										>
											<div
												className='investor-slide'
												aria-hidden='true'
											>
												<p
													className='investor-text'
													aria-hidden='true'
												>
													SmartSpy is the most
													advanced AI tool for
													smart contract
													security I&aposve
													tried and I can&apost
													wait to see how it
													improves in the
													future.
												</p>
												<div
													className='investor-details'
													aria-hidden='true'
												>
													<div
														className='representative'
														aria-hidden='true'
													>
														<h2
															className='representative-name'
															aria-hidden='true'
														>
															Tony Totomanov
														</h2>
														<div
															className='occupation'
															aria-hidden='true'
														>
															CEO Euler Labs
														</div>
													</div>
													<img
														src={EulerLogo}
														loading='lazy'
														width={244}
														alt=''
														className='investor-logo'
														aria-hidden='true'
													/>
												</div>
											</div>
										</div>
										<div
											className='slide-1 w-slide'
											aria-label='2 of 3'
											role='group'
											style={{
												transform:
													'translateX(-2280px)',
												opacity: 1,
												transition:
													'transform 500ms ease 0s',
											}}
											aria-hidden='true'
										>
											<div
												className='investor-slide'
												aria-hidden='true'
											>
												<p
													className='investor-text'
													aria-hidden='true'
												>
													It feels like the
													closest experience to
													being &quotreal&quot
													for human-initiated
													manual audit.
												</p>
												<div
													className='investor-details'
													aria-hidden='true'
												>
													<div
														className='representative'
														aria-hidden='true'
													>
														<h2
															className='representative-name'
															aria-hidden='true'
														>
															Corey Caplan
														</h2>
														<div
															className='occupation'
															aria-hidden='true'
														>
															CEO Dolomite
															DeFi
														</div>
													</div>
													<img
														src={
															DolomiteLogoWhite
														}
														loading='lazy'
														alt=''
														className='investor-logo'
														aria-hidden='true'
													/>
												</div>
											</div>
										</div>
										<div
											className='slide-1 w-slide'
											aria-label='3 of 3'
											role='group'
											style={{
												transform:
													'translateX(-2280px)',
												opacity: 1,
												transition:
													'transform 500ms ease 0s',
											}}
										>
											<div className='investor-slide'>
												<p className='investor-text'>
													This is awesome
													because of its
													helpful suggestions
													in a very detailed
													report…looking
													forward to SmartSpyAi
													studying more cases.
												</p>
												<div className='investor-details'>
													<div className='representative'>
														<h2 className='representative-name'>
															James Moore
														</h2>
														<div className='occupation'>
															Blockchain Lead
														</div>
													</div>
													<img
														src={SquareLab}
														loading='lazy'
														alt=''
														className='investor-logo'
													/>
												</div>
											</div>
										</div>
										<div
											aria-live='off'
											aria-atomic='true'
											className='w-slider-aria-label'
											data-wf-ignore=''
										>
											Slide 3 of 3.
										</div>
									</div>
									<div
										className='left-arrow-2 w-slider-arrow-left'
										role='button'
										tabIndex={0}
										aria-controls='w-slider-mask-0'
										aria-label='previous slide'
									>
										<div className='w-icon-slider-left' />
									</div>
									<div
										className='right-arrow-2 w-slider-arrow-right'
										role='button'
										tabIndex={0}
										aria-controls='w-slider-mask-0'
										aria-label='next slide'
									>
										<div className='w-icon-slider-right' />
									</div>
									<div className='slide-nav-2 w-slider-nav'>
										<div
											className='w-slider-dot'
											data-wf-ignore=''
											aria-label='Show slide 1 of 3'
											aria-pressed='false'
											role='button'
											tabIndex={-1}
											style={{
												marginLeft: 3,
												marginRight: 3,
											}}
										/>
										<div
											className='w-slider-dot'
											data-wf-ignore=''
											aria-label='Show slide 2 of 3'
											aria-pressed='false'
											role='button'
											tabIndex={-1}
											style={{
												marginLeft: 3,
												marginRight: 3,
											}}
										/>
										<div
											className='w-slider-dot w-active'
											data-wf-ignore=''
											aria-label='Show slide 3 of 3'
											aria-pressed='true'
											role='button'
											tabIndex={0}
											style={{
												marginLeft: 3,
												marginRight: 3,
											}}
										/>
									</div>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='100vw'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
					</div>
				</section>
				<section className='security-services-header'>
					<div className='security-services-header-line-block'>
						<div className='w-layout-blockcontainer webflow-container w-container'>
							<div
								data-w-id='eb5e76b6-37b5-368e-ba5e-ca69a7c549e4'
								style={{ opacity: 1 }}
								className='sercurity-services-content'
							>
								<h2 className='security-services-heading'>
									Smart Contract Security Services
								</h2>
								<div className='security-services-text'>
									Mitigate vulnerabilities across
									your Blockchain operations.{' '}
									<a
										href='#'
										className='link-yellow'
									>
										Learn more.
									</a>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='100vw'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
					</div>
				</section>
				<section className='security-services'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div className='security-services-left'>
							<div
								data-w-id='d4ac789e-0c9b-6b80-2cfc-fd7e64f3ba75'
								style={{ opacity: 1 }}
								className='security-service-column-01'
							>
								<img
									src={AuditServices1.src}
									loading='lazy'
									alt=''
									className='security-service-column-image'
								/>
							</div>
							<div className='security-service-line' />
							<div
								data-w-id='d4ac789e-0c9b-6b80-2cfc-fd7e64f3ba78'
								style={{ opacity: 1 }}
								className='security-service-column-02'
							>
								<div className='security-service-column-text'>
									<h2 className='smartspyai-text-heading'>
										DeFi Contract Security
									</h2>
									<div className='security-service-paragraph'>
										Specialized in detecting DeFi
										vulnerabilities in DEX’s,{' '}
										<br />
										lending platforms, and yield
										farming
									</div>
									<a
										href='/services#service-01'
										className='ssa-button-small w-inline-block'
									>
										<div className='button-text'>
											Learn More
										</div>
									</a>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1340px'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='security-services-right'>
							<div
								data-w-id='35da1210-5766-d733-4770-d74b38431add'
								style={{ opacity: 1 }}
								className='security-service-column-02'
							>
								<div className='security-service-column-text'>
									<h2 className='smartspyai-text-heading'>
										EVM Compliant L2 Chain
										Security
									</h2>
									<div className='security-service-paragraph'>
										Securing both on and off-chain
										components for <br />
										scalable and high-speed
										transactions
									</div>
									<a
										href='/services#service-02'
										className='ssa-button-small w-inline-block'
									>
										<div className='button-text'>
											Learn More
										</div>
									</a>
								</div>
							</div>
							<div className='security-service-line' />
							<div
								data-w-id='85787d00-4bc7-94b4-3961-0b74aad3d2b7'
								style={{ opacity: 1 }}
								className='security-service-column-01'
							>
								<img
									src={AuditServices2.src}
									loading='lazy'
									alt=''
									className='security-service-column-image'
								/>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1340px'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='security-services-left'>
							<div
								data-w-id='c81326f6-e4ef-33c6-d5a9-ed06fb7d33cb'
								style={{ opacity: 1 }}
								className='security-service-column-01'
							>
								<img
									src={AuditServices3.src}
									loading='lazy'
									alt=''
									className='security-service-column-image'
								/>
							</div>
							<div
								data-w-id='c81326f6-e4ef-33c6-d5a9-ed06fb7d33cd'
								style={{ opacity: 1 }}
								className='security-service-line'
							/>
							<div className='security-service-column-02'>
								<div className='security-service-column-text'>
									<h2 className='smartspyai-text-heading'>
										Enterprise Contract Security
									</h2>
									<div className='security-service-paragraph'>
										Safeguard your business with
										our enterprise-grade <br />
										audits ensuring &nbsp;Web3
										integrity &amp; resilience
									</div>
									<a
										href='/services#service-03'
										className='ssa-button-small w-inline-block'
									>
										<div className='button-text'>
											Learn More
										</div>
									</a>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1340px'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='security-services-right'>
							<div
								data-w-id='c5c31234-ad2e-c4a9-15ae-dd8b3404f81f'
								style={{ opacity: 1 }}
								className='security-service-column-02'
							>
								<div className='security-service-column-text'>
									<h2 className='smartspyai-text-heading'>
										DEX Contract Security
									</h2>
									<div className='security-service-paragraph'>
										Tailored for complex DEX
										architectures, while
										safeguarding potential
										weaknesses and risks
									</div>
									<a
										href='/services#service-04'
										className='ssa-button-small w-inline-block'
									>
										<div className='button-text'>
											Learn More
										</div>
									</a>
								</div>
							</div>
							<div className='security-service-line' />
							<div
								data-w-id='c5c31234-ad2e-c4a9-15ae-dd8b3404f829'
								style={{ opacity: 1 }}
								className='security-service-column-01'
							>
								<img
									src={AuditServices4.src}
									loading='lazy'
									alt=''
									className='security-service-column-image'
								/>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1340px'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='security-services-left'>
							<div
								data-w-id='a41c118d-8f9e-d335-3f63-c1685d39dc6b'
								style={{ opacity: 1 }}
								className='security-service-column-01'
							>
								<img
									src={AuditServices5.src}
									loading='lazy'
									alt=''
									className='security-service-column-image'
								/>
							</div>
							<div className='security-service-line' />
							<div
								data-w-id='a41c118d-8f9e-d335-3f63-c1685d39dc6e'
								style={{ opacity: 1 }}
								className='security-service-column-02'
							>
								<div className='security-service-column-text'>
									<h2 className='smartspyai-text-heading'>
										NFT Contract Security
									</h2>
									<div className='security-service-paragraph'>
										Ensuring the security of your
										NFT contracts and marketplace
										through advanced Ai algorithms
									</div>
									<a
										href='/services#service-05'
										className='ssa-button-small w-inline-block'
									>
										<div className='button-text'>
											Learn More
										</div>
									</a>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1340px'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='security-services-right'>
							<div
								data-w-id='cbb5039d-aec2-7bc2-c6a1-98e278284df6'
								style={{ opacity: 1 }}
								className='security-service-column-02'
							>
								<div className='security-service-column-text'>
									<h2 className='smartspyai-text-heading'>
										dApp Contract Security
									</h2>
									<div className='security-service-paragraph'>
										Confidently build dApps that
										prioritize user privacy,{' '}
										<br />
										asset security, and safe
										functionality
									</div>
									<a
										href='/services#service-06'
										className='ssa-button-small w-inline-block'
									>
										<div className='button-text'>
											Learn More
										</div>
									</a>
								</div>
							</div>
							<div className='security-service-line' />
							<div
								data-w-id='cbb5039d-aec2-7bc2-c6a1-98e278284e00'
								style={{ opacity: 1 }}
								className='security-service-column-01'
							>
								<img
									src={AuditServices6.src}
									loading='lazy'
									alt=''
									className='security-service-column-image'
								/>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1340px'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image'
						/>
						<div className='button-block'>
							<a
								href='https://naorisprotocol.pipedrive.com/scheduler/KRPAGLSk/meeting'
								className='ssa-button-yellow w-inline-block'
								target='_blank'
							>
								<div className='button-text'>
									Book a demo
								</div>
							</a>
						</div>
					</div>
				</section>
				<section className='in-2022'>
					<div
						data-w-id='eb1b36dd-f03a-008a-c17e-09787d5c8625'
						style={{
							opacity: 1,
							backgroundImage: `url(${Mesh}), url(${Background})`,
						}}
						className='in-2022-line-block'
					>
						<img
							src={Line.src}
							loading='lazy'
							sizes='100vw'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image-in-2022-top'
						/>
						<div className='w-layout-blockcontainer webflow-container w-container'>
							<h2 className='security-services-heading'>
								<br />
								Changing The Game
							</h2>
							<div className='in-2022-content'>
								<div className='in-2022-content-left'>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-red'>
											$3.6B
										</h2>
										<div className='in-2022-number-description'>
											Funds stolen
										</div>
									</div>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-red'>
											51.5%
										</h2>
										<div className='in-2022-number-description'>
											Were audited <br />
											projects
										</div>
									</div>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-red'>
											167
										</h2>
										<div className='in-2022-number-description'>
											Major Web3
											<br />
											exploits
										</div>
									</div>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-red'>
											47.4%
										</h2>
										<div className='in-2022-number-description'>
											Increase on 2021
										</div>
									</div>
								</div>
								<div className='in-2022-content-center'>
									<img
										src={Skull.src}
										loading='lazy'
										sizes='100vw'
										srcSet={`${Skull500} 500w, ${Skull} 659w`}
										alt=''
										className='in-2022-image'
									/>
								</div>
								<div className='in-2022-content-right'>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-green'>
											2.2+M
										</h2>
										<div className='in-2022-number-description-right'>
											AI reviewed SCs
										</div>
									</div>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-green'>
											200+
										</h2>
										<div className='in-2022-number-description-right'>
											{' '}
											Vulnerabilities <br />
											detected
										</div>
									</div>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-green'>
											65k
										</h2>
										<div className='in-2022-number-description-right'>
											ML trained SCs for <br />
											true/false risks
										</div>
									</div>
									<div className='in-2022-number'>
										<h2 className='in-2022-number-text-green'>
											EEA <br />
										</h2>
										<div className='in-2022-number-description-right'>
											All EthTrust
										</div>
										<div className='in-2022-number-description-right'>
											<a
												href='https://entethalliance.org/specs/ethtrust-sl/'
												target='_blank'
												className='link-2'
											>
												Security Levels
											</a>
											<br />
										</div>
									</div>
								</div>
							</div>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='100vw'
							srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
							alt=''
							className='line-image-in-2022-bottom'
						/>
					</div>
				</section>
				<section className='smartspyai-text-left-home'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div className='smartspyai-text-left-content-home'>
							<div
								data-w-id='8ecd0c0a-dec1-61f5-e6d5-f898746e2344'
								style={{ opacity: 1 }}
								className='smartspyai-text-left-column-home'
							>
								<h2 className='smartspyai-text-heading-home'>
									Why is SmartSpyAi Different?
								</h2>
								<div className='smartspyai-text-list'>
									<div className='smartspyai-text-list-item'>
										<Image
											src={DiffIcon1}
											loading='lazy'
											alt=''
											className='smartspyai-text-lis-item-icon'
										/>
										<div className='smartspyai-text-list-item-text'>
											Manual audits may miss
											emerging threats
										</div>
									</div>
									<div className='smartspyai-text-list-item'>
										<Image
											src={DiffIcon3}
											loading='lazy'
											alt=''
											className='smartspyai-text-lis-item-icon'
										/>
										<div className='smartspyai-text-list-item-text'>
											Static audits can’t evolve
											with threats
										</div>
									</div>
									<div className='smartspyai-text-list-item'>
										<Image
											src={DiffIcon4}
											loading='lazy'
											alt=''
											className='smartspyai-text-lis-item-icon'
										/>
										<div className='smartspyai-text-list-item-text'>
											General AI unsuitable for
											granular detection
										</div>
									</div>
									<div className='smartspyai-text-list-item'>
										<Image
											src={DiffIcon5}
											loading='lazy'
											alt=''
											className='smartspyai-text-lis-item-icon'
										/>
										<div className='smartspyai-text-list-item-text'>
											Interpreting results takes
											time and effort
										</div>
									</div>
								</div>
								<div className='smartspyai-text-paragraph-yellow'>
									Using SmartSpyAi alongside manual
									audits provides continuous
									vulnerability assessment building
									smart contract security over time
								</div>
							</div>
							<div
								data-w-id='81b24ef3-99c5-643c-64c8-43e4c4460849'
								style={{ opacity: 1 }}
								className='smartspyai-text-left-column-2-home'
							>
								<Image
									src={DifferentIllustration}
									loading='lazy'
									alt=''
									className='smartspyai-text-image-different'
								/>
							</div>
						</div>
					</div>
					<img
						src={Line.src}
						loading='lazy'
						sizes='100vw'
						srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
						alt=''
						className='line-image'
					/>
				</section>
				<section className='smartspyai-text-right-home'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div className='smartspyai-text-right-content-home'>
							<div
								data-w-id='4e8ba78e-fb4c-5db3-478d-0fda43a1144d'
								style={{ opacity: 1 }}
								className='smartspyai-text-right-column-home-01'
							>
								<img
									src={ApproachIllustration.src}
									loading='lazy'
									sizes='100vw'
									srcSet={`${ApproachIllustration500} 500w, ${ApproachIllustration} 790w`}
									alt=''
									className='smartspyai-text-image'
								/>
							</div>
							<div
								data-w-id='4e8ba78e-fb4c-5db3-478d-0fda43a1143b'
								style={{ opacity: 1 }}
								className='smartspyai-text-right-column-home-02'
							>
								<h2 className='smartspyai-text-heading-home'>
									The SmartSpyAi Approach
								</h2>
								<div className='smartspyai-text-paragraph'>
									Combining multiple analysis
									techniques like static,
									semi-static, symbolic, formal,
									dynamic, and intelligent fuzzing
									in collaboration with machine
									learning vastly improves smart
									contract security through
									continuous learning &amp;
									improvement.
									<br />
									<br />
									When one analyzer identifies a
									new vulnerability, it
									communicates its findings to all
									other analyzer tools to update
									their shared models, building a
									decentralized collective
									intelligence for deeper insights.{' '}
									<span className='link-yellow'>
										Learn more.
									</span>
								</div>
							</div>
						</div>
					</div>
					<img
						src={Line.src}
						loading='lazy'
						sizes='100vw'
						srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
						alt=''
						className='line-image'
					/>
				</section>
				<section className='comprehensive-analysis'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div className='comprehensive-analysis-content'>
							<h2 className='comprehensive-analysis-heading'>
								Comprehensive Analysis
							</h2>
							<div className='comprehensive-analysis-grid'>
								<div
									data-w-id='b196be4e-a65e-b9d6-8f5a-e5cdaf1e2424'
									style={{ opacity: 1 }}
									className='comprehensive-analysis-item'
								>
									<h3 className='comprehensive-analysis-title'>
										Continuous security
										improvement
									</h3>
									<img
										src={SmartSpyMotion0010.src}
										loading='lazy'
										alt=''
										className='comprehensive-analysis-image'
									/>
								</div>
								<div
									data-w-id='44fba1d7-f623-9173-d640-c996a14e6a27'
									style={{ opacity: 1 }}
									className='comprehensive-analysis-item'
								>
									<h3 className='comprehensive-analysis-title'>
										All-in-one analysis for
										contract lifecycle
									</h3>
									<img
										src={SmartSpyMotion0009.src}
										loading='lazy'
										alt=''
										className='comprehensive-analysis-image'
									/>
								</div>
								<div
									data-w-id='79ca5475-a51f-dd0c-3d8d-56b08ac32df7'
									style={{ opacity: 1 }}
									className='comprehensive-analysis-item'
								>
									<h3 className='comprehensive-analysis-title'>
										Granular visibility of
										vulnerabilities and risks
									</h3>
									<img
										src={SmartSpyMotion0007.src}
										loading='lazy'
										alt=''
										className='comprehensive-analysis-image'
									/>
								</div>
								<div
									data-w-id='e69d4403-b11c-19e5-ca2a-c009507fa2ea'
									style={{ opacity: 1 }}
									className='comprehensive-analysis-item'
								>
									<h3 className='comprehensive-analysis-title'>
										Pre &amp; Post
										<br />
										Deployment
									</h3>
									<img
										src={SmartSpyMotion0008.src}
										loading='lazy'
										alt=''
										className='comprehensive-analysis-image'
									/>
								</div>
								<div
									data-w-id='faeadc28-c008-80f7-638f-e4025a0f3f49'
									style={{ opacity: 1 }}
									className='comprehensive-analysis-item'
								>
									<h3 className='comprehensive-analysis-title'>
										Actionable on-chain
										<br />
										reporting
									</h3>
									<img
										src={SmartSpyMotion0011.src}
										loading='lazy'
										alt=''
										className='comprehensive-analysis-image'
									/>
								</div>
								<div
									data-w-id='1238b530-6ea9-165b-e94b-ccfa45060abf'
									style={{ opacity: 1 }}
									className='comprehensive-analysis-item'
								>
									<h3 className='comprehensive-analysis-title'>
										High ROI and cost-effective
										for all users
									</h3>
									<img
										src={SmartSpyMotion0012.src}
										loading='lazy'
										alt=''
										className='comprehensive-analysis-image'
									/>
								</div>
							</div>
							<div className='comprehensive-analysis-cta'>
								<a
									href='#login'
									className='ssa-button-small w-inline-block'
								>
									<div className='button-text'>
										Learn More
									</div>
								</a>
							</div>
						</div>
					</div>
					<img
						src={Line.src}
						loading='lazy'
						sizes='100vw'
						srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
						alt=''
						className='line-image'
					/>
				</section>
				<section id='about' className='who-is'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div className='who-is-content'>
							<div
								data-w-id='e632e704-eacf-31c7-e57e-092b3bdeaed9'
								style={{ opacity: 1 }}
								className='who-is-column'
							>
								<h2
									className='who-is-heading'
									id='about'
								>
									Who is behind SmartSpyAi?
								</h2>
								<div className='who-is-text-paragraph'>
									SmartSpyAi was created by
									<a
										href='https://naorisprotocol.pipedrive.com'
										className='ssa-green-text'
										target='_blank'
									>
										{' '}
										Naoris Protocol
									</a>
									, specialists in decentralized
									cybersecurity. Leveraging decades
									of knowledge and experience the
									team recognized an urgent need
									for a radical approach to smart
									contract security after record
									Web3 losses totalling over $3.6B
									in 2022.{' '}
									<a
										href='#'
										className='ssa-yellow-text'
									>
										Meet the team.
									</a>
								</div>
							</div>
						</div>
					</div>
					<img
						src={Line.src}
						loading='lazy'
						sizes='100vw'
						srcSet={`${Line500} 500w, ${Line800} 800w, ${Line1080} 1080w, ${Line.src} 1920w`}
						alt=''
						className='line-image'
					/>
				</section>
				<section className='sumit'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div
							data-w-id='fd80da53-8a14-1209-da3d-2062a94e8171'
							style={{ opacity: 1 }}
							className='sumit-content'
						>
							<img
								src={SmartSpySumit.src}
								loading='lazy'
								alt=''
								className='sumit-image'
							/>
							<div className='sumit-information'>
								Sumit Chauhan, Naoris Protocol{' '}
								<span className='sumit-information-grey'>
									Chief Technology Officer
								</span>
							</div>
							<p className='paragraph-3'>
								As SmartSpyAi gets more intelligent
								your smart contract gets more
								secure.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Home;
