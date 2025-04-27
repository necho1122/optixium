import ServiceCard from '@/components/ui/ServiceCard';
import { Cpu, Zap, Code2 } from 'lucide-react';

export default function Services() {
	return (
		<section className='relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900'>
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
							Nuestras Soluciones
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						Servicios
					</h2>
				</div>

				{/* Grid de servicios */}
				<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
					<ServiceCard
						title='Transformación Digital'
						description='Optimización de procesos mediante herramientas digitales.'
						benefit='Ahorro de tiempo y trabajo organizado'
						icon={Cpu}
					/>
					<ServiceCard
						title='Desarrollo Web'
						description='Creación de sitios web rápidos y efectivos.'
						benefit='Presencia online profesional'
						icon={Code2}
					/>
					<ServiceCard
						title='Automatización'
						description='Automatización de tareas con herramientas modernas.'
						benefit='Mayor eficiencia y productividad'
						icon={Zap}
					/>
				</div>
			</div>
		</section>
	);
}
