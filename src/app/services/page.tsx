import React, { useState } from 'react';
import Line from '../../../public/line.png';

import I034x from '../../../public/034x.png';
import I044x from '../../../public/044x.png';
import I054x from '../../../public/054x.png';
import I064x from '../../../public/064x.png';
import I074x from '../../../public/074x.png';
import I084x from '../../../public/084x.png';
import I094x from '../../../public/094x.png';
import I114x from '../../../public/114x.png';
import I104x from '../../../public/104x.png';
import I124x from '../../../public/124x.png';
import I134x from '../../../public/134x.png';
import I144x from '../../../public/144x.png';
import I154x from '../../../public/154x.png';
import I164x from '../../../public/164x.png';
import SecurityCertificate from '../../../public/certificate.png';

import mainLogo1 from '../../../public/main-logo-1.png';
import DraperLogoWhite from '../../../public/draper_logo_white.png';
import DolomiteLogoWhite from '../../../public/dolomite-logo-white.svg';
import EulerLabsWhite from '../../../public/euler_labs_white.svg';
import LogoWhite1 from '../../../public/logo-white-1.svg';
import UnieraLogoWhite from '../../../public/uniera_logo_white.png';
import SquaredLabDarkLogo from '../../../public/SquaredLabDarkLogo.16860698.svg';
import TheHodlXchangeLogoWhite from '../../../public/the_hodl_xchange_logo_white.png';
import ExpertDojoLogoWhite from '../../../public/expert_dojo_logo_white.png';
import AuditServices3 from '../../../public/audit-services-3.gif';
import AuditServices2 from '../../../public/audit-services-2.gif';
import AuditServices1 from '../../../public/audit-services-1.gif';
import AuditServices4 from '../../../public/audit-services-4.gif';
import AuditServices5 from '../../../public/audit-services-5.gif';
import AuditService6 from '../../../public/audit-services-6.gif';

import LevelOneLogoWhite from '../../../public/level_one_logo_white.png';
import DuckDAO from '../../../public/DuckDAO.png';
import blackDragonFullWhite from '../../../public/blackDragonFullWhite.png';
import whiteSynapseNetworkHorizontalWithLabel1 from '../../../public/white-Synapse-network-horizontal-with-label-1.png';
import CryptoBuddyLogo from '../../../public/CryptoBuddy_logo.png';
import CorfoLogoWhite from '../../../public/corfo_logo_white.png';

