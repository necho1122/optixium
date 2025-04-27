export function Card({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={`bg-white rounded-lg p-4 ${className}`}>{children}</div>
	);
}

export function CardHeader({ children }: { children: React.ReactNode }) {
	return <div className='mb-4'>{children}</div>;
}

export function CardTitle({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
	return <p className='text-gray-600'>{children}</p>;
}
