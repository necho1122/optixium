import { Mail, Calendar } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Cambiado a minúsculas

export default function Contact() {
	return (
		<section className='container mx-auto py-20 px-4'>
			<h2 className='text-3xl font-bold text-center mb-6 text-blue-500'>
				Contacto
			</h2>
			<p className='text-gray-700 text-center mb-6'>
				¿Listo para llevar tu productividad al siguiente nivel? ¡Contáctame para
				agendar una consulta gratuita!
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
				{/* Formulario de Contacto */}
				<Card className='shadow-lg'>
					<CardHeader>
						<CardTitle>Envíame un mensaje</CardTitle>
						<CardDescription>
							Completa el formulario y me pondré en contacto contigo a la
							brevedad.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-4'>
							<Input
								type='text'
								placeholder='Tu nombre'
							/>
							<Input
								type='email'
								placeholder='Tu correo electrónico'
							/>
							<Textarea
								placeholder='Tu mensaje'
								rows={4}
							/>
							<CTAButton>Enviar mensaje</CTAButton>
						</div>
					</CardContent>
				</Card>
				{/* Información de Contacto Adicional */}
				<div>
					<div className='space-y-4'>
						<div className='flex items-center gap-2'>
							<Mail className='w-5 h-5 text-blue-500' />
							<p>
								<strong>Email:</strong> [Tu Correo Electrónico]
							</p>
						</div>
						<div className='flex items-center gap-2'>
							<Calendar className='w-5 h-5 text-blue-500' />
							<p>
								<strong>Agenda una consulta:</strong> [Enlace a Calendly]
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
