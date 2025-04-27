import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function ServiceCard({
	title,
	description,
	benefit,
	icon: Icon,
}: {
	title: string;
	description: string;
	benefit: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) {
	return (
		<Card className='group hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'>
			<CardHeader>
				<div className='flex items-center gap-4'>
					<div className='p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors'>
						<Icon className='w-6 h-6 text-blue-600 dark:text-blue-400' />
					</div>
					<CardTitle className='text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						{title}
					</CardTitle>
				</div>
			</CardHeader>
			<CardContent className='space-y-4'>
				<CardDescription className='text-gray-600 dark:text-gray-300'>
					{description}
				</CardDescription>
				<div className='pt-4 border-t border-gray-200/50 dark:border-gray-700/50'>
					<p className='text-sm font-medium text-blue-600 dark:text-blue-400'>
						Beneficio: {benefit}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
