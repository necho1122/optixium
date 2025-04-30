import { ReactNode } from 'react';

interface CTAButtonProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

export default function CTAButton({
	children,
	onClick,
	className = '',
	type = 'button',
	disabled = false,
}: CTAButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 
        text-white rounded-lg font-medium transition-colors flex items-center 
        justify-center gap-2 disabled:cursor-not-allowed ${className}`}
		>
			{children}
		</button>
	);
}
