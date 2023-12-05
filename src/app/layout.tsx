import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import './webflow.css';
import './normalize.css';
import './smartspyai.webflow.css';
import Footer from '../components/footer';
import DashboardHeader from '../components/header';

const manrope = Manrope({ subsets: ['latin'] });
// const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Smartspy',
	description:
		'Leverage cutting-edge AI techniques combined with multiple analysis tools for comprehensive and granular level vulnerability detection.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='body'>
				<div className='body-smartspyai-home'>
					<DashboardHeader />
					{children}

					<Footer />
				</div>
			</body>
		</html>
	);
}
