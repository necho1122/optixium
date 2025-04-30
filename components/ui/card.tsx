interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className = '' }: CardProps) {
	return <div className={className}>{children}</div>;
}

export function CardHeader({ children, className = '' }: CardProps) {
	return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: CardProps) {
	return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: CardProps) {
	return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: CardProps) {
	return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}
