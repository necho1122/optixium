import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	themeColor: '#001E4F',
	metadataBase: new URL('https://optixium.digital'),
	title: {
		default: 'Optimización y Soluciones Digitales | Optixium',
		template: '%s | Optixium',
	},
	description:
		'Transformamos tu negocio con soluciones digitales personalizadas. Especialistas en automatización, desarrollo web y optimización de procesos empresariales.',
	keywords: [
		'automatización',
		'desarrollo web',
		'transformación digital',
		'optimización de procesos',
		'soluciones empresariales',
	],
	authors: [
		{ name: 'Optixium', url: 'https://Optixium.digital' },
		{ name: 'Nelson Ubac', url: 'https://nelson-dev-portfolio.vercel.app/' },
	],
	creator: 'Nelson Ubac',
	publisher: 'Optixium',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://optixium.digital',
		title: 'Optimización y Soluciones Digitales | Optixium',
		description:
			'Transformamos tu negocio con soluciones digitales personalizadas.',
		siteName: 'Optixium',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Optixium - Soluciones Digitales',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Optimización y Soluciones Digitales | Optixium',
		description:
			'Transformamos tu negocio con soluciones digitales personalizadas.',
		images: ['/og-image.jpg'],
	},
	icons: {
		icon: '/favicon.ico',
	},
	manifest: '/manifest.json',
	verification: {
		google: 'tu-código-de-verificación-de-google',
		other: {
			'msvalidate.01': '3A7262508144352EF1FADB2E137E2926',
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
