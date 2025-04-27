export function Textarea({
	placeholder,
	rows = 3,
	className,
}: {
	placeholder?: string;
	rows?: number;
	className?: string;
}) {
	return (
		<textarea
			placeholder={placeholder}
			rows={rows}
			className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
		/>
	);
}
