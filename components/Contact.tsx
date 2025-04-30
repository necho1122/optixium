'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
	Mail,
	Calendar,
	Facebook,
	Instagram,
	Twitter,
	MessageCircle,
} from 'lucide-react';
import { contactInfo } from '@/config/contact';
import CTAButton from '@/components/ui/CTAButton';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus('idle');

		const form = e.currentTarget;

		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				form,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);
			setStatus('success');
			form.reset();
		} catch (error) {
			setStatus('error');
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section
			id='contact'
			className='relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
		>
			{/* Elementos decorativos de fondo */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-[#001E4F]/5 dark:bg-[#001E4F]/20' />
				<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent' />
			</div>

			<div className='container relative z-10 mx-auto px-4'>
				{/* Encabezado de sección */}
				<div className='text-center mb-16'>
					<div className='inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20'>
						<span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
							Comunícate con nosotros
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						¿Listo para optimizar tu negocio?
					</h2>
					<p className='mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Contáctanos por cualquiera de nuestros canales y descubre cómo
						podemos ayudarte a transformar tu empresa
					</p>
				</div>

				<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12'>
					{/* Formulario de Contacto */}
					<Card className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-xl'>
						<CardHeader className='space-y-1'>
							<CardTitle className='text-2xl font-bold'>
								Agenda una consulta
							</CardTitle>
							<CardDescription>
								Cuéntanos sobre tu proyecto y te contactaremos en breve
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form
								onSubmit={handleSubmit}
								className='space-y-4'
							>
								<Input
									type='text'
									name='user_name'
									placeholder='Nombre completo'
									className='bg-white/70 dark:bg-gray-900/70'
									required
								/>
								<Input
									type='email'
									name='user_email'
									placeholder='Correo electrónico'
									className='bg-white/70 dark:bg-gray-900/70'
									required
								/>
								<Textarea
									name='message'
									placeholder='Describe brevemente tu proyecto'
									rows={4}
									className='bg-white/70 dark:bg-gray-900/70'
									required
								/>
								<CTAButton
									type='submit'
									className='w-full'
									disabled={isLoading}
								>
									{isLoading ? 'Enviando...' : 'Enviar mensaje'}
								</CTAButton>

								{status === 'success' && (
									<p className='text-green-600 text-sm'>
										¡Mensaje enviado con éxito! Te contactaremos pronto.
									</p>
								)}

								{status === 'error' && (
									<p className='text-red-600 text-sm'>
										Hubo un error al enviar el mensaje. Por favor, intenta
										nuevamente.
									</p>
								)}
							</form>
						</CardContent>
					</Card>

					{/* Información de Contacto y Redes Sociales */}
					<div className='space-y-8'>
						{/* Contacto Rápido */}
						<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg'>
							<h3 className='text-xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
								Contacto Rápido
							</h3>
							<div className='space-y-4'>
								<a
									href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 p-3 bg-green-500/10 hover:bg-green-500/20 text-green-600 rounded-xl transition-colors'
								>
									<MessageCircle className='w-5 h-5' />
									<span>WhatsApp: {contactInfo.whatsapp}</span>
								</a>
								<a
									href={`mailto:${contactInfo.email}`}
									className='flex items-center gap-3 p-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 rounded-xl transition-colors'
								>
									<Mail className='w-5 h-5' />
									<span>{contactInfo.email}</span>
								</a>
								<a
									href={`https://t.me/${contactInfo.telegram}`}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 p-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 rounded-xl transition-colors'
								>
									<MessageCircle className='w-5 h-5' />
									<span>Telegram: @{contactInfo.telegram}</span>
								</a>
							</div>
						</div>

						{/* Redes Sociales */}
						<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg'>
							<h3 className='text-xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
								Síguenos en redes
							</h3>
							<div className='grid grid-cols-2 gap-4'>
								<a
									href={contactInfo.social.facebook}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 p-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 rounded-xl transition-colors'
								>
									<Facebook className='w-5 h-5' />
									<span>Facebook</span>
								</a>
								<a
									href={contactInfo.social.instagram}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 p-3 bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 rounded-xl transition-colors'
								>
									<Instagram className='w-5 h-5' />
									<span>Instagram</span>
								</a>
								<a
									href={contactInfo.social.twitter}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 p-3 bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 rounded-xl transition-colors'
								>
									<Twitter className='w-5 h-5' />
									<span>Twitter</span>
								</a>
								<a
									href={`https://t.me/${contactInfo.telegram}`}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 p-3 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 rounded-xl transition-colors'
								>
									<MessageCircle className='w-5 h-5' />
									<span>Telegram</span>
								</a>
							</div>
						</div>

						{/* Calendario */}
						<div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg'>
							<h3 className='text-xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
								Agenda una llamada
							</h3>
							<a
								href={contactInfo.calendly}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3 p-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 rounded-xl transition-colors'
							>
								<Calendar className='w-5 h-5' />
								<span>Reserva una cita en Calendly</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
