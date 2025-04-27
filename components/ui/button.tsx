export function Button({
	children,
	onClick,
	className,
}: {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}) {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
		>
			{children}
		</button>
	);
}
