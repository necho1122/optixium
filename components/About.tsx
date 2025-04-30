import Image from 'next/image';
import { AboutAnimation, AboutItem } from './animations/AboutAnimation';

export default function About() {
	return (
		<section
			id='about'
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
							Nuestra Historia
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						Quiénes Somos
					</h2>
				</div>

				<AboutAnimation>
					<div className='grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto'>
						<AboutItem className='flex justify-center'>
							<div className='relative'>
								<div className='absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl' />
								<Image
									src='https://img.freepik.com/premium-photo/close-up-female-hand-holding-smartphone-with-creative-digital-computer-folder-with-cogs-mesh-arrows-blurry-backdrop-project-management-icon-folder-project-goals-task-management-concept_670147-87652.jpg'
									alt='Espacio de trabajo moderno con tecnología'
									width={600}
									height={400}
									className='relative rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 object-cover'
								/>
							</div>
						</AboutItem>

						<AboutItem>
							<div className='space-y-6'>
								<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
									Somos una empresa especializada en{' '}
									<span className='font-semibold text-blue-600 dark:text-blue-400'>
										optimizacion, transformación digital y automatización de tareas
									</span>
									. Desde nuestra fundación, nos hemos dedicado a potenciar el
									crecimiento de profesionales y empresas a través de soluciones
									tecnológicas innovadoras y personalizadas.
								</p>
								<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
									Nuestra misión es simplificar y optimizar los procesos
									empresariales mediante la integración de tecnologías
									avanzadas. Nos enorgullece ayudar a nuestros clientes a
									alcanzar nuevos niveles de eficiencia y productividad,
									permitiéndoles concentrarse en lo que realmente importa: hacer
									crecer sus negocios.
								</p>
							</div>
						</AboutItem>
					</div>
				</AboutAnimation>
			</div>
		</section>
	);
}