function ServicePage() {
	return (
		<div className='body-smartspyai-home'>
			<section className='smartspyai-services'>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div
						data-w-id='53056b52-8a46-65d2-e853-fd5c2cbceff3'
						style={{ opacity: 1 }}
						className='smartspyai-services-content'
					>
						<h2 className='smartspyai-services-heading'>
							Smart Contract Security Services
						</h2>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 95vw, (max-width: 1439px) 96vw, 1340px'
							className='line-image'
						/>
						<div className='services-image-text'>
							<div className='smartspyai-text-paragraph'>
								A single overlooked vulnerability
								can lead to catastrophic exploits,
								eroding reputation and trust.
								<br />
								<br />
								Leverage cutting-edge AI techniques
								combined with multiple analysis
								tools for comprehensive <br />
								and granular level vulnerability
								detection.
								<br />
								<br />•{' '}
								<span className='text-green'>
									Static Analysis
								</span>{' '}
								- examines code detecting common
								vulnerabilities without execution
								<br />•{' '}
								<span className='text-green'>
									Symbolic Analysis
								</span>{' '}
								- explores all execution paths to
								uncover complex vulnerabilities
								<br />•{' '}
								<span className='text-green'>
									Formal Analysis
								</span>{' '}
								- uses mathematical models to verify
								correctness and ensure no bugs
								<br />•{' '}
								<span className='text-green'>
									Dynamic Analysis
								</span>{' '}
								- runs controlled environments to
								detect runtime errors and breaches
								<br />•{' '}
								<span className='text-green'>
									Machine Learning
								</span>{' '}
								- analyzes patterns and anomalies,
								predicting potential issues
								<br />•{' '}
								<span className='text-green'>
									Fuzz Testing
								</span>{' '}
								- bombards contracts with diverse
								inputs to find unexpected behavior
							</div>
							<img
								src={SecurityCertificate.src}
								loading='lazy'
								alt=''
								className='security-certificate'
							/>
						</div>
						<img
							src={Line.src}
							loading='lazy'
							sizes='(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 95vw, (max-width: 1439px) 96vw, 1340px'
							className='line-image'
						/>
						<div className='smartspyai-services-page-text-block'>
							{/* <div className="smartspyai-services-page-text-2">SmartSpyAi builds a unique collective intelligence by sharing knowledge cross platform offering deeper insight into vulnerabilities.</div> */}
							<div className='smartspyai-services-page-text-grid'>
								<div className='smartspyai-services-grid-item'>
									<h3 className='services-grid-heading'>
										Detects
									</h3>
									<div className='services-grid-text'>
										200+ types of functional and
										conformance vulnerabilities
										&amp; risks
									</div>
								</div>
								<div className='smartspyai-services-grid-item'>
									<h3 className='services-grid-heading'>
										Analyzes
									</h3>
									<div className='services-grid-text'>
										All{' '}
										<a
											target='_blank'
											className='text-yellow'
											href='https://entethalliance.org/specs/ethtrust-sl/'
										>
											EEA EthTrust Security
											Levels
										</a>{' '}
										&amp; Smart Contract Weakness
										(SWC) classifications
									</div>
								</div>
								<div className='smartspyai-services-grid-item'>
									<h3 className='services-grid-heading'>
										References
									</h3>
									<div className='services-grid-text'>
										Machine learning combined with
										Swarm AI’s analysis of 2.2M+
										historical contracts
									</div>
								</div>
							</div>
							{/* <div className="smartspyai-services-page-text-2">Prioritize your most important security decisions through actionable on-chain reports that provide specific recommendations for fixing vulnerabilities, remediation tips and best practices.</div> */}
						</div>
					</div>
				</div>
			</section>
			<section
				id='service-01'
				className='smartspyai-text-left'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div className='smartspyai-text-left-content'>
						<div
							data-w-id='8ecd0c0a-dec1-61f5-e6d5-f898746e2344'
							style={{ opacity: 1 }}
							className='smartspyai-text-left-column'
						>
							<h2 className='smartspyai-text-heading'>
								DeFi  Contract Security
							</h2>
							<div className='smartspyai-text-paragraph'>
								Specializing in DeFi smart contract
								assessments, SmartSpyAi detects
								vulnerabilities specific to
								decentralized exchanges, lending
								platforms, and yield farming. With
								expertise honed on DeFi&#x27;s
								dynamic landscape, SmartSpyAi
								fortifies DeFi protocols by offering
								expert insights and security
								solutions tailored to the ecosystem.
								As an essential partner for any DeFi
								project seeking to ensure the
								integrity of its contracts,
								SmartSpyAi safeguards decentralized
								finance by meticulously detecting
								vulnerabilities in fine detail,
								allowing innovators to develop DeFi
								safely and responsibly.
							</div>
						</div>
						<div
							data-w-id='81b24ef3-99c5-643c-64c8-43e4c4460849'
							style={{ opacity: 1 }}
							className='smartspyai-text-left-column'
						>
							<img
								src={AuditServices1.src}
								loading='lazy'
								className='smartspyai-text-image-services'
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				id='service-02'
				className='smartspyai-text-right'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div className='smartspyai-text-right-content'>
						<div
							data-w-id='4e8ba78e-fb4c-5db3-478d-0fda43a1144d'
							style={{ opacity: 1 }}
							className='smartspyai-text-right-column'
						>
							<img
								src={AuditServices2.src}
								loading='lazy'
								className='smartspyai-text-image-services'
							/>
						</div>
						<div
							data-w-id='4e8ba78e-fb4c-5db3-478d-0fda43a1143b'
							style={{ opacity: 1 }}
							className='smartspyai-text-right-column'
						>
							<h2 className='smartspyai-text-heading'>
								EVM Compliant / L2 Chain Security
							</h2>
							<div className='smartspyai-text-paragraph'>
								SmartSpyAi leverages advanced AI
								techniques to provide comprehensive
								auditing for EVM-compliant and Layer
								2 chains. Our solution analyzes for
								on-chain vulnerabilities,
								identifying risks specific to
								off-chain protocols. By securing
								both on and off-chain components,
								SmartSpyAi enables scalable and
								high-speed blockchain transactions
								without compromising security. With
								security expertise tailored to EVM
								and L2 contracts, SmartSpyAi sets a
								new standard for end-to-end smart
								contract auditing, providing you
								robust security for the entire
								blockchain ecosystem.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='service-03'
				className='smartspyai-text-left'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div
						id='service-03'
						className='smartspyai-text-left-content'
					>
						<div
							data-w-id='cd8d7484-0c92-7781-edf1-cb4a7b91a788'
							style={{ opacity: 1 }}
							className='smartspyai-text-left-column'
						>
							<h2 className='smartspyai-text-heading'>
								Enterprise Contract Security
							</h2>
							<div className='smartspyai-text-paragraph'>
								Safeguard your business smart
								contracts with enterprise-grade
								audits ensuring the integrity of
								your Web3-based solutions, including
								supply chain management, identity
								verification, and data integrity
								systems.  Utilizing advanced
								techniques SmartSpyAi identifies
								vulnerabilities and compliance gaps
								before deployment. With robust
								testing and continuous monitoring
								post-launch, we offer complete
								lifecycle protection tailored to
								your complex enterprise needs. With
								proven smart contract security
								methods SmartSpyAi ensures you
								operate to the highest standards.
							</div>
						</div>
						<div
							data-w-id='cd8d7484-0c92-7781-edf1-cb4a7b91a78d'
							style={{ opacity: 1 }}
							className='smartspyai-text-left-column'
						>
							<img
								src={AuditServices3.src}
								loading='lazy'
								className='smartspyai-text-image-services'
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				id='service-04'
				className='smartspyai-text-right'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div
						id='service-04'
						className='smartspyai-text-right-content'
					>
						<div
							data-w-id='d1b5cf77-8353-c81a-b0c1-5de283b03cca'
							style={{ opacity: 1 }}
							className='smartspyai-text-right-column'
						>
							<img
								src={AuditServices4.src}
								loading='lazy'
								className='smartspyai-text-image-services'
							/>
						</div>
						<div
							data-w-id='d1b5cf77-8353-c81a-b0c1-5de283b03ccc'
							style={{ opacity: 1 }}
							className='smartspyai-text-right-column'
						>
							<h2 className='smartspyai-text-heading'>
								DEX Contract Security
							</h2>
							<div className='smartspyai-text-paragraph'>
								SmartSpyAi specializes in delivering
								unparalleled security for
								Decentralized Exchanges contracts.
								Our solution safeguards trading
								platforms through rigorous auditing,
								tailored to complex DEX
								architectures. We identify
								vulnerabilities and risks in smart
								contracts that fortify against
								exploits through a continuous
								security improvement process that
								focuses on mitigating potential
								issues before you go live, making
								SmartSpyAi a trusted partner for DEX
								creators and deployers. SmartSpyAi’s
								comprehensive approach secures your
								decentralized exchange against
								potential risks.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='service-05'
				className='smartspyai-text-left'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div
						id='service-05'
						className='smartspyai-text-left-content'
					>
						<div
							data-w-id='5938ffb7-fbf4-738f-f750-29649a734156'
							style={{ opacity: 1 }}
							className='smartspyai-text-left-column'
						>
							<h2 className='smartspyai-text-heading'>
								NFT Contract Security
							</h2>
							<div className='smartspyai-text-paragraph'>
								Designed to enhance the safety and
								integrity of Non-Fungible Token
								(NFT) contracts, SmartSpyAi employs
								advanced AI algorithms to conduct
								thorough security assessments,
								pinpointing vulnerabilities before
								launch. Automated analysis
								identifies issues like reentrancy
								attacks, ensuring the security of
								your NFT marketplace. Going beyond
								scanning for known exploits
								SmartSpyAi models adversarial
								behavior to find new
								vulnerabilities. Clear, actionable
								recommendations can be implemented
								before going live, so you can launch
								your NFT project with confidence.
							</div>
						</div>
						<div
							data-w-id='5938ffb7-fbf4-738f-f750-29649a73415b'
							style={{ opacity: 1 }}
							className='smartspyai-text-left-column'
						>
							<img
								src={AuditServices5.src}
								loading='lazy'
								className='smartspyai-text-image-services'
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				id='service-06'
				className='smartspyai-text-right'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div className='smartspyai-text-block'>
						<div
							id='service-06'
							className='smartspyai-text-right-content'
						>
							<div
								data-w-id='f34a37c2-bc0f-334d-38f4-10613bf8ec32'
								style={{ opacity: 1 }}
								className='smartspyai-text-right-column'
							>
								<img
									src={AuditService6.src}
									loading='lazy'
									className='smartspyai-text-image-services'
								/>
							</div>
							<div
								data-w-id='f34a37c2-bc0f-334d-38f4-10613bf8ec34'
								style={{ opacity: 1 }}
								className='smartspyai-text-right-column'
							>
								<h2 className='smartspyai-text-heading'>
									dApp Contract Security
								</h2>
								<div className='smartspyai-text-paragraph'>
									SmartSpyAi offers unparalleled
									security for decentralized
									applications. Customized to
									tackle the intricacies of
									blockchain-based applications,
									our solution finds
									vulnerabilities at the deepest
									level, ensuring robust protection
									against cyber threats. Through
									meticulous analysis, user
									interactions, and data flows,
									SmartSpyAi identifies weaknesses
									that could expose you by
									pinpointing risks early, allowing
									developers to address issues
									proactively. With SmartSpyAi, you
									can launch more resilient
									applications that prioritize user
									privacy, asset security, and
									seamless functionality.
								</div>
							</div>
						</div>
						<a
							href='https://naorisprotocol.pipedrive.com/scheduler/KRPAGLSk/meeting'
							target='_blank'
							className='ssa-button-yellow w-inline-block'
						>
							<div className='button-text'>
								Book a demo
							</div>
						</a>
					</div>
				</div>
			</section>

			<section
				className='smartspyai-partners'
				id='partners'
			>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div
						data-w-id='aebfba90-bb14-8961-da95-fdb77767819c'
						style={{ opacity: 1 }}
						className='smartspyai-partners-content'
					>
						<h2 className='smartspyai-partners-heading'>
							Partners
							<br />‍
						</h2>
						<div className='w-layout-grid partners-grid'>
							<div
								id='w-node-bd4e9996-9998-ac24-ddd5-44d4d69b7a61-c5ec846b'
								className='partner'
							>
								<img
									src={DraperLogoWhite.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_9448b47b-aea9-595b-56af-e15a95efaa91-c5ec846b'
								className='partner'
							>
								<img
									src={DolomiteLogoWhite}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-ee75d5de-25ff-daf3-5fec-53bf84f4ee29-c5ec846b'
								className='partner'
							>
								<img
									src={I044x.src}
									loading='lazy'
									sizes='(max-width: 479px) 65.9375px, (max-width: 767px) 79.1328125px, (max-width: 991px) 65.9375px, 100.234375px'
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7f4-c5ec846b'
								className='partner'
							>
								<img
									src={I144x.src}
									loading='lazy'
									sizes='(max-width: 479px) 99.3359375px, (max-width: 767px) 119.203125px, (max-width: 991px) 99.3359375px, 150.9921875px'
									className='partner-logo'
								/>
							</div>
							<div className='partner'>
								<img
									src={mainLogo1.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_953dced6-1256-b74c-2538-4e1bf5d70509-c5ec846b'
								className='partner'
							>
								<img
									src={LogoWhite1}
									loading='lazy'
									width='125'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_737ec027-7b10-5111-6fb4-2c34ece9aa00-c5ec846b'
								className='partner'
							>
								<img
									src={EulerLabsWhite}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_085ad45d-9e6b-1553-e121-0aae47fe1a1e-c5ec846b'
								className='partner'
							>
								<img
									src={UnieraLogoWhite.src}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_8c005069-d0f8-74d4-1235-7186efabc93f-c5ec846b'
								className='partner'
							>
								<img
									src={SquaredLabDarkLogo}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7fa-c5ec846b'
								className='partner'
							>
								<img
									src={TheHodlXchangeLogoWhite.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7e2-c5ec846b'
								className='partner'
							>
								<img
									src={I054x.src}
									loading='lazy'
									width='145'
									sizes='(max-width: 479px) 80vw, 145px'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7f6-c5ec846b'
								className='partner'
							>
								<img
									src={ExpertDojoLogoWhite.src}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7e4-c5ec846b'
								className='partner'
							>
								<img
									src={I064x.src}
									loading='lazy'
									sizes='(max-width: 479px) 81.7578125px, (max-width: 767px) 98.109375px, (max-width: 991px) 81.7578125px, 124.2734375px'
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7dc-c5ec846b'
								className='partner'
							>
								<img
									src={LevelOneLogoWhite.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7e6-c5ec846b'
								className='partner'
							>
								<img
									src={I074x.src}
									loading='lazy'
									sizes='(max-width: 479px) 85.0546875px, (max-width: 767px) 102.0625px, (max-width: 991px) 85.0546875px, 129.28125px'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_2fbdc7ab-6c35-fe12-09e7-95f00540c6ff-c5ec846b'
								className='partner'
							>
								<img
									src={DuckDAO.src}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7ee-c5ec846b'
								className='partner'
							>
								<img
									src={I114x.src}
									loading='lazy'
									width='135'
									sizes='(max-width: 479px) 80vw, 135px'
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7e0-c5ec846b'
								className='partner'
							>
								<img
									src={blackDragonFullWhite.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7ea-c5ec846b'
								className='partner'
							>
								<img
									src={I094x.src}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_650ca829-dd10-ac55-2d30-1c6e5675f67d-c5ec846b'
								className='partner'
							>
								<img
									src={
										whiteSynapseNetworkHorizontalWithLabel1.src
									}
									loading='lazy'
									sizes='(max-width: 479px) 69.5546875px, (max-width: 767px) 83.4609375px, (max-width: 991px) 69.5546875px, 105.71875px'
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_2a793f43-7664-84c2-af36-be8f0606f94b-c5ec846b'
								className='partner'
							>
								<img
									src={CryptoBuddyLogo.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_99a3c9cb-6ee0-e248-bf7a-7a1c82b6956b-c5ec846b'
								className='partner'
							>
								<img
									src={CorfoLogoWhite.src}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7e8-c5ec846b'
								className='partner'
							>
								<img
									src={I084x.src}
									loading='lazy'
									width='135'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7ec-c5ec846b'
								className='partner'
							>
								<img
									src={I104x.src}
									loading='lazy'
									width='130'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7f0-c5ec846b'
								className='partner'
							>
								<img
									src={I124x.src}
									loading='lazy'
									sizes='(max-width: 479px) 88vw, (max-width: 767px) 262.859375px, 219.0546875px'
									className='partner-logo-radom'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7f2-c5ec846b'
								className='partner'
							>
								<img
									src={I134x.src}
									loading='lazy'
									sizes='(max-width: 479px) 95.84375px, (max-width: 767px) 115.015625px, (max-width: 991px) 95.84375px, 145.6875px'
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_27b5398c-c005-2a12-d077-1ff633421737-c5ec846b'
								className='partner'
							>
								<img
									src={I154x.src}
									loading='lazy'
									sizes='(max-width: 479px) 74.8203125px, (max-width: 767px) 89.7890625px, (max-width: 991px) 74.8203125px, 113.734375px'
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7f8-c5ec846b'
								className='partner'
							>
								<img
									src={I164x.src}
									loading='lazy'
									alt=''
									className='partner-logo'
								/>
							</div>
							<div
								id='w-node-_17185d9e-142f-10bf-db38-9dbfb2eaa7de-c5ec846b'
								className='partner'
							>
								<img
									src={I034x.src}
									loading='lazy'
									sizes='(max-width: 479px) 107.84375px, (max-width: 767px) 129.4140625px, (max-width: 991px) 107.84375px, 163.921875px'
									className='partner-logo'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default ServicePage;
