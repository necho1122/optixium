import ServiceCard from '@/components/ui/ServiceCard';
import {
	Cpu,
	Zap,
	Code2,
	BarChart2,
	Building2,
	Bot,
	Shield,
	PenTool,
	Database,
} from 'lucide-react';

export default function Services() {
	return (
		<section
			id='services'
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
							Nuestras Soluciones
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						Servicios
					</h2>
				</div>

				{/* Grid de servicios */}
				<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<ServiceCard
						title='Transformación Digital'
						description='Optimización y digitalización de procesos empresariales mediante herramientas modernas.'
						benefit='Eficiencia operativa y reducción de costos'
						icon={Cpu}
					/>
					<ServiceCard
						title='Desarrollo Web'
						description='Creación de sitios y aplicaciones web personalizadas con las últimas tecnologías.'
						benefit='Presencia online profesional y efectiva'
						icon={Code2}
					/>
					<ServiceCard
						title='Automatización'
						description='Implementación de sistemas automáticos y flujos de trabajo con IA.'
						benefit='Mayor productividad y precisión'
						icon={Zap}
					/>
					<ServiceCard
						title='Analytics & BI'
						description='Análisis de datos y Business Intelligence para toma de decisiones.'
						benefit='Decisiones basadas en datos'
						icon={BarChart2}
					/>
					<ServiceCard
						title='Soluciones Empresariales'
						description='Implementación de ERPs, CRMs y sistemas de gestión empresarial.'
						benefit='Gestión integral del negocio'
						icon={Building2}
					/>
					<ServiceCard
						title='Integración de IA'
						description='Incorporación de Inteligencia Artificial en procesos existentes.'
						benefit='Innovación y competitividad'
						icon={Bot}
					/>
					<ServiceCard
						title='Ciberseguridad'
						description='Protección y seguridad de datos e infraestructura digital.'
						benefit='Seguridad y confianza digital'
						icon={Shield}
					/>
					<ServiceCard
						title='Diseño UX/UI'
						description='Diseño de interfaces y experiencias de usuario intuitivas.'
						benefit='Mejor experiencia de usuario'
						icon={PenTool}
					/>
					<ServiceCard
						title='Gestión de Datos'
						description='Optimización y gestión eficiente de bases de datos empresariales.'
						benefit='Datos organizados y accesibles'
						icon={Database}
					/>
				</div>
			</div>
		</section>
	);
}
