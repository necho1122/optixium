'use client';

import { useCallback, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
	{ label: 'Inicio', href: '#hero' },
	{ label: 'Nosotros', href: '#about' },
	{ label: 'Servicios', href: '#services' },
	{ label: 'Herramientas', href: '#tools' },
	{ label: 'Portafolio', href: '#portfolio' },
	{ label: 'Testimonios', href: '#testimonials' },
	{ label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const scrollToSection = useCallback((href: string) => {
		const targetId = href.replace('#', '');
		const element = document.getElementById(targetId);

		if (element) {
			const yOffset = -80; // header height offset
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

			window.scrollTo({
				top: y,
				behavior: 'smooth',
			});
			setIsOpen(false);
		}
	}, []);

	// Detectar scroll para cambiar el fondo del navbar
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
				isScrolled || isOpen
					? 'bg-[#001E4F]/90 backdrop-blur-sm'
					: 'bg-transparent'
			}`}
		>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo espacio */}
					<div className='w-[120px] sm:w-[150px]' />

					{/* Menú desktop */}
					<ul className='hidden lg:flex items-center gap-4 xl:gap-6'>
						{navItems.map((item) => (
							<li key={item.href}>
								<button
									onClick={() => scrollToSection(item.href)}
									className='relative px-2 xl:px-3 py-2 text-blue-100 hover:text-white transition-colors text-sm font-medium 
                    cursor-pointer select-none whitespace-nowrap
                    before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                    before:bg-blue-400 before:transition-all before:duration-300
                    hover:before:w-full active:scale-95'
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>

					{/* Botón menú móvil */}
					<button
						className='lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors 
              active:scale-95 cursor-pointer select-none'
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Menú móvil */}
				{isOpen && (
					<div className='lg:hidden'>
						<ul className='px-2 pt-2 pb-4 space-y-1'>
							{navItems.map((item) => (
								<li key={item.href}>
									<button
										onClick={() => scrollToSection(item.href)}
										className='block w-full text-left px-4 py-3 text-blue-100 
                      hover:text-white hover:bg-blue-500/10 active:bg-blue-500/20
                      rounded-lg transition-all duration-200 text-sm font-medium
                      cursor-pointer select-none active:scale-[0.98]'
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
