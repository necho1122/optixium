import Image from 'next/image';

interface PortfolioCardProps {
	title: string;
	description: string;
	imageUrl: string;
	className?: string;
}

export default function PortfolioCard({
	title,
	description,
	imageUrl,
	className = '',
}: PortfolioCardProps) {
	return (
		<div
			className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}
		>
			<div className='aspect-video relative overflow-hidden'>
				<Image
					src={imageUrl}
					alt={title}
					width={600}
					height={400}
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>
			<div className='p-6'>
				<h3 className='text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3'>
					{title}
				</h3>
				<p className='text-gray-600 dark:text-gray-300 text-sm'>
					{description}
				</p>
			</div>
		</div>
	);
}
