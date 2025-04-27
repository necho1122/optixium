export default function TestimonialCard({
	author,
	quote,
}: {
	author: string;
	quote: string;
}) {
	return (
		<div className='bg-gray-100 border-l-4 border-blue-500 shadow-md p-4'>
			<p className='italic text-gray-800'>&quot;{quote}&quot;</p>
			<p className='font-semibold text-gray-600 mt-2'>- {author}</p>
		</div>
	);
}
