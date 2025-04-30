import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Tools from '@/components/Tools';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div className='bg-gray-50'>
			<Hero />
			<About />
			<Services />
			<Tools />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}
