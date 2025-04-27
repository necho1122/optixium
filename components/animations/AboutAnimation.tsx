'use client';

import { motion } from 'framer-motion';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export function AboutAnimation({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			className='flex flex-col md:flex-row items-center gap-8'
		>
			{children}
		</motion.div>
	);
}

export function AboutItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			variants={itemVariants}
			className={className}
		>
			{children}
		</motion.div>
	);
}
