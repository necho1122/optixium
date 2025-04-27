'use client';

import { motion } from 'framer-motion';

export function HeroAnimation({ children }: { children: React.ReactNode }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='relative bg-cover bg-center bg-fixed'
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
			}}
		>
			{children}
		</motion.section>
	);
}
