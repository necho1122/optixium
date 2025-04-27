export function Input({
	type = 'text',
	placeholder,
	className,
}: {
	type?: string;
	placeholder?: string;
	className?: string;
}) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
		/>
	);
}
