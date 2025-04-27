import { Button } from '@/components/ui/button';

export default function CTAButton({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<Button
			onClick={onClick}
			className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl'
		>
			{children}
		</Button>
	);
}
