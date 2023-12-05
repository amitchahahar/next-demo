import SmartspyaiSecurityTextLogoGreen from '../../public/smartspyai-security-text-logo-green.svg';
import Line from '../../public/line.png';
import XIcon from '../../public/X-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import TelegramIcon from '../../public/telegram-icon.svg';
import BackGroundImage from '../../public/mesh-background.png';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className=''>
			<div
				className='footer-smartspyai'
				style={{
					backgroundImage: `url(${BackGroundImage.src})`,
				}}
			>
				<div className='join-our-mission-lines'>
					<Image
						src={Line}
						loading='lazy'
						sizes='100vw'
						alt=''
						className='line-image'
					/>
					<div className='webflow-container w-container'>
						<div
							data-w-id='4b96cceb-fe6c-6995-1d91-7615f0ede1d0'
							className='footer-links'
						>
							<h2 className='smartspyai-text-heading-footer'>
								Join Our Mission
							</h2>
							<div className='smartspyai-links-text'>
								Revolutionizing Smart Contract
								Auditing with AI
							</div>
							<div className='footer-links-block'>
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
									href='https://naorisprotocol.com/?section=Team'
									target='_blank'
									className='ssa-button w-inline-block'
								>
									<div className='button-text'>
										Join the team
									</div>
								</a>
								<a
									href='https://mztinca6ewd.typeform.com/investor'
									className='ssa-button w-inline-block'
									target='_blank'
								>
									<div className='button-text'>
										Become an investor
									</div>
								</a>
							</div>
						</div>
					</div>
					<Image
						src={Line}
						loading='lazy'
						sizes='100vw'
						alt=''
						className='line-image'
					/>
				</div>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div className='footer-content'>
						<a
							href='/'
							className='footer-logo w-inline-block'
						>
							<Image
								src={
									SmartspyaiSecurityTextLogoGreen
								}
								loading='lazy'
								height={50}
								alt=''
								className='footer-logo-image'
							/>
						</a>
						<div className='footer-info-block'>
							<div className='footer-menu'>
								<a
									href='/'
									aria-current='page'
									className='footer-menu-link w-inline-block w--current'
								>
									<div className='footer-menu-link-text'>
										Home
									</div>
								</a>
								<a
									href='/#about'
									className='footer-menu-link w-inline-block'
								>
									<div className='footer-menu-link-text'>
										About
									</div>
								</a>
								<a
									href='/blogs'
									className='footer-menu-link w-inline-block'
								>
									<div className='footer-menu-link-text'>
										Blog
									</div>
								</a>
								<a
									href='/services#partners'
									className='footer-menu-link w-inline-block'
								>
									<div className='footer-menu-link-text'>
										Partners
									</div>
								</a>
							</div>
							<div className='links'>
								<div className='copyright'>
									© 2023 SmartSpyAI.
								</div>
								<div className='link-text-yellow'>
									<a
										href='/terms-of-service'
										className='link-yellow'
									>
										Terms of Service
									</a>
								</div>
								<div className='footer-separator-yellow'></div>
								<div className='link-text-yellow'>
									<a
										href='/privacy-policy'
										className='link-yellow'
									>
										Privacy Policy
									</a>
								</div>
							</div>
						</div>
						<div className='social-icons'>
							<a
								data-w-id='4b96cceb-fe6c-6995-1d91-7615f0ede1fb'
								href='https://twitter.com/SmartSpyAi'
								target='_blank'
								className='social-icon-link w-inline-block'
							>
								<Image
									src={XIcon}
									loading='lazy'
									alt=''
									className='social-icon-image'
								/>
							</a>
							<a
								data-w-id='4b96cceb-fe6c-6995-1d91-7615f0ede1fd'
								href='https://www.linkedin.com/company/smartspyai'
								target='_blank'
								className='social-icon-link w-inline-block'
							>
								<Image
									src={LinkedinIcon}
									loading='lazy'
									alt=''
									className='social-icon-image'
								/>
							</a>
							<a
								data-w-id='4b96cceb-fe6c-6995-1d91-7615f0ede1ff'
								href='https://t.me/SmartSpyAi'
								target='_blank'
								className='social-icon-link w-inline-block'
							>
								<Image
									src={TelegramIcon}
									loading='lazy'
									alt=''
									className='social-icon-image'
								/>
							</a>
							{/* <a
								data-w-id='4b96cceb-fe6c-6995-1d91-7615f0ede201'
								href='http://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0ElEQVR4nO2YTYiNURjHfz7SVUY+pgxiivExNWjYMKUoKRuxYSULZWEjWRg24yOWKPnMykYWIhZqlCx8Mz5S5pKPJEXCZehSw9GpZ+o6znnve857zbxT51//1b3P//8895x7nvMciIiIiIgYZCgAS4HdwGlgOzDKI74O2CGxu0SrQD9hJLAWuAiUAWXwfspktM4jS3wZuACske/UHA3AMeCLxdzkPeA6UAReGOyWz7pS6JSAo+JdE6xIWcD/YglYnrWI+cC3ASxCCXuA1tAihsmeVzlhl+Tkjc05SF4Z3ORbxHjZmypn/ASM9Slkbw6SVg7uTFvEGOBzDhJWDpYkx6poz0Gyqgq3VitiCPAsB4mqKixKrk4s6eeEsjTatqRCDgcIdssPMAJoAW6k7AlzxHMycC7A90BSIS89xb4CkwwNfWl8mBCjD5J6I2Y48MDT+6mriNkBv8oeh9bKhBh9ZbdhVYB/k01oQ4CQ3lI26LnktyNmmSNmXID/OpvQoQCh6bjxwRHTnBDz3dN/v03kWkAheqpzTX+uFdFjgQ167vD1v2ITehsgtM+R1OqEmIOOmPUB/q9MEX097g2cE6ZYTq3HCTFly5askwlSefKH2RgnBoj08blsF53MAuBqipjXckrpY3gxcCeDf31lITMyCA00GysLac5BQqH8a5u25CChUM6qLKQpBwmFcqo52qpBytHm8etqYK55QF+jO4CPNbrO6560KOXjXR97bXPJLQ+BS0YP2ALcDShA35K3GQ8KZzzi9avlPyjIo3JPSpGb0guGVmhMk8vnEbny6FnlHfBeVlHPKseBjcBMw1+vcKfHCrZXe2fWzfEk8Cul6BPLfOED7XfbYyudACb4GLTKpaya+Cmy43wKn8vAvCwmbWJkW6E3cuJlRYNsP2VQe54FFlJDNMrjWFHmhk6zGWXEXPlf/RSPDrNHRERERERERJCMPwojbst8C70sAAAAAElFTkSuQmCC'
								target='_blank'
								className='social-icon-link w-inline-block'
							>
								<Image
									src={DiscordIcon}
									loading='lazy'
									alt=''
									className='social-icon-image'
								/>
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
