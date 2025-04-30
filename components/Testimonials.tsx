import TestimonialCard from '@/components/ui/TestimonialCard';

export default function Testimonials() {
	return (
		<section
			id='testimonials'
			className='relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900'
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
							Clientes Satisfechos
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						Lo que dicen nuestros clientes
					</h2>
					<p className='mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Descubre cómo nuestras soluciones han impactado positivamente en
						diferentes empresas
					</p>
				</div>

				<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<TestimonialCard
						author='Juan Pérez'
						position='Director de Operaciones'
						company='TechSolutions Inc.'
						quote='La implementación de la automatización de procesos ha revolucionado nuestra eficiencia operativa, reduciendo las tareas manuales en un 60%.'
					/>
					<TestimonialCard
						author='María García'
						position='CEO'
						company='Digital Growth'
						quote='Gracias a la optimización de nuestra presencia digital, hemos experimentado un incremento del 150% en leads cualificados.'
					/>
					<TestimonialCard
						author='Carlos Rodríguez'
						position='Gerente de Atención al Cliente'
						company='ServicePro'
						quote='La integración de IA en nuestro sistema de atención al cliente ha mejorado los tiempos de respuesta en un 80% y la satisfacción del cliente en un 40%.'
					/>
				</div>
			</div>
		</section>
	);
}
