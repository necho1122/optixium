export const contactInfo = {
	email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@optixium.digital',
	whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '+1234567890',
	telegram: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '@optixium',
	social: {
		facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || '#',
		instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '#',
		twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || '#',
		linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || '#',
		github: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || '#',
	},
	calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || '#',
};
