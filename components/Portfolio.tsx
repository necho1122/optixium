import PortfolioCard from '@/components/ui/PortfolioCard';

export default function Portfolio() {
	return (
		<section className='container mx-auto py-20 px-4'>
			<h2 className='text-3xl font-bold text-center mb-6 text-blue-500'>
				Portafolio
			</h2>
			<p className='text-gray-700 text-center mb-6'>
				Aquí encontrarás algunos ejemplos de mi trabajo. Si bien este portafolio
				es ficticio, representa los tipos de proyectos que podrías incluir en tu
				sitio web real.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
				<PortfolioCard
					title='Automatización de Ventas'
					description='Implementación de un sistema de CRM automatizado para una empresa de ventas, reduciendo el tiempo de seguimiento en un 40%.'
					imageUrl='https://source.unsplash.com/random/600x400?sales'
				/>
				<PortfolioCard
					title='Sitio Web de Comercio Electrónico'
					description='Desarrollo de un sitio web de comercio electrónico personalizado para una tienda local, aumentando las ventas en línea en un 30%.'
					imageUrl='https://source.unsplash.com/random/600x400?ecommerce'
				/>
				<PortfolioCard
					title='Integración de IA para Atención al Cliente'
					description='Creación de un chatbot de IA para mejorar la atención al cliente de una empresa de servicios, reduciendo los tiempos de espera en un 50%.'
					imageUrl='https://source.unsplash.com/random/600x400?ai'
				/>
			</div>
		</section>
	);
}
