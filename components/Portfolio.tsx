import PortfolioCard from '@/components/ui/PortfolioCard';

export default function Portfolio() {
	return (
		<section
			id='portfolio'
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
							Casos de Éxito
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						Nuestro Portafolio
					</h2>
					<p className='mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Descubre cómo hemos ayudado a empresas a transformar sus operaciones
						y alcanzar nuevos niveles de eficiencia.
					</p>
				</div>

				{/* Grid de proyectos */}
				<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<PortfolioCard
						title='Automatización de Ventas'
						description='Implementación de un sistema de CRM automatizado para una empresa de ventas, reduciendo el tiempo de seguimiento en un 40%.'
						imageUrl='https://img.freepik.com/free-photo/digital-environment-scene_23-2151873117.jpg'
					/>
					<PortfolioCard
						title='Sitio Web de Comercio Electrónico'
						description='Desarrollo de un sitio web de comercio electrónico personalizado para una tienda local, aumentando las ventas en línea en un 30%.'
						imageUrl='https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4290.jpg'
					/>
					<PortfolioCard
						title='Integración de IA para Atención al Cliente'
						description='Creación de un chatbot de IA para mejorar la atención al cliente de una empresa de servicios, reduciendo los tiempos de espera en un 50%.'
						imageUrl='https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149237081.jpg'
					/>
				</div>
			</div>
		</section>
	);
}
