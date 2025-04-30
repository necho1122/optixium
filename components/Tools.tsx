import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface Tool {
	name: string;
	icon: string;
}

interface ToolCategory {
	title: string;
	tools: Tool[];
}

const toolCategories: ToolCategory[] = [
	{
		title: 'Desarrollo Web',
		tools: [
			{ name: 'React', icon: '/tools/react.svg' },
			{ name: 'Next.js', icon: '/tools/nextjs.svg' },
			{ name: 'TypeScript', icon: '/tools/typescript.svg' },
			{ name: 'Node.js', icon: '/tools/nodejs.svg' },
			{ name: 'Python', icon: '/tools/python.svg' },
			{ name: 'Django', icon: '/tools/django.svg' },
		],
	},
	{
		title: 'Ofimática',
		tools: [
			{ name: 'Microsoft Office', icon: '/tools/office.svg' },
			{ name: 'Google Workspace', icon: '/tools/google-workspace.svg' },
		],
	},
	{
		title: 'Organización y Optimización',
		tools: [
			{ name: 'Notion', icon: '/tools/notion.svg' },
			{ name: 'Norton', icon: '/tools/norton.svg' },
			{ name: 'Monday', icon: '/tools/monday.svg' },
			{ name: 'Trello', icon: '/tools/trello.svg' },
		],
	},
	{
		title: 'Inteligencia Artificial',
		tools: [
			{ name: 'n8n', icon: '/tools/n8n.svg' },
			{ name: 'ChatGPT', icon: '/tools/chatgpt.svg' },
			{ name: 'MCP', icon: '/tools/mcp.svg' },
		],
	},
	{
		title: 'Diseño',
		tools: [
			{ name: 'Figma', icon: '/tools/figma.svg' },
			{ name: 'Canva', icon: '/tools/canva.svg' },
			{ name: 'Photoshop', icon: '/tools/photoshop.svg' },
		],
	},
	{
		title: 'Modelado 3D e Ingeniería',
		tools: [
			{ name: 'AutoCAD', icon: '/tools/autocad.svg' },
			{ name: 'SolidWorks', icon: '/tools/solidworks.svg' },
			{ name: 'MATLAB', icon: '/tools/matlab.svg' },
		],
	},
];

export default function Tools() {
	return (
		<section
			id='tools'
			className='relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
		>
			{/* Elementos decorativos de fondo */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-[#001E4F]/5 dark:bg-[#001E4F]/20' />
				<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent' />
			</div>

			<div className='container relative z-10 mx-auto px-4'>
				{/* Encabezado de sección */}
				<div className='text-center mb-16'>
					<div className='inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20'>
						<span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
							Nuestras Herramientas
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
						Tecnologías que Implementamos
					</h2>
					<p className='mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Utilizamos las mejores herramientas y tecnologías para garantizar
						soluciones eficientes y profesionales.
					</p>
				</div>

				{/* Grid de categorías */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{toolCategories.map((category, index) => (
						<Card
							key={index}
							className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50'
						>
							<CardHeader>
								<CardTitle className='text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
									{category.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='grid grid-cols-3 gap-4'>
									{category.tools.map((tool, idx) => (
										<div
											key={idx}
											className='flex flex-col items-center justify-center p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors'
										>
											<div className='relative w-12 h-12 mb-2'>
												<Image
													src={tool.icon}
													alt={tool.name}
													fill
													className='object-contain'
												/>
											</div>
											<span className='text-xs text-center text-gray-600 dark:text-gray-300'>
												{tool.name}
											</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
