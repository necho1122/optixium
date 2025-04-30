interface TestimonialCardProps {
	author: string;
	position: string;
	company: string;
	quote: string;
	className?: string;
}

export default function TestimonialCard({
	author,
	position,
	company,
	quote,
	className = '',
}: TestimonialCardProps) {
	return (
		<div
			className={`group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 ${className}`}
		>
			<div className='space-y-4'>
				<div className='relative'>
					<svg
						className='absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-16 w-16 text-gray-100 dark:text-gray-700'
						fill='currentColor'
						viewBox='0 0 32 32'
						aria-hidden='true'
					>
						<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
					</svg>
					<p className='relative text-lg text-gray-600 dark:text-gray-300'>
						&quot;{quote}&quot;
					</p>
				</div>
				<div className='mt-6'>
					<p className='font-semibold text-gray-900 dark:text-white'>
						{author}
					</p>
					<p className='text-sm text-blue-600 dark:text-blue-400'>{position}</p>
					<p className='text-sm text-gray-500 dark:text-gray-400'>{company}</p>
				</div>
			</div>
		</div>
	);
}
