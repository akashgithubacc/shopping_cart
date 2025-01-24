export interface Service {
	id: number;
	title: string;
	description: string;
	cost: number;
	isAddedToCart: boolean;
}

export const catalogue: Service[] = [
	{
		id: 1,
		title: "Yoga Class",
		description:
			"A relaxing session focusing on flexibility, strength, and mindfulness through yoga.",
		cost: 2000,
		isAddedToCart: false,
	},
	{
		id: 2,
		title: "One-on-One Therapy",
		description:
			"A personalized therapy session with a licensed therapist to address mental health concerns.",
		cost: 1000,
		isAddedToCart: false,
	},
	{
		id: 3,
		title: "Creative Writing Workshop",
		description:
			"Learn storytelling, poetry, and creative writing techniques in a hands-on workshop.",
		cost: 500,
		isAddedToCart: false,
	},
	{
		id: 4,
		title: "Spa Therapy",
		description:
			"A rejuvenating spa session to relax and de-stress your body and mind.",
		cost: 3000,
		isAddedToCart: false,
	},
	{
		id: 5,
		title: "Coding Bootcamp",
		description:
			"A beginner-friendly workshop to learn the basics of web development and coding.",
		cost: 1500,
		isAddedToCart: false,
	},
	{
		id: 6,
		title: "Personal Styling Consultation",
		description:
			"A one-hour session with a professional stylist to refine your wardrobe and personal style.",
		cost: 1000,
		isAddedToCart: false,
	},
	{
		id: 7,
		title: "Basic Health Checkup",
		description:
			"A comprehensive health checkup package to monitor your overall health and fitness.",
		cost: 750,
		isAddedToCart: false,
	},
];
