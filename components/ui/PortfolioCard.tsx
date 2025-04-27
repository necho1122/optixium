import Image from 'next/image';

export default function PortfolioCard({
	title,
	description,
	imageUrl,
}: {
	title: string;
	description: string;
	imageUrl: string;
}) {
	return (
		<div className='overflow-hidden transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'>
			<div className='relative'>
				<Image
					src={imageUrl}
					alt={title}
					width={600}
					height={400}
					className='w-full h-48 object-cover'
				/>
				<div className='absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-50 flex items-center justify-center'>
					<h3 className='text-white text-xl font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100'>
						{title}
					</h3>
				</div>
			</div>
			<div className='p-4'>
				<p className='text-gray-700 mt-2'>{description}</p>
			</div>
		</div>
	);
}
