import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaGithub,
} from 'react-icons/fa';
import { contactInfo } from '@/config/contact';

export default function Footer() {
	return (
		<footer className='bg-[#001E4F] text-white'>
			<div className='container mx-auto px-4 py-16'>
				{/* Grid principal */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Columna 1 - Información de la empresa */}
					<div className='space-y-6'>
						<Image
							src='/logo.png'
							alt='Optixium Logo'
							width={150}
							height={50}
							className='object-contain'
						/>
						<p className='text-blue-100/80 text-sm'>
							Transformamos negocios a través de soluciones digitales
							innovadoras y personalizadas.
						</p>
						<div className='flex space-x-4'>
							<Link
								href={contactInfo.social.facebook}
								className='hover:text-blue-400 transition-colors'
							>
								<FaFacebookF size={20} />
							</Link>
							<Link
								href={contactInfo.social.instagram}
								className='hover:text-blue-400 transition-colors'
							>
								<FaInstagram size={20} />
							</Link>
							<Link
								href={contactInfo.social.linkedin}
								className='hover:text-blue-400 transition-colors'
							>
								<FaLinkedinIn size={20} />
							</Link>
							<Link
								href={contactInfo.social.github || '#'}
								className='hover:text-blue-400 transition-colors'
							>
								<FaGithub size={20} />
							</Link>
						</div>
					</div>

					{/* Columna 2 - Enlaces rápidos */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Enlaces Rápidos</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#about'
									className='text-blue-100/80 hover:text-white transition-colors'
								>
									Sobre Nosotros
								</Link>
							</li>
							<li>
								<Link
									href='#services'
									className='text-blue-100/80 hover:text-white transition-colors'
								>
									Servicios
								</Link>
							</li>
							<li>
								<Link
									href='#portfolio'
									className='text-blue-100/80 hover:text-white transition-colors'
								>
									Portafolio
								</Link>
							</li>
							<li>
								<Link
									href='#contact'
									className='text-blue-100/80 hover:text-white transition-colors'
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					{/* Columna 3 - Servicios */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Servicios</h3>
						<ul className='space-y-3'>
							<li className='text-blue-100/80'>Transformación Digital</li>
							<li className='text-blue-100/80'>Desarrollo Web</li>
							<li className='text-blue-100/80'>Automatización</li>
							<li className='text-blue-100/80'>Analytics & BI</li>
							<li className='text-blue-100/80'>Integración de IA</li>
						</ul>
					</div>

					{/* Columna 4 - Contacto */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contacto</h3>
						<ul className='space-y-3'>
							<li className='flex items-center gap-2 text-blue-100/80'>
								<Mail size={16} />
								<span>{contactInfo.email}</span>
							</li>
							<li className='flex items-center gap-2 text-blue-100/80'>
								<Phone size={16} />
								<span>{contactInfo.whatsapp}</span>
							</li>
							<li className='flex items-center gap-2 text-blue-100/80'>
								<MapPin size={16} />
								<span>Brazil</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Borde separador */}
				<div className='border-t border-blue-900 my-8' />

				{/* Copyright */}
				<div className='text-center text-blue-100/60 text-sm'>
					<p>
						&copy; {new Date().getFullYear()} Optixium. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
