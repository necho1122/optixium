import TestimonialCard from '@/components/ui/TestimonialCard';

export default function Testimonials() {
	return (
		<section className='bg-gray-100 py-20 px-4'>
			<div className='container mx-auto'>
				<h2 className='text-3xl font-bold text-center mb-6 text-blue-500'>
					Testimonios
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<TestimonialCard
						author='Juan Pérez'
						quote='La automatización de procesos nos ahorró horas de trabajo manual.'
					/>
					<TestimonialCard
						author='María García'
						quote='El nuevo sitio web ha sido fundamental para nuestro negocio. Hemos visto un aumento significativo en las consultas de clientes.'
					/>
					<TestimonialCard
						author='Carlos Rodríguez'
						quote='La integración de IA en nuestro sistema de atención al cliente ha mejorado la satisfacción de nuestros clientes.'
					/>
				</div>
			</div>
		</section>
	);
}
