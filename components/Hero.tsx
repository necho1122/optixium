'use client';

import { HeroAnimation } from './animations/HeroAnimation';
import CTAButton from '@/components/ui/CTAButton';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';

export default function Hero() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const yOffset = -80;
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	return (
		<HeroAnimation>
			<div
				id='hero'
				className='relative'
			>
				{/* Logo */}
				<div className='fixed top-4 left-4 z-50'>
					<Image
						src='/logo.png'
						alt='Company Logo'
						width={150}
						height={50}
						className='object-contain'
					/>
				</div>

				{/* Navbar */}
				<Navbar />

				<div className='relative h-screen flex items-center justify-center'>
					{/* Overlay con gradiente */}
					<div className='absolute inset-0 bg-gradient-to-br from-[#001E4F]/90 via-[#001E4F]/85 to-black/50' />

					{/* Contenido principal */}
					<div className='container relative mx-auto px-4 py-12 md:py-16 text-center'>
						<div className='max-w-4xl mx-auto space-y-8'>
							{/* Badge */}
							<div className='inline-block px-6 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20'>
								<span className='text-blue-200 font-medium'>
									Optimización + Tecnología + Automatización + Innovación
								</span>
							</div>

							{/* Título principal */}
							<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>
								<span className='bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent'>
									Soluciones Digitales que Transforman tu Negocio
								</span>
							</h1>

							{/* Descripción */}
							<p className='text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed'>
								Automatización inteligente y soluciones digitales personalizadas
								para impulsar tu productividad y transformar tu manera de
								trabajar.
							</p>

							{/* Llamada a la acción */}
							<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
								<CTAButton onClick={() => scrollToSection('contact')}>
									Agenda una consulta gratuita
								</CTAButton>
								<button
									onClick={() => scrollToSection('portfolio')}
									className='px-6 py-3 text-blue-200 hover:text-white transition-colors flex items-center gap-2'
								>
									Ver portafolio
									<svg
										className='w-4 h-4'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 5l7 7-7 7'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeroAnimation>
	);
}
